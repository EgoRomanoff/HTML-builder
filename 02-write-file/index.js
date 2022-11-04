const fs = require('fs')
const path = require('path')
const process = require('process')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const close = () => {
  rl.write('\nBye Bye!')
  rl.close()
  rl.removeAllListeners()
  process.exit()
}

const outputStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt'));

rl.write('Hello! Print your text.\n\n')

rl.on('line', data => {
  if (data.toString().trim() === 'exit') close()
  outputStream.write(data + '\n')
})

rl.on('SIGINT', () => close())
