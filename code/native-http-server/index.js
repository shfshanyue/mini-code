const net = require('net')
const Stream = require('stream');

// _ 代表私有变量，是 Node 源码中的命名风格，尽管在目前最新的 ES 中可以使用 # 作为私有变量，但是太丑，不予采用

const CRLF = '\r\n'
const HIGH_WATER_MARK = 65535
const STATUS_CODES = {
  100: 'Continue',                   // RFC 7231 6.2.1
  101: 'Switching Protocols',        // RFC 7231 6.2.2
  102: 'Processing',                 // RFC 2518 10.1 (obsoleted by RFC 4918)
  103: 'Early Hints',                // RFC 8297 2
  200: 'OK',                         // RFC 7231 6.3.1
  201: 'Created',                    // RFC 7231 6.3.2
  202: 'Accepted',                   // RFC 7231 6.3.3
  203: 'Non-Authoritative Information', // RFC 7231 6.3.4
  204: 'No Content',                 // RFC 7231 6.3.5
  205: 'Reset Content',              // RFC 7231 6.3.6
  206: 'Partial Content',            // RFC 7233 4.1
  207: 'Multi-Status',               // RFC 4918 11.1
  208: 'Already Reported',           // RFC 5842 7.1
  226: 'IM Used',                    // RFC 3229 10.4.1
  300: 'Multiple Choices',           // RFC 7231 6.4.1
  301: 'Moved Permanently',          // RFC 7231 6.4.2
  302: 'Found',                      // RFC 7231 6.4.3
  303: 'See Other',                  // RFC 7231 6.4.4
  304: 'Not Modified',               // RFC 7232 4.1
  305: 'Use Proxy',                  // RFC 7231 6.4.5
  307: 'Temporary Redirect',         // RFC 7231 6.4.7
  308: 'Permanent Redirect',         // RFC 7238 3
  400: 'Bad Request',                // RFC 7231 6.5.1
  401: 'Unauthorized',               // RFC 7235 3.1
  402: 'Payment Required',           // RFC 7231 6.5.2
  403: 'Forbidden',                  // RFC 7231 6.5.3
  404: 'Not Found',                  // RFC 7231 6.5.4
  405: 'Method Not Allowed',         // RFC 7231 6.5.5
  406: 'Not Acceptable',             // RFC 7231 6.5.6
  407: 'Proxy Authentication Required', // RFC 7235 3.2
  408: 'Request Timeout',            // RFC 7231 6.5.7
  409: 'Conflict',                   // RFC 7231 6.5.8
  410: 'Gone',                       // RFC 7231 6.5.9
  411: 'Length Required',            // RFC 7231 6.5.10
  412: 'Precondition Failed',        // RFC 7232 4.2
  413: 'Payload Too Large',          // RFC 7231 6.5.11
  414: 'URI Too Long',               // RFC 7231 6.5.12
  415: 'Unsupported Media Type',     // RFC 7231 6.5.13
  416: 'Range Not Satisfiable',      // RFC 7233 4.4
  417: 'Expectation Failed',         // RFC 7231 6.5.14
  418: 'I\'m a Teapot',              // RFC 7168 2.3.3
  421: 'Misdirected Request',        // RFC 7540 9.1.2
  422: 'Unprocessable Entity',       // RFC 4918 11.2
  423: 'Locked',                     // RFC 4918 11.3
  424: 'Failed Dependency',          // RFC 4918 11.4
  425: 'Too Early',                  // RFC 8470 5.2
  426: 'Upgrade Required',           // RFC 2817 and RFC 7231 6.5.15
  428: 'Precondition Required',      // RFC 6585 3
  429: 'Too Many Requests',          // RFC 6585 4
  431: 'Request Header Fields Too Large', // RFC 6585 5
  451: 'Unavailable For Legal Reasons', // RFC 7725 3
  500: 'Internal Server Error',      // RFC 7231 6.6.1
  501: 'Not Implemented',            // RFC 7231 6.6.2
  502: 'Bad Gateway',                // RFC 7231 6.6.3
  503: 'Service Unavailable',        // RFC 7231 6.6.4
  504: 'Gateway Timeout',            // RFC 7231 6.6.5
  505: 'HTTP Version Not Supported', // RFC 7231 6.6.6
  506: 'Variant Also Negotiates',    // RFC 2295 8.1
  507: 'Insufficient Storage',       // RFC 4918 11.5
  508: 'Loop Detected',              // RFC 5842 7.2
  509: 'Bandwidth Limit Exceeded',
  510: 'Not Extended',               // RFC 2774 7
  511: 'Network Authentication Required' // RFC 6585 6
};

class HTTPParser {
  constructor (socket) {
    this.socket = socket
    this.headerMessage = ''
  }

  // 为了服务器的性能，此部分的解析交由 C++ 的 llhttp 来完成
  parser () {
    this.socket.on('data', (chunk) => {
      this.headerMessage += chunk

      // 当接收到 headers 报文时，判断是否以 \r\n\r\n 结尾，表明 header 已经全部接收
      if (this.headerMessage.endsWith('\r\n\r\n')) {
        this.parserOnData(this.headerMessage)

        // 接受结束本次报文后，再把 header 置空
        this.headerMessage = ''
      }
    })
  }

