// Built In Propertise and method
// Array iteration
// adding element  at the end of array
// const arr = [2, 3, 4];
// arr.push(5);
// console.log(arr);
// remove element from the end of the array
// arr.pop(); //last element will remove autometically
//adding element at the beginning of the array
// arr.unshift(1);
// console.log(arr);
//remove element from the beginning of the array
// arr.shift(); // that will remove the 1st element from the array
// console.log(arr);
//how to find out the last element of the array
// console.log(arr[arr.length - 1]);

// slice vs splice
// slice: its cant mute the array
const arr = [2, 3, 4, 5, 6, 7];
console.log(arr.slice(0, 3));
console.log(arr.slice(3)); //it will slice from number 3 to last of the element of array.
console.log(arr.slice(-2));
console.log(arr.slice(-4, -1));

//splice: it can mute the array.
//console.log(arr.splice(3)); // its splice the array which actually deleted
console.log(arr);
console.log(arr.splice(2, 3));
console.log(arr);
