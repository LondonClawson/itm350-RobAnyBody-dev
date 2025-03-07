// tests/math.test.js
const { add } = require('../src/math');

describe('add function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
  });
});