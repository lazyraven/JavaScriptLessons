var classAStudents = [20, 45, 78, 10, 56, 89, 13, 34, 36, 86, 89, 37];
var classBStudents = [10, 12, 18, 89, 98, 16, 34, 23, 67, 10, 78, 36];
//Q1. Get sum of both class marks.
//Q2. Tell me which class scored more marks

// A > B
//console.log("class A has more marks")
// B > A
//console.log("class B has more marks")

function totalStudentsMarks(students) {
  var sum = 0;
  students.forEach(function(item) {
    sum = sum + item;
  });
  return sum;
}

function classAStudentsMarks() {
  return totalStudentsMarks(classAStudents);
}
function classBStudentsMarks() {
  totalStudentsMarks(classBStudents);
}
function moreMarks() {
  // student.forEach(function(item) {
  var studentOne = totalStudentsMarks(classAStudents);
  var studentSecond = totalStudentsMarks(classBStudents);
  console.log(studentOne);
  console.log(studentSecond);

  if (studentOne > studentSecond) {
    console.log("this conditin is true");
    console.log("class A has more marks");
  } else {
    console.log("condition not true");
    console.log("class B has more marks");
  }

  // });
}
