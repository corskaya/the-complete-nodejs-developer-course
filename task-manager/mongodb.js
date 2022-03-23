// CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').findOne({ _id: new ObjectId("623acfd4fb9b6e6d835e610b") }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({ age: 23 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').countDocuments({ age: 23 }, (error, count) => {
  //   console.log(count)
  // })

  // Challenge: Use find and findOne with tasks
  //
  // 1) Use findOne to fetch the last task by its id (print doc to console)
  // 2) Use find to fetch all tasks that are not completed (print docs to console)
  // 3) Test your work!

  db.collection('tasks').findOne({ _id: new ObjectId("623afb63093c69fd2835c76a") }, (error, task) => {
    if (error) {
      return console.log('Unable to fetch task!')
    }

    console.log(task)
  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    if (error) {
      return console.log('Unable to fetch tasks!')
    }

    console.log(tasks)
  })
})