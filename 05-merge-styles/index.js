const fs = require('fs')
const path = require('path')

const projectPath = path.join(__dirname, 'project-dist')
const stylesPath = path.join(__dirname, 'styles')
const output = fs.createWriteStream(path.join(projectPath, 'bundle.css'))

fs.readdir(stylesPath, (err, files) => {
  if (err) console.log(`No files here`)

  files.forEach(file => {
    fs.stat(path.join(stylesPath, file), (err, stats) => {
      if (err) throw err
      if (stats.isDirectory() || path.extname(file) !== '.css') return

      const stream = fs.createReadStream(path.join(stylesPath, file), 'utf-8')

      stream.on('data', chunk => output.write(chunk))
      stream.on('end', () => console.log('Merge complete!'))
      stream.on('error', err => console.log(err.message))
    })
  })
})
