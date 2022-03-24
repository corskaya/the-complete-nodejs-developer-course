const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// Challenge 1: Add a password field to User
//
// 1) Setup the field as a required string
// 2) Ensure the length is greater than 6
// 3) Trim the password
// 4) Ensure that password doesn't contain "password"
// 5) Test your work

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid!')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"!')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number!')
      }
    }
  }
})

const me = new User({
  name: '   Hakan  ',
  email: 'HAKAN@gmail.com   ',
  password: 'gfhdsjksf'
})

me.save().then(me => {
  console.log(me)
}).catch(error => {
  console.log('Error', error)
})

// Challenge 2: Add validation and sanitization to task
//
// 1) Trim the description and make it required
// 2) Make completed optional and default it to false
// 3) Test your work with and without errors

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const anyTask = new Task({
  description: 'task two'
})

anyTask.save().then(task => {
  console.log(task)
}).catch(error => {
  console.log(error)
})