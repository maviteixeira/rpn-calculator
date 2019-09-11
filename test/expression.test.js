const Expression = require('./../src/expression')

test('adds 1 + 2 to equal 3', () => {
    expect(
        3
    ).toBe(3)
})

test('expression should not be isFinished', () => {
    expect(
        Expression('1 2 +').isFinished()
    ).toBe(false)
})

test('expression should be isFinished', () => {
    expect(
        Expression().isFinished()
    ).toBe(true)
})

test('should return next value', () => {
    expect(
        Expression('1 2 +').nextTerm().asInt()
    ).toBe(1)
})

test('should return next values', () => {
    let expression = Expression('1 2 +')
    expect(
        expression.nextTerm().asInt()
    ).toBe(1)
    expect(
        expression.nextTerm().asInt()
    ).toBe(2)
    expect(
        expression.nextTerm().isOperator()
    ).toBe(true)
})