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
// const arr = [2, 3, 4, 5, 6, 7];
// console.log(arr.slice(0, 3));
// console.log(arr.slice(3)); //it will slice from number 3 to last of the element of array.
// console.log(arr.slice(-2));
// console.log(arr.slice(-4, -1));

//splice: it can mute the array.
//console.log(arr.splice(3)); // its splice the array which actually deleted
// console.log(arr);
// //console.log(arr.splice(2, 3, "Hello", "world", "Hi")); // even we can add data at the place of deleted data.
// console.log(arr);
// // array splice syntex:
// //arr.splice(start, deletCount, addedItem1, item2, ...)
// // adding element at any specific position through splice.
// console.log(arr.splice(3, 0, 5)); // after the 3rd element, zero as not deleting item zero, number 5 has been added after the 3rd element
// console.log(arr);

// Array method:
//concat
const arr = [2, 3, 5, 4, 5, 6, 7];
const arr2 = [11, 12, 13];
console.log(arr.concat(8, 9, 10));
console.log(arr.concat(arr2));
//join method
console.log(arr.join("")); //if we keep the empty string it will remove all kind of punctuations
console.log(arr.join("-")); // even we can add all kind of punctuation too.

//indexof: how to find the index inside from array
console.log(arr.indexOf(5)); // just we need to insert the array element to find out its index number
console.log(arr.indexOf(10)); // if the element not present in the array as element it wil show -1
//lastindexof:
console.log(arr.lastIndexOf(5)); //if any repeated element available in array it will show last element index number

// fill:
console.log(new Array(10).fill(1));
console.log(new Array(10).fill("MGR"));

//Reversing Array:
//checking data type
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof arr3);
console.log(Array.isArray(arr)); //if the variable is reallay an array then it will show you true
console.log(arr3.reverse()); // for sorting the array  we using the reverse method
