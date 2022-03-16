const chalk = require('chalk')
const yargs = require('yargs')
const { removeNote } = require('./notes.js')
const notes = require('./notes.js')

// Challenge: Refactor all functions
//
// 1) If function is a method, use ES6 method definition syntax
// 2) Otherwise, use most concise arrow function possible
// 3) Test your work!

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
  handler(argv) {
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
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    console.log('Listing the notes...')
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading the note...')
  }
})

yargs.parse()