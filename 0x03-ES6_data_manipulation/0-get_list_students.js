export default function getListStudents() {
  const arr = [];
  const obj = [
    { id: '1', firstname: 'Guillaume', location: 'San Fransisco' },
    { id: '2', firstname: 'James', location: 'Columbia' },
    { id: '5', firstname: 'Serena', location: 'San Fransisco' },
  ];
  arr.push(obj);
  return obj;
}
