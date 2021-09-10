const EventEmitter = require('events')

class WebsocketServer extends EventEmitter {
  constructor ({
    server
  }) {
    this.server = server
  }
}