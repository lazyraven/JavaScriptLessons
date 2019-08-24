var phoneNokia = { length: 4, width: 2 };
var phoneLenovo = { length: 5, width: 2.5 };
var notebook = { length: 10, width: 6 };

//Console log area of above shapes
function findArea(area) {
  //   var sumNum = sumAllAreas,
  var areaOne = area.length * area.width;
  console.log(areaOne);
  return areaOne;
}

function getPhoneNokiaArea() {
  findArea(phoneNokia);
}
function getPhoneLenovoArea() {
  findArea(phoneLenovo);
}
function getNotebookArea() {
  findArea(notebook);
}

var getSumofAll = function() {
  var first = findArea(phoneNokia);
  var second = findArea(phoneLenovo);
  var third = findArea(notebook);
  sumAllAreas = first + second + third;
  console.log(sumAllAreas);
};
