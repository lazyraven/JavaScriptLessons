var defaultNum = 10;

function getNumber(passedNum) {
  var myNumber = "";
  if (passedNum) {
    myNumber = 10 * passedNum;
  } else {
    myNumber = defaultNum;
  }
  return myNumber;
}

var profileName = "Vishal Yadav";

function getProfileName(passedName) {
  var returnVal = "";

  if (passedName) {
    returnVal = "Hii " + passedName;
  } else {
    returnVal = profileName;
  }

  return returnVal;
}

var salary = 1000000;

var myLuckyNumber = getNumber(12);
console.log("myLuckyNumber aclled soijaojso");
console.log(myLuckyNumber);

var myLuckyName = getProfileName("Nisha Yadav");
console.log("myLuckyName aclled soijaojso");
console.log(myLuckyName);
