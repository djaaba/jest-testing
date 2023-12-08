const mapArrToString = require('./mapArrToString.js');

describe('mapArrToString', () => {
  test('correct value', () => {
    // toBe compare with ref but toEqual checks value
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
  });

  test('mixed values', () => {
    expect(mapArrToString([1, null, undefined, 'aaa', 2, 3])).toEqual([
      '1',
      '2',
      '3',
    ]);
  });

  test('empty array', () => {
    expect(mapArrToString([])).toEqual([]);
  });

  test('negative', () => {
    expect(mapArrToString([1, 2, 3, 4])).not.toEqual(['1', '2', '3']);
  });
});
