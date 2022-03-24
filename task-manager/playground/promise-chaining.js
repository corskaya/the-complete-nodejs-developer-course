require('../src/db/mongoose')
const User = require('../src/models/user')


// Using promise chaining
User.findByIdAndUpdate('623c5972c001eb4d7b90b938', { age: 1 }).then(user => {
  console.log(user)
  return User.countDocuments({ age: 1 })
}).then(result => {
  console.log(result)
}).catch(e => {
  console.log(e)
})

// Using async/await
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  console.log(user)
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('623c5972c001eb4d7b90b938', 2).then(count => {
  console.log(count)
}).catch(e => {
  console.log(e)
})