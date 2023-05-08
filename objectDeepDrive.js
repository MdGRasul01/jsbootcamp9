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

// console.log(this); // "this" outside the function means the window object which is related to browser.

// const fname = "Rasul";
// function greet() {
//   return `hi${fname}`;
// }
// its called the plain function call means window object
//with extra things (object reference) this will indicate the object just left of the .[]
// greet("Rasul");

// const profile = {
//   firstName: "Rasul",
//   lastName: "Mokabber",
//   email: "grasul.dev@gmail.com",
//   fullName() {
//     console.log(this);
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(profile.fullName());

// new function(): called constructor functions where "this" indicates an empty

// Implicit this binding means where javascrit fixed the function regarding the "this"
//Explicit this binding means where we fixed this is our own.
// In 3- ways we can use this method 1. call, 2. bind, 3. apply.

// function greet(name) {
//   console.log(this); // window object
//   //return `Hi ${name}`;
//   return `${this} ${name}`;
// }

//console.log(greet("Rasul"));
//console.log(greet.call("Hi", "Rasul"));

// For apply we need to use array or []
// console.log(greet.apply("Hi", ["Rasul"]));

// bind:
// const boundGreet = greet.bind("HI", "Rasul");
// console.log(boundGreet());

//practice for this method: call, apply and bind

// const profile = {
//   firstName: "Rasul",
//   lastName: "Mokabber",
//   email: "grasul.dev@gmail.com",
//   personTitle: "Mr.",
//   fullName() {
//     console.log(this);
//     return function () {
//       console.log(this);
//       return this.personTitle + " " + this.firstName + " " + this.lastName;
//     };
//   },
// };
// const inner = profile.fullName();
// console.log(inner.call(profile));

// const golamRasulInfo = {
//   firstName: "Rasul",
//   lastName: " Mokabber",
//   email: "grasul.dev@gmail.com",
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(golamRasulInfo.fullName());

// function printProfile() {
//   return {
//     firstName: "Rasul",
//     lastName: " Mokabber",
//     email: "grasul.dev@gmail.com",
//     fullName() {
//       return this.firstName + " " + this.lastName;
//     },
//   };
// }
// console.log(printProfile());

// factory function to avoid repetation
function printProfile(firstName, lastName, email) {
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    fullName() {
      return this.firstName + " " + this.lastName + " " + this.email;
    },
  };
}
console.log(printProfile("Mr.Golam", "Rasul Mokabber", "grasul.dev@gmail.com"));
