import {reverseArray, withdraw, getAdults} from './index';

it('should reverse array', () => {
  const result = reverseArray([5, 10, 2, 6]);
  expect(result).toEqual([6, 2, 10, 5]);
});

it('should null if not array', () => {
  const result = reverseArray('[5, 10, 2, 6]');
  expect(result).toEqual(null);
});

it('should not change the original array', () => {
  const array = [5, 10, 2, 6];
  reverseArray(array);
  expect(array).toEqual([5, 10, 2, 6]);
});

// ===============================================

it('should return account balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 35);
  expect(result).toEqual(52);
});

it('should return -1 if not enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100);
  expect(result).toEqual(-1);
});

it('should not withdraw from other balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 30);
  expect(result).not.toEqual(['Ann', 'John', 'User'], [1370, 87, -6], 'John', 30);
});

// =============================================================

it('should not return less or equal 18 years old', () => {
  const result = getAdults({'John Doe': 19, Tom: 17, Bob: 18});
  expect(result).not.toEqual({'John Doe': 19, Tom: 17, Bob: 18});
});

it('should return empty obj if incoming object is empty', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('should not change the original array', () => {
  const obj = {'John Doe': 19, Tom: 17, Bob: 18};
  getAdults(obj);
  expect(obj).toEqual({'John Doe': 19, Tom: 17, Bob: 18});
});





