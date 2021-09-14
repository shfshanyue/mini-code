const pipeline = require('.');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
  fs.createReadStream('./package-lock.json'),
  zlib.createGzip(),
  fs.createWriteStream('package-lock.gz', { highWaterMark: 16 }),
).then(o => {
  console.log('SUCCESS')
}).catch(e => {
  console.log('ERROR')
})
