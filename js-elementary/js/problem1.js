var classAStudents = [20, 45, 78, 10, 56, 89, 13, 34, 36, 86, 89, 37];

var classBStudents = [10, 14, 18, 89, 98, 16, 34, 23, 67, 10, 78, 36];
//Every student who gets more than or equal to 36 marks is passed, tell me how many student
//passed the exams, write a program.

//Q1. How many students from class A passed ?
//Q2. How many students from class B passed ?
function getPassedStudents(students) {
  var sum = 0;
  students.forEach(function (item) {
    if (item >= 36) {
      sum = sum + 1;
    }
  });
  console.log(sum);
}

function classAStudentsPassed() {
  console.log("classAStudentsPassed called");
  getPassedStudents(classAStudents);
}

function classBStudentsPassed() {
  getPassedStudents(classBStudents);
}
