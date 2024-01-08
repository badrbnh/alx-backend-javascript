export default function updateStudentGradeByCity(arr, city, grade) {
  return arr.filter((student) => student.location === city).map((student) => {
    const grades = grade.find((grade) => grade.studentId === student.id);
    const newGrade = grades ? grades.grade : 'N/A';
    return { ...student, newGrade };
  });
}
