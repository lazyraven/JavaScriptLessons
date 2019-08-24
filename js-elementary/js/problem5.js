var bottleCap = 2;
var fan = 8;
var pen = 0.5;

function areaAll(device) {
  var numberArea = 3.14 * device.radius * device.radius;
  console.log(numberArea);
  return numberArea;
}

function bottleCapArea() {
  areaAll(bottleCap);
}
function fanCapArea() {
  areaAll(fan);
}
function penCapArea() {
  areaAll(pen);
}
function getSumofAll() {
  first = areaAll(bottleCap);
  second = areaAll(fan);
  third = areaAll(pen);
  sumAllAreas = first + second + third;
  console.log(sumAllAreas);
}
