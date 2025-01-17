const fs = require('fs')
const path = require('path');
const { stdout } = require('process');

const stream = fs.createReadStream(
  path.resolve(__dirname, 'text.txt'),
  'utf-8'
)

let data = ''

stream.on('data', chunk => data += chunk)
stream.on('end', () => stdout.write(data))
stream.on('error', error => console.log('ERROR!', error.message))