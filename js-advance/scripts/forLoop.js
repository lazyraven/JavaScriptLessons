let numbers = [10, , 6, 12, 34, 8, 64, 75, 9]

function heighestValue(arrVal) {
    let number1 = arrVal[0];
    for (let i = 1; i < arrVal.length; i++) {

        if (number1 < arrVal[i]) {
            number1 = arrVal[i]
            console.log(number1)
        }
    }
    console.log("outside", number1)
}
heighestValue(numbers);