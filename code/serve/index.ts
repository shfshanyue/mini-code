import path from 'node:path'
import http, { IncomingMessage, ServerResponse } from 'node:http'
import fs from 'node:fs'
import { URL } from 'node:url'

import arg from 'arg'

type Rewrite = {
  source: string;
  destination: string;
}

type Redirect = Rewrite;

interface Config {
  entry?: string;
  rewrites?: Rewrite[];
  redirects?: Redirect[];
  etag?: boolean;
  cleanUrls?: boolean;
  trailingSlash?: boolean;
  symlink?: boolean;
}

async function processDirectory(absolutePath: string): Promise<[fs.Stats | null, string]> {
  const newAbsolutePath = path.join(absolutePath, 'index.html')

  try {
    const newStat = await fs.promises.lstat(newAbsolutePath)
    return [newStat, newAbsolutePath]
  } catch (e) {
    return [null, newAbsolutePath]
  }
}

// 响应 404，此处可做一个优化，比如读取文件系统中的 404.html 文件
function responseNotFound(res: ServerResponse) {
  res.statusCode = 404
  res.end('NNNNNNot Found')
}

// mime: 
export default async function handler(req: IncomingMessage, res: ServerResponse, config: Config) {
  const pathname = new URL('http://localhost:3000' +  req.url ?? '').pathname

  let absolutePath = path.resolve(config.entry ?? '', path.join('.', pathname))
  let statusCode = 200
  let stat = null

  try {
    stat = await fs.promises.lstat(absolutePath)
  } catch (e) { }

  if (stat?.isDirectory()) {
    // 如果是目录，则去寻找目录中的 index.html
    [stat, absolutePath] = await processDirectory(absolutePath)
  }

  if (stat === null) {
    return responseNotFound(res)
  }

  let headers = {
    // 取其文件系统中的体积作为其大小
    // 问: 文件的大小与其编码格式有关，那么文件系统的体积应该是如何确定的？
    'Content-Length': stat.size
  }

  res.writeHead(statusCode, headers)

  fs.createReadStream(absolutePath).pipe(res)
}

const args = arg({
	'--port': Number, 
  '-p': '--port'
})

function startEndpoint (port: number, entry: string) {
  const server = http.createServer((req, res) => {
    handler(req, res, { entry })
  })

  server.on('error', err => {
    // 表示端口号已被占用
    if ((err as any).code === 'EADDRINUSE') {
			startEndpoint(port + 1, entry)
			return
		}

		process.exit(1);
  })

  server.listen(port, () => {
    console.log(`Open http://localhost:${port}`)
  })
}

startEndpoint(args['--port'] ?? 3000, args._[0])