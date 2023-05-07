// Object deep Drive.
// const profile = {
//   firstName: "Rasul",
//   lastName: "Mokabber",
//   email: "grasul.dev@gmail.com",
//   fullName: function () {
//     return profile.firstName + " " + profile.lastName;
//   },
// };
//This 2 way we can retrive the object
// console.log(profile.firstName);
//or
// console.log(profile["lastName"]);
// the way we can retrive the function from object
// console.log(profile.fullName());

// how to use "this":
// const profile = {
//   firstName: "Rasul",
//   lastName: "Mokabber",
//   email: "grasul.dev@gmail.com",
//   //modern day how to use the fuction on object
//   fullName() {
//     //how to use "this"
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(profile.fullName());

// //Dynamically accessed properties
// const myVar = "email";
// console.log(profile.myVar); // which is not the way of retrive data from object
// // the way we can access
// console.log(profile[myVar]);

// // the way we can retrive data from object through for loop
// // for object we need to use the "for in loop"
// for (let key in profile) {
//   console.log(profile[key]);
// }

//Introducing "this"
// Inside function
//Out side function

console.log(this); // "this" outside the function means the window object which is related to browser.

const fname = "Rasul";
function greet() {
  return `hi${fname}`;
}
// its called the plain function call means window object
//with extra things (object reference) this will indicate the object just left of the .[]
greet("Rasul");

const profile = {
  firstName: "Rasul",
  lastName: "Mokabber",
  email: "grasul.dev@gmail.com",
  fullName() {
    console.log(this);
    return this.firstName + " " + this.lastName;
  },
};

console.log(profile.fullName());

// new function(): called constructor functions where "this" indicates an empty
