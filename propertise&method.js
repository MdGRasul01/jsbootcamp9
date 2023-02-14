// propertise and method:
//Javascript buit in properties and methods:
const str = "Hello There";
console.log(str.length); // length built in function, used for finding the string length
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));
console.log(str.trim()); // clearing the space starting of the string if availabel.
const trimedStr = str.trim();
console.log(trimedStr.length);
console.log(str.trimStart()); //if need to trim from start of the string, need to use trimStart
console.log(str.trimEnd()); //if need to trim from end of the string, need to use trimEnd
console.log(str.includes("Hell")); //if need to find out any specific part from string.
console.log(str.startsWith("There")); //using find the specific word in string from starting
console.log(str.endsWith("There")); // using find the specific word in string from end.

// slice and substring
// slice:
console.log(str.slice(0, 5));
console.log(str.slice(4));
console.log(str.slice(-5));

// substring:
console.log(str.substring(0, 5));
console.log(str.substring(-6, 8));
console.log(str.substring(6, 2));

// string Method:
//split
console.log(str.split(""));
console.log(str.split(" "));
//concat
console.log(str.concat(" i", " am Rasul"));
//charAt
console.log(str.charAt(6));
//CharCodeAt(to find the sequence of character)
console.log(str.charCodeAt(4)); // to find out the ascII value used the charCodeAt

//search
console.log(str.search("e"));

//replace:
console.log(str.replace("Hello", "Hi"));

//pad
console.log(str.padStart(15, "*"));
console.log(str.padEnd(15, "*"));

// working on number:
console.log(typeof 10);
console.log(typeof -10);
console.log(typeof -10.4545);
// converting from string to number
console.log(Number("10"));
console.log(Number("fjhsfh"));
console.log(typeof NaN);
console.log(parseInt("5454gdf"));
console.log(parseInt("5454", 8));
console.log(parseFloat("46545.454"));
//maximum/minimum value accepted by javascript
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//If want to hold any specific position after the point(.)we can use as per the below:
const num = 454.5465465;
console.log(num.toFixed(3)); // after the poit we have fixed 3 digit.

//NaN:
console.log(NaN === NaN);
//isNan:
console.log(isNaN("MGR"));
console.log(isNaN(10));
console.log(isNaN(-1));
console.log(isNaN(true));
console.log(isNaN(NaN));
console.log(isNaN("5465fds"));

//Number .isNan return true if value is NaN
console.log(NaN !== NaN);
console.log(1 != 1);

//consloe.log(Number(num) !== Number(num))
console.log(Number.isNaN(Number("false")));
const num1 = 343;
console.log(Number(num1) !== Number(num1));
const num2 = "343sdf";
console.log(Number(num2) !== Number(num2));
