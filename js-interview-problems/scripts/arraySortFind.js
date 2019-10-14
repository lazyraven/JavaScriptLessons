const classA = [
    { name: "Nisha", rollno: 101 },
    { name: "Vishal", rollno: 102 },
    { name: "Ashish", rollno: 103 },
    { name: "Shanu", rollno: 104 },
    { name: "Deepa", rollno: 105 },
];

const classB = [
    { name: "Shrinath", rollno: 201 },
    { name: "Golu", rollno: 202 },
    { name: "Bharat", rollno: 203 },
    { name: "Chintu", rollno: 204 },
    { name: "Vishwanath", rollno: 205 },
];

//Add both classA and classB students

let classStu = classA.concat(classB);
console.log(classStu)
console.log("classA called")

console.log(classA)


const allClass = [...classA, ...classB]
console.log("alll class called")
console.log(allClass)



const laptopOutParts = {
    keyboard: 4000,
    mousePad: 2500,
    lcdScreeb: 10000
}

const laptopInParts = {
    motherBoard: 15000,
    cpu: 12000,
    powerFan: 500
};

//Add both the object and return in 1 single object.
let merged = { ...laptopOutParts, ...laptopInParts }
console.log(merged)

// const returnedTarget = Object.assign(laptopOutParts, laptopOutParts);
// console.log(returnedTarget)
// console.log(laptopOutParts)

function merge_options(laptopOutParts, laptopInParts) {
    let obj3 = {};
    for (var attrname in laptopOutParts) { obj3[attrname] = laptopOutParts[attrname]; }
    for (var attrname in laptopInParts) { obj3[attrname] = laptopInParts[attrname]; }
    console.log(obj3)
    return obj3;
}
merge_options()

const numbers = [89, 0, 45, 77, 9, 0, 12, 0, 98, 0];
//Remove all the zeros and return the rest array.

let getNumbersRemove = numbers.filter((element) => {
    return (element != 0);
})
console.log(getNumbersRemove)
console.log(numbers)

function getNumbers(arr) {
    let arrValue = [];
    arr.forEach((element) => {
        if (element != 0) {
            arrValue.push(element)
        }
    })
    console.log(arrValue)
}
getNumbers(numbers)
//Replace all the zeros with 101 and return the rest array.

function getNewValue(arr) {
    const localArray = JSON.parse(JSON.stringify(arr))
    localArray.forEach((element, index, array) => {
        if (element === 0) {
            array[index] = 101;
        }
    })
    console.log(localArray)
}
getNewValue(numbers)
console.log(numbers)


//Separate numbers into two arrays, one consisting all non-zero value, other with all the zero values 
const inputArr = [89, 0, 45, 77, 9, 0, 12, 0, 98, 0];

// [89, 45, 77, 9, 12, 98] 
// [0, 0, 0, 0]

// function getValueSeprate() {

// }
let getValueNumber = inputArr.filter((element) => {
    return element !== 0
})
console.log(getValueNumber)

let getValueZero = inputArr.filter((element) => {
    return (element === 0)
})
console.log(getValueZero)

const getAllValue = [...getValueNumber, ...getValueZero]
console.log(getAllValue)

// [89, 45, 77, 9, 12, 98, 0, 0, 0, 0];






