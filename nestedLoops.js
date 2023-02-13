// Nested Loops:
/*nested loop: for every step of the parent loop inner loop will complete
 */
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++){
//         console.log(j)
//     }
//   console.log(i);
// };
// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }

// how to use string in loops
// for Loops for string or iterating string
// const str = "MdGolamRasul";
// for (let i = 0; i < str.length; i++) {
//   console.log(i);
//   console.log(str[i]);
// }
// while Loop: iterating string
// const str = "MdGolamRasul";
// let i = 0;
// while (i < str.length) {
//   console.log(i);
//   console.log(str[i]);
//   i++;
// }
// Looping array and object:-
//1.Looping array:=
// const profile = ["Rasul", 28, "Developer"];
// for (let i = 0; i < profile.length; i++) {
//   console.log(i);
//   console.log(profile[i]);
// }
//2. Looping with Object:- access object key/property using FOR IN Loops
// Looping with object:
// const profile = {
//   name: "Md Golam Rasul",
//   age: 28,
//   profession: "Developer",
// };
// console.log(profile["name"]);

// for (let propertyOrKey in profile) {
//   console.log(profile[propertyOrKey]);
//   console.log(propertyOrKey);
// }

// for of loop vs for in loop
// for of loop: used for array and string recommended by MDN
// array looping with FOR OF.
// const profile = ["MGR", 28, "Developer"];
// for (let element of profile) {
//   console.log(element);
// }
// // string looping with FOR OF.
// let randStr = "MdGolamRasul";
// for (let char of randStr) {
//   console.log(char);
// }

//summary:
/*
1.plain for loop can use any where
2.plain while loop can use anywhere
3.for of loop used for array and string
4. for in loop used for Object.
5. for in loop would be used for array and string but 
its not recommended as its not ensure the order.
 */

// Loop inside Function:= used hugely inside the function.
// const names = ["Md", "Golam", "Rasul"];
// function printNames() {
//   /*bad practice.
//                              not recommended */
//   for (let name of names) {
//     console.log(`${name}!`);
//   }
// }
// printNames();

// recommended for FOR OF loop inside the function.
const names = ["md", "golam", "rasul"];
function printNames(receivedNames) {
  for (let name of receivedNames) {
    console.log(`${name}!`);
  }
}
printNames(names);
