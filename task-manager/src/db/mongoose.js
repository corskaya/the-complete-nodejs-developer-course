const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const me = new User({
  name: 'Cagri',
  age: 'mike'
})

me.save().then(me => {
  console.log(me)
}).catch(error => {
  console.log('Error', error)
})

// Challenge: Create a model for tasks
//
// 1) Define the model with description and completed fields
// 2) Create a new instance of the model
// 3) Save the model to the database
// 4) Test your work!

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const anyTask = new Task({
  description: 'task one',
  completed: true
})

anyTask.save().then(task => {
  console.log(task)
}).catch(error => {
  console.log(error)
})