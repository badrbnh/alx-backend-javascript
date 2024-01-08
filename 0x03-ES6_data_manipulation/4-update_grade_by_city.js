export default function updateStudentGradeByCity(arr, city, newGrade) {
  return arr.filter((student) => student.location === city).map((student) => {
    const gradeInfo = newGrade.find((grade) => grade.studentId === student.id);
    const grade = gradeInfo ? gradeInfo.grade : 'N/A';
    return { ...student, grade };
  });
}
