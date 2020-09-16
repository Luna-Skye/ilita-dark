// ILITA DARK | BUILD PROCESS
const sass = require('node-sass');
const fs = require('fs-extra');

// ILI Build Object
const ili = {
  build () {
    // Compile SCSS Files
    sass.render({
      file: 'src/core.scss',
      outputFile: 'dist/theme.css'
    }, (err, res) => {
      // Throw Errors
      if (err) {
        throw err;
      }

      // Write CSS File to Disk
      fs.outputFileSync('dist/theme.css', res.css, err => {
        if (err) {
          throw err;
        }
        console.log('SCSS Compiled Successfully...');
      });
    });
  }
};

// Trigger ILI Build
ili.build();
