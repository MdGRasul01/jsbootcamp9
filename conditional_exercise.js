//Exercise-1: Answer the following questions about this code block: (2)

const isLearning = true;
if (isLearning) {
  console.log("Keep Learning");
} else {
  console.log("I hope you are learning....");
}
//What should the above code console.log?
//ans: Keep Learning

//Exercise-2:Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
//ans: javascript itself justifying the truthy and falsy.
/*Exercise-3:
Use both if and switch statement (6)
====================================================
age: less then 10  
output: stay home under your mom supervision

age: more and equal then 10 and less then 15 
 output: Try to gain knowledge from outside of home

age: more then and equal to 15 and less than 18
output: prepare to cast vote

age: more or equal then 18 
 output: cast you vote

age: unknown
  output: You are out of range
 */
//ans:
const age = 10;
if (age < 10) {
  console.log("stay home underyour mom supervision");
} else if (age >= 10 && age < 15) {
  console.log("Try to gain knowledge from outside of home");
} else if (age >= 15 && age < 18) {
  console.log("prepare to cast vote");
} else if (age >= 18) {
  console.log("cast you vote");
} else {
  console.log("You are out of range");
}

switch (age) {
  case age < 10:
    console.log("stay home under your mom supervision");
    break;
  case age >= 10 && age < 15:
    console.log("Try to gain knowledge from outside of home");
    break;
  case age >= 15 && age < 18:
    console.log("prepare to cast vote");
    break;
  case age >= 18:
    console.log("cast you vote");
    break;
  case age === "un Known":
    console.log("You are out of range");
}

//Exercise-4:

let var1;
const var2 = "";
const var3 = 1;
const secretMessage = "secret!";

if (var1) {
  console.log("first");
} else if (var1 || var2) {
  console.log("second");
} else if (var1 || var3) {
  console.log("third");
} else {
  console.log("fourth");
}
//What should the above code console.log? Why?
/*ans: third, var1 is undefined which is false and var3 is true, 
and compairing with OR operator which is providing true */
//What is the value of var1 when it is initialized?
//ans:undefined
//Is the value of var1 a "truthy" value? Why?
/* ans: its a falsy value, becaue its undefined */
//Is the value of var2 a "truthy" value? Why?
//ans: its falsy value, becasue its a empty string
//Is the value of var3 a "truthy" value? Why?
//ans: its truthy value, its a number.

/*Exercise-5:
Choose the correct conditional (ternary) operator to console  "Too young" if age is less than 18, otherwise alert "Old enough"
 */
const result = age < 18 ? "Too young" : "Old enough";
console.log(result);

//Exercise-6:When to Use if else vs ternary vs switch?
/*if else: more than 2 condition we can use if else
vs
ternary: for simple condition maximum 2 condition we can use it
vs
switch: for multiple or maximum condition we can use it */
