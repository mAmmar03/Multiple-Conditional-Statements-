let maritalStatus = "married";
let isBformIssued = true;
let domicile = "lahore";

console.log(maritalStatus != "single");
console.log(5 == 5);
console.log(maritalStatus == "married");
console.log(domicile != "lahore");


// Multipal Conditional Statement
let friendage = prompt("Enter your Age");
let age = Number(friendage);



if (age >= 70) {
  alert("You are Retired");
} else if (age >= 18) {
  alert("You are Eligible");
} else {
  alert("You are not Eligible");
}

//  for loops

for (let i = 11; i <= 100; i = i + 3) {
  console.log(i);
}

for (let i = 500; i >= 1; i = i - 1) {
  console.log(i);
}
