require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('623c5972c001eb4d7b90b938', { age: 1 }).then(user => {
  console.log(user)
  return User.countDocuments({ age: 1 })
}).then(result => {
  console.log(result)
}).catch(e => {
  console.log(e)
})

// Challenge: Mess around with promise chaining
//
// 1) Create promise-chaining-2.js
// 2) Load in mongoose and task model
// 3) Remove a given task by id
// 4) Get and print the total number of incomplete tasks
// 5) Test your work!