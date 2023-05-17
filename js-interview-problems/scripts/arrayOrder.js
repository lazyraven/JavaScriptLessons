const marks = [60, 65, 56, 89, 91, 46, 72, 21, 88];

//Find the minimum value in the array.
//Find the maximum value in the array.

function findMinimum(dataItems) {
    console.log("findMinimum fucntion called")
    let minVal = dataItems[0];
    for (let i = 0; i < dataItems.length; i++) {
        if (minVal > dataItems[i]) {
            console.log("dataItems[i]", minVal, dataItems[i])
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
        console.log("dataItems[i]", maxVal, dataItems[i])

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

console.log(Object.values(student), Object.keys(student))
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


const userName = "Nisha Yadav";

for (let i = (userName.length - 1); i >= 0; i++) {
    console.log(userName[i])
    let str = userName[userName.length - (i + 1)]
    str = str + userName[userName.length - (i + 1)]
    console.log(str)
}
console.log(userName)

// //"vadaY ahsiN";


