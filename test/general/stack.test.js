const Stack = require('src/general/stack')


test('should push an value', () => {
    let stack = Stack()
    stack.push(3)
    expect(
        stack.peek()
    ).toBe(3)
})

test('should pop last value', () => {
    let stack = Stack()
    stack.push(3)
    expect(
        stack.pop()
    ).toBe(3)
})

test('should push multiple values', () => {
    let stack = Stack()
    stack.push(3)
    stack.push(6)
    stack.push(1)
    expect(
        stack.peek()
    ).toBe(1)
})

test('should pop multiple values', () => {
    let stack = Stack()
    stack.push(3)
    stack.push(6)
    stack.push(1)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(6)
    expect(stack.pop()).toBe(3)
})