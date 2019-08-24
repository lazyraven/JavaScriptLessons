let employees = [
  { name: "Nisha Yadav", age: 24 },
  { name: "Vishal Yadav", age: 45 },
  { name: "Shanu Yadav", age: 21 },
  { name: "Shrinath Yadav", age: 22 },
  { name: "Deepa Yadav", age: 34 },
  { name: "Anil Yadav", age: 65 }
];

//Get me all the employees who are below or equal to 25 years old. console the final list of people

var methods = {
  getEmployeeAge: function(empData, value) {
    let empValue = empData.filter(item => {
      return item.age <= 25;
    });
    // console.log(" below or equal to 25 years old");
    // console.log(empValue);
  }
};

// methods.getEmployeeAge(employees, 10);

var students = [
  { name: "nisha", isRegular: true, english: 60, hindi: 45, maths: 90 },
  { name: "vishal", isRegular: true, english: 70, hindi: 55, maths: 81 },
  { name: "deepa", isRegular: true, english: 80, hindi: 88, maths: 93 },
  { name: "shanu", isRegular: false, english: 40, hindi: 98, maths: 75 },
  { name: "ashis", isRegular: true, english: 66, hindi: 73, maths: 45 },
  { name: "shari", isRegular: false, english: 69, hindi: 74, maths: 67 },
  { name: "teena", isRegular: true, english: 87, hindi: 80, maths: 90 },
  { name: "hitesh", isRegular: false, english: 90, hindi: 78, maths: 70 }
];

//Q1. Get me all the studnet who are regular students, using filter loop
//Q2. Get me all the students who are regular and also scored more than 70 marks in english
function getRegularStudents() {
  let valueRegularStudents = students.filter(item => {
    if (item.isRegular) {
      return true;
    }
  });
  console.log("regular students");
  console.log(valueRegularStudents);
}
// getRegularStudents(students);

function getRegularMarksStudents() {
  let valueRegularStudents = students.filter(item => {
    if (item.isRegular && item.english > 70) {
      return true;
    } else {
      return false;
    }
  });
  console.log("regular and also scored more than 70 marks in english");
  console.log(valueRegularStudents);
}
// getRegularMarksStudents(students);

///////////////////////////////////////////////////////////////////////////////

var workers = [
  { id: 1, name: "nisha", english: 60, hindi: 45, maths: 90, science: 67 },
  { id: 2, name: "vishal", english: 70, hindi: 55, maths: 81, science: 86 },
  { id: 3, name: "deepa", english: 80, hindi: 88, maths: 93, science: 55 },
  { id: 4, name: "shanu", english: 40, hindi: 98, maths: 75, science: 73 },
  { id: 5, name: "ashishh", english: 66, hindi: 73, maths: 45, science: 56 },
  { id: 6, name: "sharinath", english: 69, hindi: 74, maths: 67, science: 78 },
  { id: 7, name: "teena", english: 87, hindi: 80, maths: 90, science: 67 },
  { id: 8, name: "hitesh", english: 90, hindi: 78, maths: 70, science: 89 }
];

// Q1. Find worker whose name if hitesh;
// Q2. Find worker whose id is 5 using .find

const valueNameWorker = workers.find(wItem => {
  return wItem.name === "hitesh";
});
console.log("name find done");
console.log(valueNameWorker);

const valueIdWorker = workers.find(wItem => {
  return wItem.id === 5;
});
console.log("id find done");
console.log(valueIdWorker);
