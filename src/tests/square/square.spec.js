const square = require('./square.js');

describe('square', () => {
  test('Negative value', () => {
    expect(square(-1)).toBe(1);
  });

  test('Is 1', () => {
    expect(square(1)).toBe(1);
  });

  test('Is 0', () => {
    expect(square(0)).toBe(0);
  });

  test('Correct value', () => {
    expect(square(100)).toBe(10000);
  });

  test('Testing call times Math.pow on value 1', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  test('Testing call times on Math.pow on value 2', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
});
