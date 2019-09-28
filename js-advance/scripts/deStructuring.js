// let employee = {
//   profile: {
//     name: "Vishal",
//     empId: 6858
//   },
//   work: {
//     fyndster: "I started this",
//     rsystems: "I used to work here"
//   },
//   salary: {
//     firstSalary: 100000,
//     currentSalart: 500000
//   }
// };

// let {
//   work,
//   salary,
//   profile: { name }
// } = employee;

// let workForce = [
//   {
//     profile: {
//       name: "Vishal",
//       empId: 6858
//     },
//     work: {
//       fyndster: "I started this",
//       rsystems: "I used to work here"
//     },
//     salary: {
//       firstSalary: 100000,
//       currentSalart: 500000
//     }
//   },
//   {
//     profile: {
//       name: "Nisha",
//       empId: 6858
//     },
//     work: {
//       fyndster: "I started this",
//       rsystems: "I used to work here"
//     },
//     salary: {
//       firstSalary: 100000,
//       currentSalart: 500000
//     }
//   }
// ];

// const [emp1, emp2] = workForce;
// console.log(emp1);

// console.log(work);
// console.log(name);

/************************************************** */

const movies = {
  pre1970: {
    romantic: ["Soorvaansham", "Dil", "BADHSHAH"],
    thriller: ["Dil chahata he", "Dil", "BADHSHAH"],
    action: ["Dil chahata he", "Dil", "BADHSHAH"]
  },
  pre2000: {
    romantic: ["Dil chahata he", "Dil", "BADHSHAH"],
    thriller: ["Dil chahata he", "Dil", "BADHSHAH"],
    action: ["Dil chahata he", "Dil", "BADHSHAH"]
  },
  post2000: {
    romantic: ["Suiltan", "Dil", "BADHSHAH"],
    thriller: ["Dil chahata he", "Dil", "BADHSHAH"],
    action: ["Dil chahata he", "Dil", "BADHSHAH"]
  }
};

//Destricture this to fetch.
// 1970 movies object,
// pre2000 -> romatic
// console.log(movies: {"1970"})
let {
  pre1970,
  post2000: {
    thriller: [emp1]
  }
} = movies;
const { romantic } = movies.pre2000;

console.log(pre1970);
console.log(romantic);
console.log(emp1);
console.log(movies);

// console.log(movies: {pre2000:{romantic}})
