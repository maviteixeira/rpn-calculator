const calculator = function Calculator() {

    const operators = ['+', '-', '*', '/']

    const operation = function (operator) {
        switch (operator) {
            case '+':
                return function (firstOperand, secondOperand) {
                    return firstOperand + secondOperand
                }
            case '-':
                return function (firstOperand, secondOperand) {
                    return firstOperand - secondOperand
                }
            case '*':
                return function (firstOperand, secondOperand) {
                    return firstOperand * secondOperand
                }
            case '/':
                return function (firstOperand, secondOperand) {
                    return firstOperand / secondOperand
                }
            default:
                console.log('Sorry, invalid operator ' + operator + ' .');
        }
    }

    return {
        calculate: function (expression) {
            let finished = true
            let index = 0
            let chars = expression.split(' ')
            let stack = []
            while (finished) {
                let current = chars[index]
                if(operators.indexOf(current) != -1){
                    let func = operation(current)
                    let a = parseInt(stack.pop())
                    let b = parseInt(stack.pop())
                    let result = func(b, a)
                    stack.push(result)
                } else {
                    stack.push(current)
                }
                if (index === chars.length-1)
                    finished = false
                index++
            }
            return stack.pop()
        }
    }
}

module.exports = calculator