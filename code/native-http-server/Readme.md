## listen 时做了什么

+ internelUtil.deprecate

+ Server.listen
  + listenInCluster
    + setupListenHandle
      + createServerHandle

+ parserOnHeadersComplete(versionMajor, versionMinor, headers, method, url, statusCode, statusMessage, upgrade, shouldKeepAlive)
  + parser.onIncoming(incoming, shouldKeepAlive); -> internelBinding
  + parserOnIncoming(server, socket, state, req, keepAlive); 
    + new ServerResponse(req) -> extends OutgoingMessage

## this._handle.listen(backlog || 511);

## requestListener？

+ Server.listen
  + new TCP(TCPConstants.SERVER) -> internalBinding
    + new Socket()
    + emit('connection')

``` js
function onconnection(err, clientHandle) {
  const handle = this;
  const self = handle[owner_symbol];

  const socket = new Socket({
    handle: clientHandle,
    allowHalfOpen: self.allowHalfOpen,
    pauseOnCreate: self.pauseOnConnect,
    readable: true,
    writable: true
  });

  self._connections++;
  socket.server = self;
  socket._server = self;

  self.emit('connection', socket);
}
```

## connectionListenerInternal

+ parser -> internalBinding('http_parser');
+ state

``` js
const state = {
  onData: null,
  onEnd: null,
  onClose: null,
  onDrain: null,
  outgoing: [],
  incoming: [],
  // `outgoingData` is an approximate amount of bytes queued through all
  // inactive responses. If more data than the high watermark is queued - we
  // need to pause TCP socket/HTTP parser, and wait until the data will be
  // sent to the client.
  outgoingData: 0,
  keepAliveTimeoutSet: false
};
```

## ServerOnIncoming

## parserOnIncoming

``` js
// new ServerResponse
const res = new server[kServerResponse](req);
```

## res.write && res.end

+ write
  + write_(msg, chunk, encoding, callback, fromEnd)
    + socket.cork
    + res._send
      + res._writeRaw
+ end
  + res._send
    + res._writeRaw

+ res._writeRaw
  + writeable.write -> stream
    + `_write(stream, chunk, encoding, cb)`
