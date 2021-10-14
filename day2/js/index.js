///object
// let person = {
//   name: "nisha",
//   age: 23,
// };
// let firstName = "something";
// //change person name
// //[
// person.name = "something";
// //or
// person["name"] = "nothing";
// // ]

// //peron name access
// console.log(person.name);

// // console.log(person);

// console.log(firstName);

// //number case

// let person = {
//   1: "john",
//   age: 23,
// };

// let firstName = "something";

// person[1] = "nothing";

// console.log(person[1]);
// //string
// let person = {
//   name: "john",
//   age: 23,
// };

// let firstName = "something";

// person["name"] = "nothing";

// console.log(person["name"]);
///
///Array
let myArray = [1, 2, 3, 4, 5, "John", true];

console.log(myArray[1]);

//Array value change
myArray[1] = "Roy";
myArray[7] = "Dashin";
console.log(myArray[1]);

//object
let x = {
  districName: "rauthuhat",
  1: 22,
};

console.log(x[1]);
//object value change
x.districName = "Kanchanpur";
console.log(x["districName"]);

//function defination

function sum() {
  console.log("Happy Dashain");
}

//call or invoke
sum();

//local function
function sum(number) {
  console.log(number);
}

sum(3);

//return case
//parameter
function sum(number) {
  return number + 1;
}

console.log(sum(3));
//argument
//store in variable
function sum(number) {
  return number * number;
}
let value = sum(7);
console.log(value);

//2 argument
function sum(num1, num2) {
  return num1 + num2;
}
let value = sum(10, 12);
console.log(value);

///
function sum(name, surname) {
  console.log("Hello " + name + " " + surname);
}
sum("john", "doe");

//method
let person = {
  name: "john",
  age: "23",
  talk: function () {
    console.log("hello world");
  },
};

person.talk();
//console.log(person.talk());
