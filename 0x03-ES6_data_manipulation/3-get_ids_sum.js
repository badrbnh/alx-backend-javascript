export default function getStudentIdsSum(arr) {
  return arr.reduce((prev, curr) => prev + curr.id, 0);
}
