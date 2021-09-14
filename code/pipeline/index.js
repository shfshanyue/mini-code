function _write (stream, data) {
  return new Promise((resolve, reject) => {
    if (stream.write(data)) {
      resolve()
    }
    stream.on('drain', resolve)
  })
}

async function simeplePipeline (...streams) {
  let ret = streams[0]
  for (let i = 1; i < streams.length; i++) {
    const writeStream = streams[i]
    for await (const chunk of ret) {
      await _write(writeStream, chunk)
    }
    ret = writeStream
  }
  return ret
}

function eos () {}

function pump () {}

async function pipeline (...streams) {
  
}

module.exports = {
  pipeline,
  simeplePipeline
}