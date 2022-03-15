const validator = require('validator')

console.log(validator.isEmail('cagriorskaya@hotmail.com'))
console.log(validator.isEmail('cagriorskaya.com'))
console.log(validator.isURL('https://google.com'))
console.log(validator.isURL('https:/google.com'))

// const getNotes = require('./notes.js')
// console.log(getNotes())