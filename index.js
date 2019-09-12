const calculator = require('src/calculator')()
const Expression = require('src/general/expression')

let args = process.argv.slice(2)
args = args.join(' ')
console.log(calculator.calculate(Expression(args)))
