const Expression = require('./../src/expression')

test('adds 1 + 2 to equal 3', () => {
    expect(
        3
    ).toBe(3)
})

test('expression should not be finished', () => {
    expect(
        Expression('1 2 +').finished()
    ).toBe(false)
})

test('expression should be finished', () => {
    expect(
        Expression().finished()
    ).toBe(true)
})

test('should return next value', () => {
    expect(
        Expression('1 2 +').next().asInt()
    ).toBe(1)
})

test('should return next values', () => {
    let expression = Expression('1 2 +')
    expect(
        expression.next().asInt()
    ).toBe(1)
    expect(
        expression.next().asInt()
    ).toBe(2)
    expect(
        expression.next().isOperator()
    ).toBe(true)
})