export default function createInt8TypedArray(length, position, value) {
    let arr = new ArrayBuffer(length);
    let int8 = new Int8Array(arr)
    if (int8.length < position)
        throw new Error('Position outside range');
    else
        int8[position] = value;
        return new DataView(arr);
}