import {calc} from './calculator';

it('should result addition', () => {
  const result = calc('10 + 2');
  expect(result).toEqual("10 + 2 = 12");
});

it('should result subtraction', () => {
  const result = calc('10 - 2');
  expect(result).toEqual("10 - 2 = 8");
});

it('should result division', () => {
  const result = calc('10 / 2');
  expect(result).toEqual("10 / 2 = 5");
});

it('should result multiplication', () => {
  const result = calc('10 * 2');
  expect(result).toEqual("10 * 2 = 20");
});

it('should not string equals null', () => {
  const result = calc(10, 2);
  expect(result).toEqual(null);
});

