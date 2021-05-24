import getSum, {getSquaredArray, getOddNumbers} from './calculator.js';

it('should array squared numbers', () => {
  const result = getSquaredArray([2, 4, 5, 6]);
  expect(result).toEqual([4, 16, 25, 36]);
})

it('should array only odd numbers', () => {
  const result = getOddNumbers([2, 4, 5, 6]);
  expect(result).toEqual([5]);
})

it('should sum of numbers', () => {
  const result = getSum(2, 6);
  expect(result).toEqual(8);
})