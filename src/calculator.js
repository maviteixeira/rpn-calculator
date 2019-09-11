const calculator = function Calculator() {
    return {
        calculate: function (expression) {
            let stack = []
            while (!expression.finished()) {
                let term = expression.next()
                if (term.isOperator()) {
                    let operation = term.asOperation()
                    let a = parseInt(stack.pop())
                    let b = parseInt(stack.pop())
                    let result = operation(b, a)
                    stack.push(result)
                } else {
                    stack.push(term.asInt())
                }
            }
            return stack.pop()
        }
    }
}

module.exports = calculator