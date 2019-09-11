const Sum = require('./sum')
const Minus = require('./minus')
const Multiply = require('./multiply')
const Divide = require('./divide')

const term = function Term(value) {
    const operators = ['+', '-', '*', '/']

    return {
        isOperator() {
            return operators.indexOf(value) != -1
        },
        asInt() {
            return parseInt(value)
        },
        asOperation() {
            switch (value) {
                case '+':
                    return Sum()
                case '-':
                    return Minus()
                case '*':
                    return Multiply()
                case '/':
                    return Divide()
                default:
                    console.log('Sorry, invalid operator ' + operator + ' .');
            }
        }
    }
}

module.exports = term