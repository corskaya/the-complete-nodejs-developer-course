const chalk = require('chalk')
const yargs = require('yargs')
const { removeNote } = require('./notes.js')
const notes = require('./notes.js')

// Challenge: Setup command option and function
//
// 1) Setup the remove command to take a required "--title" option
// 2) Create and export a removeNote function from notes.js
// 3) Wire up removeNote
// 4) Call removeNote in remove command handler
// 5) Test your work using: node.js remove --title="some title"
// 6) If a note is removed, print "Note removed!" with a green background
// 7) If no note is removed, print "No note found!" with a red backround

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // required or not
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function () {
    console.log('Listing the notes...')
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading the note...')
  }
})

yargs.parse()