const marks = [60, 65, 56, 89, 91, 46, 72, 21, 88];

//Find the minimum value in the array.
//Find the maximum value in the array.

function findMinimum(dataItems) {
    console.log("findMinimum fucntion called")
    let minVal = dataItems[0];
    for (let i = 0; i < dataItems.length; i++) {
        if (minVal > dataItems[i]) {
            minVal = dataItems[i]
        }
    }
    console.log(minVal);
}
findMinimum(marks);


/*****************************/
function findMaxmum(dataItems) {
    console.log("findMaximum fucntion called")
    let maxVal = dataItems[0];
    for (let i = 0; i < dataItems.length; i++) {
        if (maxVal < dataItems[i]) {
            maxVal = dataItems[i]
        }
    }
    console.log(maxVal);
}
findMaxmum(marks);


const student = {
    english: 67,
    hindi: 65,
    maths: 87,
    science: 73,
    sanskrit: 54,
    social: 90
};

function minmumMarksSub(studentObject) {
    let minVal = studentObject["english"]
    let minSub = '';
    for (let x in studentObject) {
        if (minVal > studentObject[x]) {
            minVal = studentObject[x]
            minSub = x;
        }
    }
    console.log(minVal)
    console.log(minSub)

};
minmumMarksSub(student);

console.log(Object.values(student))
let obj = Object.values(student)

function findMinMarks(dataItems) {
    console.log("findMaximum fucntion called")
    let minVal = dataItems[0];
    for (let i = 0; i < dataItems.length; i++) {
        if (minVal > dataItems[i]) {
            minVal = dataItems[i]
        }
    }
    console.log(minVal);
}
findMinMarks(obj)

// console the minimum marks subject name, 


const name = "Nisha Yadav";

for (let i = 0; i < name.length; i++) {
    // console.log(name[i])
    let str = name[name.length - (i + 1)]
    str = str + name[name.length - (i + 1)]
    console.log(str)
}
console.log(name)

// //"vadaY ahsiN";


