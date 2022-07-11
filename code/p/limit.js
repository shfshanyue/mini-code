// 实现一个 Limit
class Limit {
  constructor ({ concurrency }) {
    this.concurrency = concurrency
    this.queue = []
    this.count = 0
  }

  enqueue (fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject })
    })
  }

  dequeue () {
    if (this.count < this.limit && this.queue.length) {
      const { fn, resolve, reject } = this.queue.shift()
      this.run(fn).then(resolve).catch(reject)
    }
  }

  async run (fn) {
    this.count++
    const value = await fn()
    this.count--
    this.dequeue()
    return value
  }

  exec (fn) {
    if (this.count < this.limit) {
      return this.run(fn)
    } else {
      return this.enqueue(fn)
    }
  } 
}

const limit = new Limit({ concurrency: 1 })
Promise.all([
	limit.exec(() => Promise.resolve(1)),
	limit.exec(() => Promise.resolve(1)),
	limit.exec(() => Promise.resolve(1))
])

// 根据 Limit 来实现一个 Request
class Request {
  constructor ({ concurrency }) {
    this.limit = new Limit({ concurrency })
  }

  get (url) {
    return this.limit.exec(() => fetch(url))
  }
}

// 如果把二者合在一起，全部代码为
class Request {
  constructor ({ concurrency }) {
    this.concurrency = concurrency
    this.count = 0
    this.queue = []
  }

  push (url) {
    return new Promise((resolve, reject) => this.queue.push([resolve, reject, url]))
  }

  next () {
    if (this.count < this.concurrency && this.queue.length) {
      const [resolve, reject, url] = this.queue.shift()
      this.run(url).then(resolve).catch(reject)
    }
  }

  async run (url) {
    this.count++
    const value = await fetch(url)
    this.count--
    this.next()
    return value
  }

  get (url) {
    if (this.count < this.concurrency) {
      return this.run(url)
    } else {
      return this.push(url)
    }
  }
}
