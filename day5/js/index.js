// switch(expression){
//     case : 1
//     //block of code
//     case: 2
//     //block of code
//     case : 3
//     //block of code

//     default:
//         //block of code

// }

// //
// const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// //for

// let fruits = ["apple", "banana", "graps"];

// let value = 0;

// for (let x in fruits) {
//   value = value + x;
// }
// console.log(value);

// //for in syntax
// for (variable in object) {
//     statement
//   }
// let fruits = ["apple", "banana", "graps"];

// let value = 0;

// for (let x in fruits) {
//   console.log(fruits[0]);
// }

//for in
// let number = {
//   one: 1,
//   two: 2,
//   three: 3,
// };

// let value = 0;

// for (let x in number) {
//   console.log(number[x]);
// }

// //for of
// let string = "sunday";
// let number = ["one", "two", "three"];
//  for (let x of string) {
//   console.log(x);
//  }

// //for continue condition
// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

//for break condition
for (let i = 1; i <= 15; i++) {
  if (i == 9) {
    break;
  }
  console.log(i);
}
