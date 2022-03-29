const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Server is on maintenance mode')
// })

app.use(express.json()) // automatically parse the incoming json data
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

// PLAYGROUND

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // Finding User (creator) from task
  const task = await Task.findById('6241b655fd6be3b6d16c0e8c')
  console.log(task.owner) // prints -> new ObjectId("6241b57dde03f9a71c21d58b")
  await task.populate('owner')
  console.log(task.owner) // prints -> entire owner object with all public properties

  // Finding Tasks from user
  const user = await User.findById('6241b57dde03f9a71c21d58b')
  console.log(user.tasks) // prints -> undefined
  await user.populate('tasks')
  console.log(user.tasks) // prints -> tasks array of associated user
}

main()