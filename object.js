// Object
const profileObj = {
  firstName: "Mohammad",
  middleName: "Golam",
  lastName: "Rasul",
  age: 28,
  profession: "software Developer",
};
// how to accessing object
console.log(profileObj["firstName"]);
console.log(profileObj["age"]);
// a common way to accessing data from Object
console.log(profileObj.firstName);
console.log(profileObj.lastName);

//update data in object
profileObj["profession"] = "Data analyst";
//another way to update data on Object
profileObj.firstName = "MD";
console.log(profileObj);

// adding data on Object
profileObj.learner = true;
// another way adding data on Object
profileObj["program"] = "javaScript";
console.log(profileObj);

// how to create empty Object
const profile = {};
// another way to create empty Objcet
const profile2 = new Object();

// how to create complex Object
const random_collection = {
  name: "Md Golam Rasul",
  age: 28,
  isDeveloper: true,
  hobbies: ["traveling", "Learning", "Games"],
  obj: {
    key1: "value1",
  },
};

// accessing data from complex Object
console.log(random_collection.hobbies[2]);
console.log(random_collection.obj);
console.log(random_collection.obj.key1);

// how to add data on empty Object
const initObj = {};
initObj.something = "value";
console.log(initObj);

// another way to add data on empty object
// const initObj1 = new Object({ name: "Golam Rasul", age1: 28 });
// console.log(initObj1);
const initObj1 = new Object();
initObj1.something2 = "values2";
console.log(initObj1);
