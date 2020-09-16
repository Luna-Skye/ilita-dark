// Import Modules
const readline = require('readline')
const chalk = require('chalk')
const { Signale } = require('signale')

// Initialize Signale Logger
const ilog = new Signale({
  interactive: true,
  types: {
    archiver: {
      badge: '',
      color: 'cyan',
      label: ''
    }
  }
})

// Logger Object
exports.log = {
  info: (msg) => {
    console.log(
      chalk.bgBlue(chalk.black(' (=^-ω-^=) ILI ')),
      msg
    )
  },
  done: (msg) => {
    console.log(
      chalk.bgGreen(chalk.black(' (=^-ω-^=) ILI ')),
      chalk.green(msg)
    )
  },

  interactive: (msg) => {
    ilog.archiver(chalk.whiteBright(msg))
  },

  clear: () => {
    if (process.stdout.isTTY) {
      const blank = '\n'.repeat(process.stdout.rows - 3)
      console.log(blank)
      readline.cursorTo(process.stdout, 0, 2)
      readline.clearScreenDown(process.stdout)
    }
  }
}
