//# Exercise-1(what will be the output and explain)-2

// let num = 1;

// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }
/* out put is 1, 3, 5, 7, 9. it has been incresed by 2, variable set 1*/

//# Exercise-2(what will be the output and explain)-2

// let num = 1

// while(num <= 20) {
// if(num % 4 === 0){
// console.log(num);
// }
// num++;
// }
/*output is 4, 8, 12, 16, 20 , 
in function modulus has set strict equal to 0 */

//Exercise-3(what will be the output and why?)-2

// let num = 100;
// while (num < 150) {
//   console.log(num + 1);
//   num--;
// }
//ans: this is an infinite loop because the num < 150.

// Exercise-4(what will be the output? it May require if condition inside loop)-4

/*Print out all even numbers between 1 and 100. 
Write two solutions: one with a while loop and one with a for loop.*/
// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }

// for (let j = 0; j <= 100; j += 2) {
//   console.log(j);
// }

// let num = 1;
// while (num <= 100) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// for (let num1 = 2; num1 <= 100; num1 += 2) {
//   console.log(num1);
// }

//Exercise-5(Run loop and add $ in each repetition)
// function repeat(num) {
//   let output = "";
//   for (let i = 0; i < num; i++) {
//     output += "$";
//     console.log(output);
//   }
// }
// repeat(3);
// repeat(5);

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

function myFunction(a, b) {
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (b.substring(i, i + a.length) === a) {
      count++;
    }
  }
  return count - 3;
}
