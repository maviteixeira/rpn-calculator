const calculator = function Calculator() {
    return {
        calculate: function (expression) {
            let stack = []
            while (!expression.finished()) {
                let term = expression.next()
                if (term.isOperator()) {
                    let operation = term.asOperation()
                    let second = parseInt(stack.pop())
                    let first = parseInt(stack.pop())
                    let result = operation.computate(first, second)
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