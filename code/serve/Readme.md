# 手动实现一个静态资源服务器

> 仓库：[mini-serve](https://github.com/shfshanyue/mini-code/tree/master/code/serve/)

可参考源码 [serve-handler](https://github.com/vercel/serve-handler)

可实现以下功能:

+ 命令行的方式，可传入端口号及目标目录
+ 处理 404
+ 流式返回资源，处理 Content-Length
+ 处理目录，如果请求路径是目录，则自动请求其目录中的 index.html

以下功能选做:

+ rewrites
+ redirects
+ cleanUrls
+ trailingSlash
+ etag
+ symlink

## 山月的代码实现

代码置于 [shfshanyue/mini-code:code/serve](https://github.com/shfshanyue/mini-code/blob/master/code/serve/index.ts)

可直接读源码，基本每一行都有注释。

使用 `npm run example` 可运行示例代码

``` bash
# npx ts-node index.ts example -p 8000
$ npm run example
```

访问:

+ 能够正确访问目录: <http://localhost:8000/>
+ 能够正确访问文件: <http://localhost:8000/about.html>