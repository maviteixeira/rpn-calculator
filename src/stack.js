const stack = function Stack() {
    let array = []

    const lastItem = function () {
        return array.length - 1
    }

    return {
        push: function (value) {
            array[lastItem() + 1] = value
        },
        pop: function () {
            let value = array[lastItem()]
            array.splice(lastItem(), 1)
            return value
        },
        peek: function () {
            return array[lastItem()]
        }
    }
}

module.exports = stack