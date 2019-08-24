// there are two employe below is there attendence, 1 means, enmployee came of office
// 0  means he didn't. Tell how many days a employee came to office.

var employee1 = [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1];
var employee2 = [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1];

function employeeModel(empData) {
  var sum = 0;

  for (i = 0; i < empData.length; i++) {
    if (empData[i] == 0) {
      sum = sum + 1;
    }
  }
  console.log(sum);
}
function employeeOne() {
  employeeModel(employee1);
}
function employeeSecond() {
  employeeModel(employee2);
}
