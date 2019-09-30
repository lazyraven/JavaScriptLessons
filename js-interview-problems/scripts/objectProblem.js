// Student 1 marks
let s1T1Marks = { hindi: 60, eng: 80, maths: 34, science: 56 }
let s2T2Marks = { hindi: 56, eng: 84, maths: 56, science: 40 }


// Student 2 marks
let s2T1Marks = { hindi: 120, eng: 160, maths: 68, science: 112 }
let s2TMarks = { hindi: 112, eng: 168, maths: 112, science: 80 }

// Write a function to double the marks of input object
//for in, object.values, object.keys
// getDoubleMarks(marksObj), put proper validation for object and all


let getDoubleMarks = function (marksObj) {
    var newObj = {};
    for (let x in marksObj) {
        marksObj[x] * 2;
        // console.log(x)
        // console.log(marksObj)
        newObj[x] = marksObj[x] * 2
        console.log(newObj[x])

    }
    console.log(newObj)
    console.log("getDoubleMarks called")
}
getDoubleMarks(s1T1Marks)
getDoubleMarks(s2T2Marks)

/*******************************/
var phoneNokia = { length: 4, width: 2 };
var phoneLenovo = { length: 5, width: 2.5 };
var notebook = { length: 10, width: 6 };
//Console log area of above shapes
let arr = []
let getArea = function (area) {
    let fullArea = area.length * area.width
    console.log(fullArea)
    arr.push(fullArea)
}
console.log(arr)
getArea(phoneNokia)
getArea(phoneLenovo)
getArea(notebook)
