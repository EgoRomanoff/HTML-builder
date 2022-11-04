const { readdir, stat } = require("fs")
const path = require('path')

const readablePath = path.resolve(__dirname, 'secret-folder')

readdir(readablePath, (err, files) => {
  if (err) console.log(`No files here`)

  files.forEach(file => {

    stat(path.resolve(readablePath, file), (err, stats) => {
      if (err) console.log(`File doesn't exist.`)
      if (stats.isDirectory()) return

      let fileExt = path.extname(file).slice(1)
      let fileName = path.basename(file, fileExt).slice(0, -1)
      let fileSize = stats.size / 1024

      console.log(`${fileName} - ${fileExt} - ${fileSize}kb`);
    })
  })
})
