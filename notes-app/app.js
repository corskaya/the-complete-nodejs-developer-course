const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Cagri.')

// Challenge : Append a message to notes.txt
//
// 1) Use appendFileSync to append to the file
// 2) Run the script
// 3) Check your work bu opening the file viewing the appended text

fs.appendFileSync('notes.txt', ' This message appended later for challenge.')