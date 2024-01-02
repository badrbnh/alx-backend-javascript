export default function appendToEachArrayValue(array, appendString) {
  let arr = [];
  for (const idx of array) {
    const value = idx;
    arr.push(appendString + value);
  }

  return arr;
}
