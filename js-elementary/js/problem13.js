function multiplication() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;

  var total = Number(num1) * Number(num2);
  document.getElementById("resultMultiplication").innerHTML = total;
  console.log(total);
}
function sum() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var total = Number(num1) + Number(num2);
  document.getElementById("resultSum").innerHTML = total;
  console.log(total);
}
