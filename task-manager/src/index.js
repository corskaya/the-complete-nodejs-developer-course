const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // automatically parse the incoming json data

app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save().then(user => {
    res.send(user)
  }).catch(e => {
    res.status(400).send(e)
  })
})

// Challenge: Setup the task creation endpoint
//
// 1) Create a separate file for the task model (load it into index.js)
// 2) Create the task creation endpoint (handle success and error)
// 3) Test the endpoint from postman with good and bad data

app.post('/tasks', (req, res) => {
  const task = new Task(req.body)

  task.save().then(task => {
    res.status(201).send(task)
  }).catch(e => {
    res.status(400).send(e)
  })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})