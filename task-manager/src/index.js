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

app.get('/users', (req, res) => {
  User.find({}).then(users => {
    res.send(users)
  }).catch(e => {
    res.status(500).send(e)
  })
})

app.get('/users/:id', (req, res) => {
  const _id = req.params.id

  User.findById(_id).then(user => {
    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  }).catch(e => {
    res.status(500).send(e)
  })
})

app.post('/tasks', (req, res) => {
  const task = new Task(req.body)

  task.save().then(task => {
    res.status(201).send(task)
  }).catch(e => {
    res.status(400).send(e)
  })
})

// Challenge: Setup the task reading endpoints
//
// 1) Create an endpoint for fetching all tasks
// 2) Create an endpoint for fetching a task by its id
// 3) Setup new requests in Postman and test your work

app.get('/tasks', (req, res) => {
  Task.find({}).then(users => {
    res.send(users)
  }).catch(e => {
    res.status(500).send(e)
  })
})

app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id

  Task.findById(_id).then(task => {
    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  }).catch(e => {
    res.status(500).send(e)
  })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})