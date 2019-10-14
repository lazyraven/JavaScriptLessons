let inputArr = [10, 40, 15, 34, 90, 110];
let inputArr2 = [3, 23, 33, 11];

// outputArr => [20, 80, 30, 68]
// outputArr2 => [6, 46, 66, 22]

// write a function to output above, to console above
// transformArray(inputArr)

let transformArray = function (arr) {
    let forResult = arr.map((value) => {
        return value * 2;
    });
    console.log(forResult)
}
transformArray(inputArr);
transformArray(inputArr2);


// if (arr && Array.isArray(arr)) {
//     let forResult = arr.map((value) => {
//         return value * 2;
//     });
//     console.log("forResult called")
//     console.log(forResult)

// } else {
//     console.log("please pass proper input.")
// }
// console.log("transformArray called")
// let resultArr =
// transformArray(inputArr);
// console.log("resultArr called");
// console.log(resultArr);

// transformArray([67, 89], { name: "visahl" });


/****************************************************/

// Array.filter
result = inputArr.filter((item) => {
    return (item % 10 === 0)
});
console.log("filter result calledz");
console.log(result);


/****************************************************/
// Do it with .map
// if you want to manipulate the original array, you use map

let arr = [12, 56, 78, 23, 18, 13];

let formattedArr = arr.map((item) => {
    return `<h1>${item}</h1>`
    // formattedArr.push(item + 1)
});

console.log(formattedArr)

/************************/
//below  Every student who gets more than or equal to 36 marks is passed, tell me how many student
//passed the exams, write a program.

//Q1. How many students from class A passed ?
//Q2. How many students from class B passed ?,,,

//Q3. Get sum of both class marks.
//Q4. Tell me which class scored more marks

// A > B
//console.log("class A has more marks")
// B > A
//console.log("class B has more marks")
var classAStudents = [20, 45, 78, 10, 56, 89, 13, 34, 36, 86, 89, 37];
var classBStudents = [10, 14, 18, 89, 98, 16, 34, 23, 67, 10, 78, 36];
console.log("class Students ")

let getMarks = function (arr) {
    let marksStudents = []
    // let moreMarksStudent = []
    let totalStudents = 0
    let totalMarks = 0;
    arr.forEach((item) => {
        if (item >= 36) {
            marksStudents.push(item)
            totalStudents = totalStudents + 1
            totalMarks = totalMarks + item
        }
    })
    // moreMarksStudent.push(totalMarks)
    // console.log(moreMarksStudent)
    console.log(marksStudents)
    console.log(totalStudents)
    console.log(totalMarks)
    // console.log(`classStudents : ${marksStudents}`)
}
getMarks(classAStudents)
getMarks(classBStudents)


function getMoreMarksStu() {
    let stu1 = getMarks(classAStudents)
    let stu2 = getMarks(classBStudents)
    if (stu1 > stu2) {
        console.log("class A has more marks");
        // console.log(" this condition true")
    } else {
        console.log("class B has more marks");
        // console.log(" this condition not true")

    }
}
getMoreMarksStu()


/************************/
//below write a function to give only even numbers
// write a function to give only odd numbers

// write a function to give only multiplicatiom of 5
// write a function to give me the sum of all the even numbers

let bigNumbers = [800, 677, 450, 422, 988, 1000, 444, 4445, 761, 898];
console.log("evenNumber called")

function evenNumber(arr) {
    let even = []
    arr.forEach((item) => {
        if (item % 2 === 0) {
            even.push(item)
        }
    });
    console.log(even)
}
evenNumber(bigNumbers)

console.log("oddNumber called")
let oddNumber = function (arr) {
    let odd = []
    arr.forEach((item) => {
        if (item % 2 === 1) {
            odd.push(item)
        }
    })
    console.log(odd)
}
oddNumber(bigNumbers)

let cakes = [
    { name: "Chocolate", quantity: 2, price: 600 },
    { name: "Strawbery", quantity: 3, price: 350 },
    { name: "Vannila", quantity: 2, price: 500 },
    { name: "Pineapple", quantity: 3, price: 650 },
    { name: "Fruit n Nuts", quantity: 4, price: 750 },
    { name: "ButterScotch", quantity: 1, price: 950 },
];

//Give me all the cakes whose price is equal to or below 500
//Give me all the cakes whose price is above 500

//Give me sum of the total piece price, of all the cakes whose price is above 500
console.log("cakes called less & equal 500")

let cakePriceLess = function (arr) {
    let cakePrice = []
    arr.forEach((item) => {
        if (item.price <= 500) {
            cakePrice.push(item.price)
        }
    })
    console.log(cakePrice)
}
cakePriceLess(cakes)

console.log("cakes called more 500")
let cakePriceMore = function (arr) {
    let cakePrice = []

    arr.forEach((item) => {
        if (item.price > 500) {
            cakePrice.push(item.price)
        }
    })
    console.log(cakePrice)
}
cakePriceMore(cakes)

console.log("cakes called total piece price more 500")
let cakeTotalPrice = function (arr) {
    let cakePrice = []
    arr.forEach((item) => {
        let totalPrice = item.quantity * item.price
        if (item.price > 500) {
            cakePrice.push(totalPrice)
        }
    })
    console.log(cakePrice)
    console.log(cakePrice.reduce((a, b) => a + b, 0))
    let total = 0
    cakePrice.forEach((price) => {
        total = total + price
    })
    console.log(total)
}
cakeTotalPrice(cakes)