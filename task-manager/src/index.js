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

// Challenge: Setup middleware for maintenance mode
//
// 1) Register a new middleware function
// 2) Send back a maintenance message with a 503 status code
// 3) Try your requests from the server and confirm status/message shows

app.use((req, res, next) => {
  res.status(503).send('Server is on maintenance mode')
})

app.use(express.json()) // automatically parse the incoming json data
app.use(userRouter)
app.use(taskRouter)

//
// Without middleware:  new request -> run route handler
//
// With middleware:     new request -> do something -> run route handler
//

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisissignaturetext', { expiresIn: '7 days' })
  // console.log(token)

  const data = jwt.verify(token, 'thisissignaturetext')
  // console.log(data)
}

myFunction()