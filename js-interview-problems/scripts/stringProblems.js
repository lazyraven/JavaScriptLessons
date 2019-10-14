let students = [
    {
        name: "Nisha",
        marks: { hindi: 60, eng: 80, maths: 34, science: 56 }
    },
    {
        name: "Vishal",
        marks: { hindi: 70, eng: 88, maths: 94, science: 99 }
    },
    {
        name: "Shanu",
        marks: { hindi: 75, eng: 81, maths: 84, science: 67 }
    }
];

// Write a function to console below
// My Name is Nisha
// My Name is Vishal
// My Name is Shanu
let getStudent = () => {
    students.forEach((item) => {
        console.log(`My Name is ${item.name}`)
    })
}
getStudent()

//Write a function to console below
// [ "My Name is Nisha", "My Name is Vishal", "My Name is Shanu"]
let StudentArr = (arr) => {
    let arrStudent = [];
    arr.forEach((item) => {
        arrStudent.push(`My Name is ${item.name}`)
    })
    console.log(arr)
}
StudentArr(students)

let studentName = students.map((item) => {
    return "My Name is " + item.name
})
console.log(studentName)

//Write a function to console below
// My Name is Nisha, my hindi marks are 60
// My Name is Vishal, my hindi marks are 70
// My Name is Shanu, my hindi marks are 75

let studentNameMarks = students.map((item) => {
    return (`My Name is ${item.name}, My hindi marks are :  ${item.marks.hindi}`)
})
console.log(studentNameMarks)

//Write a function to console below
// My Name is Nisha, my maths marks are 34
// My Name is Vishal, my maths marks are 94
// My Name is Shanu, my maths marks are 84
let studentNameMath = students.map((item) => {
    return (`My Name is ${item.name}, My maths marks are :  ${item.marks.maths}`)
})
console.log(studentNameMath)



//Write a function to console below
// My Name is Nisha, my total marks are __
// My Name is Vishal, my total marks are __
// My Name is Shanu, my total marks are __
console.log("studentNameTotalM called")

let studentNameTotalM = students.map((item) => {
    let totalMarksValue = Object.values(item.marks)
    console.log(totalMarksValue.reduce((a, b) => a + b, 0))
    return (`My Name is ${item.name} My total marks are : ${totalMarksValue.reduce((a, b) => a + b, 0)}`)
})
console.log(studentNameTotalM)
// let totalMarks = item.marks.hindi + item.marks.eng + item.marks.maths + item.marks.science
// let totalMarks = item.marks
// let totalMarks = Object.keys(item.marks)
// totalMarks.reduce((a, b) => a + b, 0)

function printStudentMarks(studentArray) {
    console.log("total foreach called")
    studentArray.forEach((std) => {
        let total = 0;
        Object.values(std.marks).forEach((item) => {
            total = total + item;
        });
        console.log(total)
    })
};

printStudentMarks(students);


    // console.log(totalMarksValue)



// let studentNameTotalM = () => {
//     students.forEach((item) => {
//         console.log("My Name is", item.marks)
//     })
// }
// studentNameTotalM()
