export default function getListStudents() {
  const arr = [];
  const obj = [
    { id: 1, firstName: 'Guillaume', location: 'San Fransisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Fransisco' },
  ];
  arr.push(obj);
  return obj;
}
