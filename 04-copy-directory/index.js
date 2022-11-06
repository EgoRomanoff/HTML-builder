const fs = require('fs')
const path = require('path')

const targetPath = path.join(__dirname, 'files')
const copyPath = path.join(__dirname, 'files-copy')

function copyDir(targetPath, copyPath) {
  fs.mkdir(copyPath, { recursive: true }, err => { if (err) throw err })

  fs.readdir(targetPath, (err, files) => {
    if (err) console.log(`No files here`)

    files.forEach(file => {
      fs.copyFile(
        path.join(targetPath, file),
        path.join(copyPath, file),
        err => { if (err) throw err }
      )
    })
  })
}

copyDir(targetPath, copyPath)
