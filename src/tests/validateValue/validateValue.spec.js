const validateValue = require('./validateValue.js');

// если нужно описать несколько тестов
describe('validateValue', () => {
  test('correct value', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('greater than the correct value', () => {
    expect(validateValue(-1)).toBe(false);
  });
  test('less than the correct value', () => {
    expect(validateValue(101)).toBe(false);
  });
  test('on boundary less than the corrent value', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('on boundary greater than the correct value', () => {
    expect(validateValue(100)).toBe(true);
  });
});
