const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('This is my promise error!')
    resolve([7, 4, 1])
  }, 2000)
})

doWorkPromise.then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})

//
//                                fulfilled
//                              /
//  Promise     -- pending -->
//                              \
//                                rejected
//