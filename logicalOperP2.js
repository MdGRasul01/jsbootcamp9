//Truthy and Falsy value:
/* falsy values are: false, 0, " " empty quotation, null,
undefined, Nan */

//Truthy value: except falsy value all are Truthy values

// how to check Truthy and falsy values
//Boolean is a function which define the truthy and falsy values
// ex:
console.log(Boolean("MGR"));
//shortcut to define the truty and falsy values
console.log(!"MGR"); // first NOT operator making it nagetive
console.log(!!"MGR"); // but after adding the 2nd NOT operator showing the real result
//Ex:
console.log(!!"");
console.log(!!null);
console.log(!!" ");
console.log(!!undefined);

// short circuit
console.log(true && true);
console.log(true && false);
console.log(false && false); //short circuit
console.log(false || true);
console.log(true || true); //short circuit
console.log(true || false); // short circuit

// real life example:
const dynamicValue = true;
console.log(dynamicValue && "Hello");
console.log(dynamicValue || "Hello");

// if dynamicValue store false:
const dynamicValue1 = false;
console.log(dynamicValue1 && "Hello"); // short circuit
console.log(dynamicValue1 || "Hello");

/*Operator precedence: within the multiple operator, 
the operator work first and work one after another is called 
Operator precedence*/

console.log(2 + 3 * 10);
console.log((21 / 3) * 10);
// groping precedence
console.log((2 + 3) * 10);
console.log(21 / (3 * 10));

// few interesting case:
//coercion: how to avoid coercion:

/* 1. first of all we will use the === for comparison, need to avoid the  == .
 */
