//First stack of softy cones with diffrent sizes
var softyCones = [
  { height: 4, radius: 3 },
  { height: 10, radius: 4 },
  { height: 15, radius: 8 },
  { height: 5, radius: 2 }
];

//Second stack of bucket cones with diffrent sizes
var bucketCones = [
  { height: 6, radius: 7 },
  { height: 5, radius: 3 },
  { height: 4, radius: 5 },
  { height: 6, radius: 2 }
];

function ConesVolume(cones) {
  sum = 0;
  cones.forEach(function(item, index) {
    volume = 3.14 * item.height * item.radius * item.radius;
    sum = sum + volume;
    // console.log(volume);
  });
  console.log(sum);

  return sum;
}
function softyConesVolume() {
  ConesVolume(softyCones);
}
function bucketConesVolume() {
  ConesVolume(bucketCones);
}

function moreConesVolume() {
  var softyCone = ConesVolume(softyCones);
  var bucketCone = ConesVolume(bucketCones);

  console.log(softyCone);
  console.log(bucketCone);

  if (softyCone > bucketCone) {
    console.log("this condition is true if greater softcone");
  } else {
    console.log("this condiktion is true. if greater bucketcone");
  }
}

// volume of cone is pi  * radius * radius * height

// Q1. Total volume of softy cones
// Q2. Total volume of bucket cones

// Q3. Whose volume is bigger (Softy stack or Bucket stack)
//console.log('softy stack has higher volume')
//console.log('bucket stack has higher volume')