  // 在该方法中用以解析 method、url、version 以及 headers，此处方法较为粗糙，示例:
  //
  // 'GET /index.html HTTP/1.1',
  // 'Hostname: shanyue.tech',
  // 'Content-Length: 9',
  //
  parserOnData (headerMessage) {
    const rows = headerMessage.split('\r\n')
    const [method, url, version] = rows[0].split(' ')

    // 解析 Request Header，注意 Hostname: localhost:8080 有可能有两个冒号，也有可能没有冒号
    const headers = rows.slice(1, -2)
      .filter(row => row.includes(':'))
      .map(x => {
        const [field, ...value] = x.split(/:/)
        return [field.trim(), value.join('').trim()]
      })
    this.parserOnHeadersComplete(version, headers, method, url)
  }

  parserOnBody() {

  }

  parserOnMessageComplete() {

  }

  parserOnHeadersComplete(version, headers, method, url) {
    const req = new IncomingMessage(this.socket)
    req.version = version
    req.headers = Object.fromEntries(headers)
    req.method = method
    req.url = url

    return this.onIncoming(req)
  }
}


class IncomingMessage extends Stream.Readable {
  constructor(socket) {
    super({
      autoDestroy: false,
      highWaterMark: socket.readable.highWaterMark
    })
    this.socket = socket
    this.trailers = null
    this.complete = false
    this.headerMessage = ''
    this.headers = []
    this.rawHeaders = ''
    this.url = null
    this.method = null
    this._readableState.readingMore = true

  }

  _addHeaderLines(headers) {
    this.headers = headers
  }
}

class OutgoingMessage extends Stream {
  constructor() {
    super()
    this._header = null
    this._headerSent = false
    this._contentLength = 0
    this._hasBody = true
    this._onPendingData = () => { }
    this.socket = null
    this.outputSize = 0
    this.finished = false
    this.outputData = []
  }

  _writeRaw(data, encoding, callback) {
    if (this.socket.writable) {
      return this.socket.write(data, encoding, callback)
    }
    this.outputData.push({ data, encoding, callback });
    this.outputSize += data.length;
    this._onPendingData(data.length);
    return this.outputSize < HIGH_WATER_MARK
  }

  _send(data, encoding, callback) {
    if (!this._headerSent) {
      data = this._header + data
      this._headerSent = true
    }
    return this._writeRaw(data, encoding, callback)
  }

  write(chunk, encoding, callback) {
    this._send(chunk, encoding, callback)
  }

  end(chunk, encoding, callback) {
    if (!this._header) {
      this._implicitHeader(200)
    }

    // 拿暖壶瓶子接水，接水满了统一处理
    this.socket.cork()

    this._send(chunk, encoding, callback)
    this._send('', 'latin1', () => {
      this.emit('finish')
    })

    // 把暖壶瓶子的水全部倒出来进行处理
    this.socket._writableState.corked = 1
    this.socket.uncork()

    this.finished = true
  }
}

class ServerResponse extends OutgoingMessage {
  constructor(req) {
    super()
    this._contentLength = null
    this._removedTE = false
    this.statusCode = 200
    this.socket = req.socket

    // 该响应报文是否为 chunkedEncoding，即响应头: transfer-encoding: chunked
    this.chunkedEncoding = false

    this.on('finish', () => {
      this.socket.end()
    })
  }

  _implicitHeader(statusCode) {
    this.writeHead(statusCode)
  }

  writeHead(statusCode) {
    this.statusCode = statusCode
    const statusLine = `HTTP/1.1 ${statusCode} ${STATUS_CODES[statusCode]}${CRLF}`
    let header = statusLine
    if (this._contentLength) {
      header += 'Content-Length: ' + this._contentLength + CRLF
    } else if (this._removedTE) {
      header += 'Transfer-Encoding: chunked' + CRLF
      this.chunkedEncoding = true;
    }
    this._header = header + CRLF
  }
}

class HTTPServer extends net.Server {
  constructor(requestListener) {
    super({
      allowHalfOpen: true
    })

    this.on('request', requestListener)
    this.on('connection', socket => this.connectionListener(socket));

    this.socket = null
    this.timeout = 0
    this.keepAliveTimeout = 5000
    this.maxHeadersCount = null
    this.headersTimeout = 60 * 1000
    this.requestTimeout = 0
  }

  // 当解析完本次请求的报文时，生成 req/res，进入监听请求的回调函数中，即 requestListener
  // 该函数，在 http_parser 解析完 header 时，回调触发
  onIncoming(req) {
    const res = new ServerResponse(req)

    // 触发事件 `request`，当接收到 request 时，进入 requestListener 回调，即 HTTP Server 的入口函数
    this.emit('request', req, res)
  }

  // 当每次客户端与服务端建立连接时，触发该监听器
  connectionListener(socket) {
    this.socket = socket

    const parser = new HTTPParser(socket)
    parser.onIncoming = this.onIncoming.bind(this)
    parser.parser()
  }

}

function createServer(requestListener) {
  return new HTTPServer(requestListener)
}

module.exports = { createServer }
