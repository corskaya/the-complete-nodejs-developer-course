// Object property shorthand

const name = 'Cagri'
const userAge = 23

const user = {
  name, // If property name and variable name are the same
  age: userAge,
  location: 'Istanbul'
}

console.log(user)

// Object Destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

const { label: productLabel, stock, rating = 'This is the default data' } = product

console.log(productLabel)
console.log(stock)
console.log(rating)

// with function arguments

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)