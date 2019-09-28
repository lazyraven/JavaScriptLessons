// let dish = { id: 1, dishName: "Dal makhani", price: 500, dishType: "lunch" };

var student1 = { eng: 70, maths: 90, hindi: 67, science: 89 };

var student2 = { eng: 56, maths: 80, hindi: 77, science: 84, sanskrit: 90 };

//Give me total marks for both the students

// Q1. Total marks for student 1 & student 2, just do console.log
// function getTotalMarks(studentMarks) {
//   // Object.values
//   var object = 0;
//   for (let i in studentMarks) {
//     object = studentMarks[i] + object;
//   }
//   console.log(object);
// }

// function getTotalMarks(studentMarks) {
//   Object.values(studentMarks);
//   var totalMarks = 0;
//   Object.values(studentMarks).forEach(item => {
//     console.log(item);
//     totalMarks = totalMarks + item;
//   });
//   console.log(totalMarks);
//
// }
function getTotalMarks(studentMarks) {
  Object.keys(studentMarks);
  var totalMarks = 0;
  Object.keys(studentMarks).forEach(item => {
    console.log(item);
    totalMarks = totalMarks + studentMarks[item];
  });
  console.log(totalMarks);
}

getTotalMarks(student1);
getTotalMarks(student2);

// var object = 0;
// for (let i in student1) {
//   console.log("for in loop called");
//   //   console.log(i);
//   object = student1[i] + object;
//   console.log(student1[i]);
//   //   console.log(object);
// }
// console.log(object);

// var object2 = 0;
// console.log("for in loop called second");

// for (let i in student2) {
//   object2 = object2 + student2[i];
//   console.log(student2[i]);
// }
// console.log(object2);

let fruits = ["mango", "guava", "muskmelon"];

fruits.forEach(item => {
  // ${{item}}
  var totalItem = `I love ${item}`;
  console.log(totalItem);
  console.log(item);
});

//"I love mango"
//"I love guava"
//"I love mmuskmelon"

let fruitsQuantity = { mango: 10, guava: 20, muskmelon: 3 };

for (let item in fruitsQuantity) {
  var totalItem = `I have  ${fruitsQuantity[item]}  ${item} `;
  console.log(totalItem);
}
//"I have 10 mango"
//"I have 20 guava"
//"I have 3 mmuskmelon"

// console.log(student1.eng);
// console.log(student1["eng"]);
