const Calculator = require('./../src/calculator')
const Expression = require('./../src/general/expression')
const Stack = require('./../src/general/stack')

test('adds 1 + 2 to equal 3', () => {
    expect(
        Calculator().calculate(
            Expression('1 2 +')
        )
    ).toBe(3)
})

test('subtract 2 - 1 to equal 1', () => {
    expect(
        Calculator().calculate(
            Expression('2 1 -')
        )
    ).toBe(1)
})

test('multiply 2 * 1 to equal 2', () => {
    expect(
        Calculator().calculate(
            Expression('1 2 *')
        )
    ).toBe(2)
})

test('divide 6 * 3 to equal 2', () => {
    expect(
        Calculator().calculate(
            Expression('6 3 /')
        )
    ).toBe(2)
})

test('two operators in sequence to equal 7', () => {
    expect(
        Calculator().calculate(
            Expression('1 2 3 * +')
        )
    ).toBe(7)
})

test('big expression to equal 5', () => {
    expect(
        Calculator().calculate(
            Expression('15 7 1 1 + - / 3 * 2 1 1 + + -')
        )
    ).toBe(5)
})

test('different expression to equal 2', () => {
    expect(
        Calculator().calculate(
            Expression('4 2 5 * + 1 3 2 * + /')
        )
    ).toBe(2)
})

test('other expression to equal 2', () => {
    expect(
        Calculator().calculate(
            Expression('2 5 * 4 + 3 2 * 1 + /')
        )
    ).toBe(2)
})


test('should use new fancy stack', () => {
    expect(
        Calculator().calculate(
            Expression('1 2 +'), Stack()
        )
    ).toBe(3)
})

test('other expression to use fancy stack', () => {
    expect(
        Calculator().calculate(
            Expression('2 5 * 4 + 3 2 * 1 + /'), Stack()
        )
    ).toBe(2)
})
