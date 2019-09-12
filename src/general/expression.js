const Term = require('src/general/term')

const expression = function Expression(expression = '', separator = ' ') {
    const chars = expression.length === 0 ? [] : expression.split(separator)
    let index = 0

    return {
        nextTerm: function () {
            if (!this.isFinished()) {
                let term = Term(chars[index])
                index++
                return term
            }
        },
        isFinished: function () {
            return index === chars.length
        }
    }
}

module.exports = expression