export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absoluteNumbers = arr.
    map(el => Math.abs(el));
  const min = Math.min(...absoluteNumbers);
  return min * min;
}
  