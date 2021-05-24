export const getSquaredArray = arr =>
  arr.map(el => el * el);

export const getOddNumbers = arr =>
  arr.filter(el => el % 2 !== 0);

export default (a, b) => a + b;

console.log(getOddNumbers([2, 4, 5, 6]));
  