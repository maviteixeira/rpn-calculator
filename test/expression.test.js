const Expression = require('./../src/expression')

test('expression should not be finished', () => {
    expect(
        Expression('1 2 +').finished()
    ).toBe(false)
})

/*
test('expression should be finished', () => {
    expect(
        Expression().finished()
    ).toBe(true)
})
*/

test('should return next value', () => {
    expect(
        Expression('1 2 +').next()
    ).toBe('1')
})

test('should return next values', () => {
    let expression = Expression('1 2 +')
    expect(
        expression.next()
    ).toBe('1')
    expect(
        expression.next()
    ).toBe('2')
    expect(
        expression.next()
    ).toBe('+')
})