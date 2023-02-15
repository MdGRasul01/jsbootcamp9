//Object Method:
const profile = {
  lastName: "Rasul",
  email: "grasul.dev@gmail.com",
  personalTitle: "Mr.",
  fullName() {
    return this.personalTitle + " " + this.firstName + " " + this.lastName;
  },
};
// if the key available in object it will show true
console.log("lastName" in profile);
// if the key unavailable in object it will show false
console.log("firstName" in profile);
// even we can check it through function
if ("firstName" in profile) {
  console.log("Last name is a valid property");
} else {
  console.log("first name unavailabe");
}
// iterating object data through loop:
for (let prop in profile) {
  console.log(profile[prop]);
}

// how to transform an object as an array
const keys = Object.keys(profile);
console.log(keys);
// how to iterate all information through for of loop as an array
for (let elem of keys) {
  console.log(elem);
}
// how to iterate all values from object through loop as array
for (let elem of keys) {
  console.log(profile[elem]); //elem is a varible thats why we are using []
}
// accessing data through values:
const values = Object.values(profile);
console.log(values);
for (let value of values) {
  console.log(value);
}

//Object entries method:
const entries = Object.entries(profile);
console.log(entries);
for (let data of entries) {
  console.log(data);
}
// data destructuring:
for (let data of entries) {
  const [name, value] = data;
  console.log(data);
}
