const _ = require('lodash')
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);
const promise = () => {
    return new Promise((resolve) => {
        resolve("tes123")
    })
}
const myFunction = async () => {
    let result = await promise()
    console.log(result)
}
myFunction()