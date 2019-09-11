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
    }
}

module.exports = term