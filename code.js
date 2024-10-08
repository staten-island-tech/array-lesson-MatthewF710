const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
// 1
students.forEach((student) => console.log(student.name, ", ", student.grade));
// 2
const topStudents = students.filter((student) => student.grade > 80);
const youngStudents = students.filter((student) => student.age < 21);
// 3
const topLog = topStudents.forEach((topStudent) =>
  console.log(topStudent.name)
);
const youngLog = youngStudents.forEach((youngStudent) =>
  console.log(youngStudent.name)
);
