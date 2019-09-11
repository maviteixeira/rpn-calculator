const expression = function Expression(expression) {
    const chars = expression.split(' ')
    let index = 0
    return {
        next: function(){
            if(!this.finished()){
                let current = chars[index]
                index++
                return current
            }
        },
        finished: function(){
            return index === chars.length
        }
    }
}

module.exports = expression