// arithmatic operator
// const num1 = 2;
// const num2 = 3;

// console.log(num1 + num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);
//operands: the numbers which is associating with the operator

// short cut of arithmatic operator and operends
//let num = 10;
//num = num + 9;
//first short cut for above:
// num += 9;
// num -= 2;
//the second short cut when we add 1:
// num++; // its called post increment
// num--; // its called post decrement
// ++num; // its called pre increment
// --num; // its called pre decrement
// console.log(num);

// Implementation of post/pre increment
let num2 = 5;
console.log(num2++);
console.log(num2); // its increase after second output
console.log(++num2); // its increse on 1st output

// comparison operator return true or false based on condition
// >      greater than
// >=       greater than or equal to
// <        less than
// <=       less than or equal to
// ==       equal to
// ===      strict equal to
// !=        not equal to
// const x = 10;

// console.log(x > 5);
// console.log(x >= 12);
// console.log(x < 5);
// console.log(x <= 12);
// console.log(x == "10");
// console.log(x === "10");
// console.log(x !== 5);

// ==  vs ===
/*x == "5"; // only check the value
x === "5"; // only check the value but also check the type*/

// Logical and(&&), or(||), not(!) operator
// Logical and (&&) Or(||) operator create multiple condition

let y = 10;
// Logical AND returns true when every part is true otherwise false
console.log(y > 12 && y !== 15); // short circuit
// Logical OR(||) returns true when any part is true otherwise false
console.log(y > 8 || y !== 10); //short curcuit
//Logical NoT(!)
console.log(!(y > 8 || y !== 10)); // its called bang operator
