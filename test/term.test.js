const Term = require('./../src/term')

test('should be operator', () => {
    expect(
        Term('+').isOperator()
    ).toBe(true)
})

test('should not be an operator', () => {
    expect(
        Term('1').isOperator()
    ).toBe(false)
})

test('should be an number', () => {
    expect(
        Term('1').asInt()
    ).toBe(1)
})

test('should return add operation', () => {
    expect(
        Term('+').asOperation()(1, 1)
    ).toBe(2)
})

test('should return a minus operation', () => {
    expect(
        Term('-').asOperation()(4, 1)
    ).toBe(3)
})

test('should return a multiply operation', () => {
    expect(
        Term('*').asOperation()(3, 4)
    ).toBe(12)
})

test('should return a divide operation', () => {
    expect(
        Term('/').asOperation()(4, 2)
    ).toBe(2)
})