// Object deep Drive.
const profile = {
  firstName: "Rasul",
  lastName: "Mokabber",
  email: "grasul.dev@gmail.com",
  fullName: function () {
    return profile.firstName + " " + profile.lastName;
  },
};
//This 2 way we can retrive the object
console.log(profile.firstName);
//or
console.log(profile["lastName"]);
// the way we can retrive the function from object
console.log(profile.fullName());
