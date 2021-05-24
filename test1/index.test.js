it('should 17 equals 17', () => {
  expect(17).toEqual(17);
});

it('should 18 not equals 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (arr) =>
  arr.filter(element => (element % 2 === 0));

  it('get only even nembers from array', () => {
    const result = getEvenNumbers([2, 3, 4, 5]);
    expect(result).toEqual([2, 4]);
  });
