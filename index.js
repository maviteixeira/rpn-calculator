const calculator = require('./src/calculator')()

let args = process.argv.slice(2)
console.log(args)
console.log(calculator.calculate())
