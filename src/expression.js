const Term = require('./term')

const expression = function Expression(expression = '', separator = ' ') {
    const chars = expression.length === 0 ? [] : expression.split(separator)
    let index = 0

    return {
        next: function () {
            if (!this.finished()) {
                let current = chars[index]
                index++
                return Term(current)
            }
        },
        finished: function () {
            return index === chars.length
        }
    }
}

module.exports = expression