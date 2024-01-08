export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const int8 = new Int8Array(arr);
  if (int8.length < position) throw new Error('Position outside range');
  else int8[position] = value;
  return new DataView(arr);
}
