var softyCone = { height: 4, rad: 3 };
var conCap = { height: 10, rad: 4 };
var conSign = { height: 15, rad: 8 };

function allConesArea(device) {
  var volume = 3.14 * device.rad * device.rad * device.height;
  console.log(volume);
  return volume;
}

function softyConeArea() {
  allConesArea(softyCone);
}
function conCapArea() {
  allConesArea(conCap);
}
function conSignArea() {
  allConesArea(conSign);
}
function getSumofAll() {
  first = allConesArea(softyCone);
  second = allConesArea(conCap);
  third = allConesArea(conSign);
  sumAllVolume = first + second + third;
  console.log(sumAllVolume);
}
