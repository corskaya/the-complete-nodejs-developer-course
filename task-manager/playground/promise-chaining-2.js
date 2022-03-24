require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndRemove('623c564ccfb9dc7c9ce4310d').then(task => {
  console.log(task)
  return Task.countDocuments({ completed: false })
}).then(result => {
  console.log(result)
}).catch(e => {
  console.log(e)
})

// Challenge: Use async/await
//
// 1) Create deleteTaskAndCount as an async function
//   - Accept id of task to remove
// 2) Use await to delete task and count up incomplete tasks
// 3) Return the count
// 4) Call the function and attach then/catch to log result
// 5) Test your work!

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndRemove(id)
  console.log(task)

  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('623c5634cfb9dc7c9ce43109').then(result => {
  console.log(result)
}).catch(e => {
  console.log(e)
})