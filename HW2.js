// //Exercise:
// //1.When and why function is needed?
// //Ans:
// /*function used for avoid repeatetion,
//  we can recall the function to repeat our code*/

// //2.write down and recap the difference between console and Return -2
// /*ans: Return: when we use return on that time we can get our function
// output out side the function through console.log function.
// -Console.log: when we use console.log inside the function we can't take out function
// output out side the function, its just work inside the function on time.
//  */

// //3.write this function takes in two parameters and returns the difference of the two
// function printDiffrence(num1, num2) {
//   return num1 - num2;
// }
// console.log(printDiffrence(10, 8));

// //4. Write a function that takes a value as argument and return the type of value
// //ans:
// function printMyNumber(num) {
//   return typeof num;
// }
// console.log(printMyNumber(3));

// function printMyBool(isDeveloper2) {
//   const isDeveloper = true;
//   return typeof isDeveloper;
// }
// console.log(printMyBool("data analyst"));

// function printMyObj() {
//   const fullInfo = {
//     myName2: "MGR3",
//     isBusiness: true,
//   };
//   return typeof fullInfo;
// }
// console.log(printMyObj());

// function printMyNull() {
//   const itsMe = null;
//   return typeof itsMe;
// }
// console.log(printMyNull());

// function printMyString(profession3) {
//   const profession = "developer";
//   return typeof profession;
// }
// console.log(printMyString("data analyst"));

// function printMyArray() {
//   const myArray = ["name", 2, true];
//   return typeof myArray;
// }
// console.log(printMyArray());

// /*5.Write Down this function takes in one parameter
//  (a number from 1-7) and returns the day of the week
//  (1 is saturday, 2 is Sunday, 3 is Monday etc.).
//  If the number is less than 1 or greater than 7,
//  the function should return undefined; */

// const weekDAY = new Array(7);
// weekDAY[0] = "Sunday";
// weekDAY[1] = "Monday";
// weekDAY[2] = "Tuesday";
// weekDAY[3] = "Wednesday";
// weekDAY[4] = "Thursday";
// weekDAY[5] = "Friday";
// weekDAY[6] = "Saturday";

// function returnDay(x) {
//   return x < 1 || x > 7 ? undefined : weekDAY[x];
// }

// //Calling the function for result and printing it to the console
// //using console.log()
// console.log(returnDay(1));

// function lastElement(arr) {
//   return Array.isArray(arr) && arr.length ? arr[arr.length - 1] : undefined;
// }

// console.log(lastElement([3, 5, 7]));
// console.log(lastElement([1]));
// console.log(lastElement([]));

// Day- 06 all problem solutions:
//3-write this function takes in two parameters and returns the difference of the two
function getdifference(num1, num2) {
  return num1 - num2;
}
console.log(getdifference(10, 2));
console.log(getdifference(0, 2));

//4-: Write a function that takes a value as argument and return the type of value
function getTypeOfValue(value) {
  return typeof value;
}
console.log(getTypeOfValue(1));
console.log(getTypeOfValue(true));
console.log(getTypeOfValue({}));
console.log(getTypeOfValue(null));
console.log(getTypeOfValue("string"));
console.log(getTypeOfValue(["array"]));

//5.Write Down this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is saturday, 2 is Sunday, 3 is Monday etc.). If the number is less than 1 or greater than 7, the function should return undefined; Hint: you can use array to track down day of the week:)
function showDayOfWeek(day) {
  const arrday = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
  ];
  return arrday[day - 1];
}
console.log(showDayOfWeek(1));
console.log(showDayOfWeek(3));
console.log(showDayOfWeek(7));
console.log(showDayOfWeek(8));
console.log(showDayOfWeek(0));

/*6.Write down this function takes in one parameter (an array) and returns the last value in the array
It should return undefined if the array is empty.
N.B: count last element index dynamically :) */
function showLastElement(arr) {
  return arr[arr.length - 1];
}
console.log(showLastElement([1, 2, 3, 4, 5, 6]));
console.log(showLastElement([1, 2, 3, 4, 5, "Hello"]));
console.log(showLastElement([]));

/*7. write a function that return a object based on passed arguments 
Returned object key must be x , y, z in order and value will be passed arguments order*/

// Either of the below functions in correct
function procedure1(x, y, z) {
  return { x, y, z };
}
console.log(procedure1(1, 2, 3));

function procedure2(a, b, c) {
  return { x: a, y: b, z: c };
}
console.log(procedure2("a", "b", "c"));
