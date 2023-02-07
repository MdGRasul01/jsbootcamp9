// what are the complex data type in javascript.
// ans: The complex data type of Javascript are array, Object and Function.
//when and why to use array vs object
/*ans: 1. array are used to store multiple values including multiple array
       2. Object are used to store discriptive  key and value pairs.
       3. Object are also used to store complex data such as:
       array, function, object etc. */

// create a object profile
const profile = {
  firstName: "Md GOlam",
  lastName: "Rasul",
  occupation: "Business",
};
//accessing data through dot notation
console.log(profile.firstName);
//accessing data through bracket
console.log(profile["lastName"]);

// adding key Hobbey on object
profile.hobbey = "swimming";
console.log(profile);

// remove the occupation key and value
delete profile.occupation;
console.log(profile);

//when to use dot notation and bracket to access data
// ans: regularly useing the dot notation to accessing data but in special case we use the bracket notation to access the data

// Multiple ways to define array and object
//regular way to define array and object
const arr1 = [1, 2, 3];
const obj1 = {
  num1: 1,
  num2: 2,
};
// empty array and objcet
const obj2 = new Object();
const arr2 = new Array();

const userObj = {
  name: "samim",
  address: {
    city: "Dhaka",
    university: {
      name: "Dhaka University",
    },
  },
};
console.log(userObj.address.university.name);

const userArr = ["samim", ["Dhaka", ["Dhaka university"]]];
console.log(userArr[1][1]);
