const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // automatically parse the incoming json data
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
  const password = 'Red12345!'

  // hashing is not reversable
  const hashedPassword = await bcrypt.hash(password, 8) // 8 is the recommended number for hashing algorithm

  console.log(password)
  console.log(hashedPassword)

  const isMatch = await bcrypt.compare('Red12345!', hashedPassword) // prints true
  const isMatch2 = await bcrypt.compare('red12345!', hashedPassword) // prints false

  console.log(isMatch)
  console.log(isMatch2)
}

myFunction()