//# Exercise - 1 (What will be the result and explain why?)
// const x = 10;
// const y = "a";
// console.log(y === "b" || x >= 10);  Result = true;
/* ans:because of using the (===) its shows the origin resul
another part we are using the (||) operator,
where we know that its if One part is true the result will be true */

//# Exercise - 2 (What will be the result and explain why?)-3

// const x = 3;
// const y = 8;
// console.log(!(x == "3" || x === y) && !(y != 8 && x <= y)); // result = false
/*ans: its first  part is fale and again we used the not for BY forece and 
in 2nd part is true because of  && operator and again we used the NOt operator
 for by force and finaly we used the && operator that made the result false */

//# Exercise - 3(Check the value ans show output whether it's truthy or falsy ).What are the truthy and falsy value in Javascript -3

console.log(Boolean("Hello World")); //true
console.log(!!"Hello World");

console.log(!!""); //false

console.log(!!null); //false

console.log(!!0) - //false
  console.log(!!1); //true

console.log(!!NaN); //false
/* empty string, zero, false,null,undefinied this five are falsy values*/

//# Exercise - 4 (What will be the result and explain why?) Explain short circuit -4

const str = "haha!";
const msg = "";
const isFunny = "false";

console.log(!(str || msg || isFunny));
/* ans: because of using the NOT operator at last time result is false*/
//# Exercise-5: when to use == vs === ?
/*ans: we should always need to use the === its alwasy search the both side but the 
 == always search the value side. even to avoid the operator precedence
 we should use the === */

//# Exercise-6: operands++ vs ++operands //2

// const a = 10;
// a++; // its assignment is to const its completly wrong, we should assign through let
// ++a;
//what are the differences between a++ and ++a
//ans:its assignment is to const its completly wrong, we should assign through let
let a = 10;
console.log(a++); // post increment
console.log(a++);
console.log(++a); // pre increment

//# Exercise-7: What will be the result? and explain why? //2

console.log(10 / (2 * 5));
//what to do if I want to get the result of 1 after calculation?

/*# Exercise-8: 
Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console //2

2 == "2" :true
2 === 2 :true
10 % 3 : 1
10 % 3 === 1 : true
true && false : false
false || true : true
true || false :true
 */
