var students = [
  { id: 1, name: "nisha", english: 60, hindi: 45, maths: 90, science: 67 },
  { id: 1, name: "vishal", english: 70, hindi: 55, maths: 81, science: 86 },
  { id: 1, name: "deepa", english: 80, hindi: 88, maths: 93, science: 55 },
  { id: 1, name: "shanu", english: 40, hindi: 98, maths: 75, science: 73 },
  { id: 1, name: "ashishh", english: 66, hindi: 73, maths: 45, science: 56 },
  { id: 1, name: "sharinath", english: 69, hindi: 74, maths: 67, science: 78 },
  { id: 1, name: "teena", english: 87, hindi: 80, maths: 90, science: 67 },
  { id: 1, name: "hitesh", english: 90, hindi: 78, maths: 70, science: 89 }
];

//Q1. Give me all the students who have scored more than 60 marks in all the 4 subjects
//Q2. Give me all the students who's average total marks are more than 75.

//Q3. Give me all the students who scored more than or equal to 90 marks in maths
//& also average marks of all 4 subjects is more than 75;

function printAlFirstDivisonStudents(stuArray) {
  var myResult = [];

  stuArray.forEach(function(obj, index) {
    if (
      obj.english > 60 &&
      obj.hindi > 60 &&
      obj.maths > 60 &&
      obj.science > 60
    ) {
      myResult.push(obj);
    }
  });

  console.log(myResult);
}

printAlFirstDivisonStudents(students);

function printMoreThanSeventyFiveStudents(arrayStudents) {
  arrayResult = [];
  arrayStudents.forEach(function(object) {
    var totalMarks =
      (object.english + object.hindi + object.maths + object.science) / 4;

    if (totalMarks > 75) {
      arrayResult.push(object);
    }
  });
  console.log(arrayResult);
}
printMoreThanSeventyFiveStudents(students);

function printTwoCdtn(arrayStudents) {
  arrayResult = [];
  arrayStudents.forEach(function(object) {
    var totalMarks =
      (object.english + object.hindi + object.maths + object.science) / 4;

    if (totalMarks > 75 && object.maths >= 90) {
      arrayResult.push(object);
    }
  });
  console.log(arrayResult);
}
printTwoCdtn(students);

// printAlFirstDivisonStudents(students2);

// var firstName = "Nisha";
// var lastName = "Yadav";
// var vishal = "435435435";

// function getFullName(fName, lName) {
//   var rollNo = "101";
//   var fullName = "Hii" + fName + lName;
//   console.log(fullName);
//   getMarks(100, rollNo);
// }

// function getMarks(marks, rNumber) {
//   console.log(marks);
//   console.log(rNumber);
// }

// getFullName("joker", "new");
