import  from './ca';

it('should return least modulo number squared', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});

it('should empty array equals null', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should not array equals null', () => {
  const result = getMinSquaredNumber('');
  expect(result).toEqual(null);
});