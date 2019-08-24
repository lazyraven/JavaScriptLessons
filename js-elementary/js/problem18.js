var students = [
  { id: "1", name: "nisha", english: 60, hindi: 45, maths: 90, science: 67 },
  { id: "2", name: "vishal", english: 70, hindi: 55, maths: 81, science: 86 },
  { id: "3", name: "deepa", english: 80, hindi: 88, maths: 93, science: 55 },
  { id: "4", name: "shanu", english: 40, hindi: 98, maths: 75, science: 73 },
  { id: "5", name: "ashishh", english: 66, hindi: 73, maths: 45, science: 56 },
  {
    id: "6",
    name: "shrinath",
    english: 69,
    hindi: 74,
    maths: 67,
    science: 78
  },
  { id: "7", name: "teena", english: 87, hindi: 80, maths: 90, science: 67 },
  { id: "8", name: "hitesh", english: 90, hindi: 78, maths: 70, science: 89 }
];

function getStudent() {
  students.forEach(function(item) {
    var matchedId = document.getElementById("studentNumber").value;
    if (item.id === matchedId) {
      document.getElementById("studentOutput").innerHTML = item.name;
    }
  });
}

function fillDefaultStudent() {
  document.getElementById("studentOutput").innerHTML = students[0].name;
}
