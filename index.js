// ILITA DARK | BUILD PROCESS
const sass = require('node-sass')
const fs = require('fs-extra')
const { log } = require('./utils/logger.js')

// SET VARS
let time = 0
const timer = setInterval(() => { time += 1 }, 1)

// ILI Build Object
const ili = {
  build () {
    log.info('Compiling SCSS files...')

    // Compile SCSS Files
    sass.render({
      file: 'src/core.scss',
      outputFile: 'dist/theme.css'
    }, (err, res) => {
      // Throw Errors
      if (err) throw err

      // Write CSS File to Disk
      fs.outputFileSync('dist/theme.css', res.css, err => {
        if (err) throw err
      })

      // Finish & Log
      clearInterval(timer)
      log.done(`Finished compiling SCSS files in ${time}ms!`)
      log.clear()
    })
  }
}

// Trigger ILI Build
ili.build()
