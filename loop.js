//Loop: Dealing with repeated Things!
// Loop repeat things in specific  time.
/*We want to keep our code as Dry as possible.
it saves us a lot of time and makes our code cleaner
 */
// principle of programming:DRY(Dont repeat your self)

// In programming there are 2 main loop in core programmin
// *while loop and For loop

// While Loop:
// While Loop repeat code while the condition is true.
// printing sentence 7 times with help of a loop
// let count = 0;
// while (count < 7);
// {
//   console.log(`I love Bangladesh ${count + 1} times`);
//   count++;
// }

//Infinite Loops:
/*Loop is always running as condition remaining 
true and not becoming false.
 */

// while loop practice
// let count = 0;
// while (count < 7) {
//   const realTimeCount = count + 1;
//   console.log(count); // if you want to check the count.
//   console.log(
//     `I love Bangladesh ${realTimeCount} ${realTimeCount < 2 ? "time" : "times"}`
//   );
//   count++;
// }

// Do While Loop: rearly used by the programmer.
// a variation of while loop.
// let count = 0;
// do {
//   console.log(count);
//   count++;
// } while (count < 10);
// Do While Loop
// do{
//   console.log(count);
//   count++   // even though the logica is false but first part of code is running
// }while( count < 0)
// //vs
// while(count < 0){ //logic is false thats why while loop not running.
//   console.log(count)
//   count++
// }

// For Loops:
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// increment
// reverse loop
// increment example:
// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }
// increment with while loop
// let i = 0;
// while(i < 10){
//   console.log(i)
//   i += 2
// }
// reverse loop example:
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// reverse loop with while loop:
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
//Break and continue:-
//(important content)
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue; // process of continue where we can escape any num or situation
//   }
//   console.log(i);
// }
// Break example:
for (let i = 0; i < 10; i++) {
  // if (i === 5) {
  //   continue; // process of continue where we can escape any num or situation
  // }
  if (i === 5) {
    break; // process of break where we can stop our loop
  }
  console.log(i);
}
