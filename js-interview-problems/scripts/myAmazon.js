let allOrders = [
    { userId: 1, username: "Vishal Yadav", category: "highRange", name: "Nokia Phone", price: 16000 },
    { userId: 2, username: "Nisha Yadav", category: "highRange", name: "Xiaomi Phone", price: 12000 },
    { userId: 1, username: "Vishal Yadav", category: "lowRange", name: "Skullcandy earphone", price: 1000 },
    { userId: 3, username: "Deepa Yadav", category: "midRange", name: "Nike Shoes", price: 4500 },
    { userId: 2, username: "Nisha Yadav", category: "lowRange", name: "Cello Toaster", price: 700 },
    { userId: 2, username: "Nisha Yadav", category: "highRange", name: "Washing Machine", price: 11500 },
];

//Ask user to enter the userId in text field,, and console orders of that userId
//Ask user to enter the userId in text field,, and show them in UI


//Ask user to enter the max price in text field,, and console orders which are below that price
//Ask user to enter the userId in text field,, and show them UI


//https://jsonplaceholder.typicode.com/posts
// use this api route to get the value and show that on UI

function getUser(arr) {
    let arrUser = []
    arr.forEach(element => {
        var userIdValue = document.getElementById("userIdField").value;
        if (element.userId === Number(userIdValue)) {
            arrUser.push(element);
        }
    });
    document.getElementById("userValue").innerHTML = arrUser;
    console.log(arrUser);
}

function allOrdersUser() {
    return getUser(allOrders);
}

console.log("getUserPrice called")
function getUserPrice(arr) {
    let arrUser = []
    arr.forEach(element => {
        var userPriceValue = document.getElementById("userIdField").value;
        if (element.price <= Number(userPriceValue)) {
            document.getElementById("userValue").innerHTML = element;
            arrUser.push(element)
        }
    })
    console.log(arrUser)
}
getUserPrice(allOrders)

function OrdersUserPrice() {
    return getUserPrice(allOrders)
}

/*********************/

// window.onload = function () {
function loadXMLDoc() {
    // var request = new XMLHttpRequest();
    // request.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     } else {
    //         console.log("error occured")
    //     }
    //     document.getElementById("demo").innerHTML = this.responseText;
    // };

    // request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    // request.send();


    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        console.log("response called")
        console.log(response)
        return response.json()
    }).then((errro) => {
        console.log("errro called")
        console.log(errro)
        return errro;
    })

}


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response =>
//         response.text()
//     ).then(
//         json => console.log(json)
//     )
// document.getElementById("fetch").innerHTML = response.text();


const numArray = [23, 56, 49, 66, 81, 12, 6];

// Write a function to get the below outputArray
const outputArray = [56, 122, 108, 142, 172, 34, 22];

let numArr = numArray.map((i) => {
    return i * 2 + 10
})
console.log(numArr)

function numberArray(arr) {
    let arrNum = []
    arr.forEach((item) => {
        item = item * 2 + 10
        arrNum.push(item)
    })
    console.log(arrNum)
}
numberArray(numArray);



/**************************************************************/

// 10% of on all products
// const outputAllOrders = [
//     { userId: 1, username: "Vishal Yadav", name: "Nokia Phone", price: 14400 },
//     { userId: 2, username: "Nisha Yadav", name: "Xiaomi Phone", price: 10800 },
//     { userId: 1, username: "Vishal Yadav", name: "Skullcandy earphone", price: 900 },
//     { userId: 3, username: "Deepa Yadav", name: "Nike Shoes", price: 4050 },
//     { userId: 2, username: "Nisha Yadav", name: "Cello Toaster", price: 630 },
//     { userId: 2, username: "Nisha Yadav", name: "Washing Machine", price: 11500 },
// ];
console.log("discount ten percent called")
function discount(arr) {
    let arrOrders = []
    arrOrders = arr.map((item) => {
        return {
            userId: item.userId,
            username: item.username,
            name: item.name,
            price: item.price - (item.price * 0.1)
        }
    })
    console.log(arrOrders)
}
discount(allOrders)

// (item.price * 10) / 100
/**************************************************************/
// discount rates

//
// const discountRateOrders = [
//     { userId: 1, username: "Vishal Yadav", category: "highRange", name: "Nokia Phone", price: 16000 },
//     { userId: 2, username: "Nisha Yadav", category: "highRange", name: "Xiaomi Phone", price: 12000 },
//     { userId: 1, username: "Vishal Yadav", category: "lowRange", name: "Skullcandy earphone", price: 1000 },
//     { userId: 3, username: "Deepa Yadav", category: "midRange", name: "Nike Shoes", price: 4500 },
//     { userId: 2, username: "Nisha Yadav", category: "lowRange", name: "Cello Toaster", price: 700 },
//     { userId: 2, username: "Nisha Yadav", category: "highRange", name: "Washing Machine", price: 11500 },
// ];
console.log("discountRateOrders called ")
const rateCard = {
    highRange: 10,
    midRange: 15,
    lowRange: 20
};

function discountRateOrders(arrValue) {
    const localArray = JSON.parse(JSON.stringify(arrValue))
    let arrDisOrders = []
    arrValue.map((element) => {

        console.log(element.price)
        if (element.category === "highRange") {
            element.price = element.price - (element.price * rateCard.highRange / 100)
            arrDisOrders.push(element)
        }
        else if (element.category === "midRange") {
            element.price = element.price - (element.price * rateCard.highRange / 100)
            arrDisOrders.push(element)
        }
        else if (element.category === "lowRange") {
            element.price = element.price - (element.price * rateCard.lowRange / 100)
            arrDisOrders.push(element)
        }
        else {
            console.log(" not found any solution")
        }
    })
    console.log(localArray)
    console.log(arrDisOrders)
}
discountRateOrders(allOrders)
// function allCategorydiscount(arr) {
//     let arrOrders = []
//     arr.forEach((element) => {
//         element.price = element.price + (element.price) * 100
//         console.log(element)
//         arrOrders.push(element)
//     })
//     console.log(arrOrders)
// }