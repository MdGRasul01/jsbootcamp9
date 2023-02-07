//Basic of function
// function used for avoid repeatetion
// we can recall the function to repeat our code

function printProfile() {
  console.log("I am Md Golam Rasul");
  console.log("I am 28");
  console.log("I am a Data analyst");
  console.log("I love learning");
}

printProfile();

function multiply() {
  console.log(10 * 5);
}

multiply();

function square(num) {
  console.log(num);
  console.log(num * num);
}

square(10);

function area(length, width) {
  //lenght and width are called parameters
  console.log(length + width);
}
// 10, 25 are called arguments
area(10, 25);

function greet(person1, person2, person3) {
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}

greet("omar", "Umar", "Muktadir");

// how to pass the defalt parameter
function multiply1(num1, num2, num3 = 10) {
  console.log(num1 * num2 * num3);
}

multiply1(4, 5, 6);
multiply1(5, 6, 7);
multiply1(1, 2); // 10 is working as defalt parameter

// return keyword
// to get the result outside of the function we need to return the function

function multiply2(num4, num5, num6 = 5) {
  // the way use the return
  return num4 * num5 * num6;
}
// even we can take this function as variable
const result = multiply2(5, 2, 8);
// in that case we will use the console.log function out side the function
console.log(result * 10);
console.log(multiply2(5, 2));
// important note: return function can used only one time inside the function
// it is advise that return should be come at last of the function

function printProfile1() {
  const str = `Hello, I am Md Golam Rasul,
    i am a data analyst, i love learning`;
  return str;
}
const profie = printProfile1();
console.log(profie);

// personal profile through function
function printPersonalProfile(name, age, Profession, hobby) {
  const profile = `Hello, i am ${name},
    i am ${age}, by profession i am a ${Profession},
    I love to ${hobby}`;

  return profile;
}

const fullProfile = printPersonalProfile(
  "Md Golam Rasul",
  28,
  "Data analyst",
  "swimming"
);
console.log(fullProfile);

// Return is Tricky sometimes
// after the return function we must use the semicolon
// return should be on single line

// functions and method are almost same,
// function inside object are called method
//Ex:-
const profile2 = {
  name1: "MGR",
  age1: 28,
  //   fullName: function printFullName() {
  //     return profile2.name1 + "-" + profile2.age1;
  //   },
  fullName() {
    return profile2.name1 + "-" + profile2.age1;
  }, // commonly use function in this way inside the object
};

console.log(profile2.name1);
console.log(profile2.age1);
console.log(profile2.fullName());

const weekDAY = new Array(7);
weekDAY[0] = "Sunday";
weekDAY[1] = "Monday";
weekDAY[2] = "Tuesday";
weekDAY[3] = "Wednesday";
weekDAY[4] = "Thursday";
weekDAY[5] = "Friday";
weekDAY[6] = "Saturday";

function returnDay(x) {
  return x < 1 || x > 7 ? null : weekDAY[x];
}

//Calling the function for result and printing it to the console
//using console.log()
console.log(returnDay(2));
