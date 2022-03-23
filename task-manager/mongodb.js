// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Cagri',
  //   age: 23
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.insertedId)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Hakan',
  //     age: 35
  //   },
  //   {
  //     name: 'Hande',
  //     age: 31
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents!')
  //   }

  //   console.log(result.insertedIds)
  // })

  // Challenge: Insert 3 tasks into a new tasks collection
  //
  // 1) Use insertMany to insert three documents
  // - description (string), completed (boolean)
  // 2) Setup the callback to handle error or print insertedIds
  // 3) Run the script
  // 4) Refresh the database in Robo 3t and view data in tasks collection

  db.collection('tasks').insertMany([
    {
      description: 'task one',
      completed: false
    },
    {
      description: 'task two',
      completed: true
    },
    {
      description: 'task three',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert tasks')
    }

    console.log(result.insertedIds)
  })
})