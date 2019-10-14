const salarySlips = [
    { id: 3, salary: 40000, salaryDate: "2019-03-01" },
    { id: 2, salary: 30000, salaryDate: "2019-02-01" },
    { id: 4, salary: 50000, salaryDate: "2019-04-01" },
    { id: 5, salary: 70000, salaryDate: "2019-05-01" },
    { id: 1, salary: 20000, salaryDate: "2019-01-01" },
    { id: 6, salary: 60000, salaryDate: "2019-06-01" }
];

// Return the resultant array of all salarySlip 
// which are after march 15 ("2019-03-15")
function getsalarySlips(arr) {
    let salaryDateObj = arr.filter((item) => {
        return (new Date(item.salaryDate) >= new Date("2019-03-15"))
    })
    console.log(salaryDateObj)
}
getsalarySlips(salarySlips)

const mcdMonthlySell = [
    { date: "2019-09-01", totalItems: 50, itemPrice: 10 },
    { date: "2019-09-02", totalItems: 60, itemPrice: 10 },
    { date: "2019-09-03", totalItems: 70, itemPrice: 9 },
    { date: "2019-09-04", totalItems: 40, itemPrice: 12 },
    { date: "2019-09-05", totalItems: 50, itemPrice: 11 },
    { date: "2019-09-06", totalItems: 50, itemPrice: 10 },
    { date: "2019-09-07", totalItems: 80, itemPrice: 9 },
    { date: "2019-09-08", totalItems: 60, itemPrice: 10 },
    { date: "2019-09-09", totalItems: 30, itemPrice: 12 },
    { date: "2019-09-10", totalItems: 60, itemPrice: 11 }
];
console.log("mcdMonthlySell called")

//Console total revenue of second day "2019-09-02"
//Console total revenue till 5th day "2019-09-05"
function getmcdMonthlySell(arr) {
    console.log("one day revenue")
    arr.forEach(item => {
        // console.log((new Date(item.date) <= new Date("2019-09-02")))
        if (new Date(item.date).getTime() === new Date("2019-09-02").getTime()) {
            let totalRevenue = item.totalItems * item.itemPrice
            console.log(item.date)
            console.log(totalRevenue)
        }
    });
}
getmcdMonthlySell(mcdMonthlySell)

function getRevenueSell(arr) {
    let totalRevenue = 0;
    arr.forEach(item => {
        if (new Date(item.date) <= new Date("2019-09-05")) {
            let dayRevenue = item.totalItems * item.itemPrice
            console.log(new Date(item.date) <= new Date("2019-09-05"))
            totalRevenue = totalRevenue + dayRevenue
            // console.log(dt1)
        }
    });
    console.log("Five Day Revenue")
    console.log(totalRevenue)
}
getRevenueSell(mcdMonthlySell)


/**************************************/

let tarikh = new Date()
document.write(getDate(tarikh) + "<br>")

function getDate(pd) {
    let date = pd.getDate()
    let month = pd.getMonth();
    month = month + 1
    let year = pd.getFullYear();
    return date + "-" + month + "-" + year
}

// let date = new Date(99, 05, 11, 12, 15, 23, 23);
let date = new Date("2015-05-12");

document.getElementById("test").innerHTML = date;




/*********************** */
// All gate method & Set method
// toDateString, get(Date, FullYear, Month, Day, Hours, Minutes, Seconds, Milliseconds)()
// set(Date, FullYear, Month, Hours, Minutes, Seconds, Milliseconds)()
console.log(" All gate method & Set method")
let now = new Date()
now.setFullYear(2020)
document.write(now.getMonth())

// document.write(now.getDate())
 // let date1 = new Date("2019-03-15")
        // let copy = new Date()
        // copy.setTime(date1.getTime())