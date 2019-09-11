const calculator = require('./src/calculator')()
const Expression = require('./src/expression')

let args = process.argv.slice(2)
console.log(args)
console.log(calculator.calculate(Expression('1 2 *')))
