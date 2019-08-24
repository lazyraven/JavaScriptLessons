//Per ltr price is 50 rupees,
var dailyMilkSold = [
  { day: "1", name: "nisha", milkQuantity: 60 },
  { day: "2", name: "vishal", milkQuantity: 70 },
  { day: "3", name: "deepa", milkQuantity: 80 },
  { day: "4", name: "shanu", milkQuantity: 40 },
  { day: "5", name: "ashishh", milkQuantity: 66 },
  { day: "6", name: "shrinath", milkQuantity: 69 },
  { day: "7", name: "teena", milkQuantity: 87 },
  { day: "8", name: "hitesh", milkQuantity: 90 },
  { day: "9", name: "hitesh", milkQuantity: 76 },
  { day: "10", name: "hitesh", milkQuantity: 87 }
];

function getMilkEarning() {
  dailyMilkSold.forEach(function(items) {
    var milkDay = document.getElementById("dayNumber").value;
    if (items.day === milkDay) {
      document.getElementById("milkQuantity").innerHTML = items.milkQuantity;
      console.log(items.milkQuantity);
      console.log(items.day);
    }
  });
}
