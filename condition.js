// Conditionals:
/* - Another core building Block of any programming Language
- Conditional statement are used to perform different actions based on different condition
*/
// const studyLevel = "average";
// if (studyLevel === "hard") {
//   console.log("you will pass");
// } else {
//   console.log("you will fail");
// }

// const studyLevel = "average";
// if (studyLevel === "hard") {
//   console.log("you will pass");
// } else if (studyLevel === "average") {
//   console.log("you will make an average result");
// } else {
//   console.log("you will fail");
// }
// javascript itselt make truthy and falsy value.
//Ex:
// const age = 18;
// const canVote = age === 18;
// console.log(canVote);
// if (canVote) {
//   // javascript itselt converting the age as truthy or falsy values
//   console.log("you can vote");
// } else {
//   console.log("you cant vote");
// }

//Switch
/* if you have lot more conditions to check and many 
alternative blocks of code to be executed use switch */

// const studLevel = "average";
// switch (
//   studLevel //expression
// ) {
//   case "hard":
//     console.log("you will pass");
//     break;
//   case "average":
//     console.log("you will make an average result");
//     break;
//   default:
//     console.log("you will fail");
// }

// ternary operator:
// condition ? "pass" : "fail"
// const studLev = "avg";
// const result = studLev === "avg" ? "you will make a average result" : "you will fail"
// console.log(result)

const studLev = "notOptimum";
const result =
  studLev === "avg" ? "you will make a average result" : "you will fail";
console.log(result);
// for simple condition we will use ternary operator, Ex: maximum 2 condition
