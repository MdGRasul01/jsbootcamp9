// const myName = "Md Golam Rasul";
// const myEmail = "grasul.dev@gmail.com";
// const myAge = 28;
// let isDeveloper = true;
// const goingToBeDesigner = null;

// //array:-
// const profile = ["golam", "rasul", 26, "Developer"];
// const fName = profile[0];
// const lName = profile[1];
// console.log(fName);
// console.log(fName + " " + lName);
// console.log(`my name is ${fName} ${lName}`);

// console.log(profile);

// //Retrive Data form Array:-
// console.log(profile[2]);

// // Update data in Array:
// profile[1] = "Mohammad";
// console.log(profile);

// //Add data in Array:
// profile[4] = true;
// console.log(profile);

// // length of array/ accessing last element dynamically
// console.log(profile.length);
// const lastEleIndex = profile.length - 1;
// console.log(profile[lastEleIndex]);
// console.log(profile[profile.length - 1]);

// how to create an empty arry
const arr = [];
arr[1] = "Md Golam Rasul";
arr[0] = "software Developer";
console.log(arr);

// another way declear new arry
const arr2 = new Array("mohammad", "Golam ");
console.log(arr2);
arr2[2] = "Rasul";
console.log(arr2);
arr2[3] = "software Developer";
console.log(arr2);

// how to build comlex array
const comlexArr = [1, "hello", true, null, ["nested", "array"]];
//we need to count from the left
console.log(comlexArr[4]);
console.log(comlexArr[4][1]);

const lastEleIndex = comlexArr.length - 1;
console.log(comlexArr[lastEleIndex][0]);
