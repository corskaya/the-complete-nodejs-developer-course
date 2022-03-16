const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.bgGreen('New note added!'))
  } else {
    console.log(chalk.bgRed('Note title taken!'))
  }
}

const removeNote = title => {
  const notes = loadNotes()
  const removedNoteIndex = notes.findIndex(note => note.title === title)

  if (removedNoteIndex === -1) {
    console.log(chalk.bgRed('No note removed!'))
  } else {
    notes.splice(removedNoteIndex, 1)
    saveNotes(notes)
    console.log(chalk.bgGreen('Note removed!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.yellow('Your Notes: '))
  notes.forEach(note => console.log(note.title))
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)

  fs.writeFileSync('./notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    const data = JSON.parse(dataJSON)
    return data
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
}
