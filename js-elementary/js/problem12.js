var num = 0;

function increaseCounter(increment, btnText) {
  num = num + increment;
  console.log(num);
  console.log(btnText);
  document.getElementById("counterInput").value = num;
  document.getElementById("counterDisplayer").innerHTML = num;
}

// function increaseCounter5() {
//   console.log("increaseCounter called");
//   num = num + 5;
//   console.log(num);
//   document.getElementById("counterInput").value = num;
//   document.getElementById("counterDisplayer").innerHTML = num;
// }

// function increaseCounter10() {
//   console.log("increaseCounter called");
//   num = num + 10;
//   console.log(num);
//   document.getElementById("counterInput").value = num;
//   document.getElementById("counterDisplayer").innerHTML = num;
// }

function changeColor() {
  //   document.body.style.backgroundColor = "red";
  num = num + 1;

  var div = document.getElementById("colorDisplay");
  if (num % 2 == 0) {
    div.style.backgroundColor = "yellow";
  } else {
    div.style.backgroundColor = "red";
  }
  console.log("changeColor");
}
