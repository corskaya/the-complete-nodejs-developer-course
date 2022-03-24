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