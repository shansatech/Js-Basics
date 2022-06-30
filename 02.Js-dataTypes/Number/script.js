/* 
To write numbers with many zeroes:

Append "e" with the zeroes count to the number. Like: 123e6 is the same as 123 with 6 zeroes 123000000.
A negative number after "e" causes the number to be divided by 1 with given zeroes. E.g. 123e-6 means 0.000123 (123 millionths).
For different numeral systems:

Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems.
parseInt(str, base) parses the string str into an integer in numeral system with given base, 2 ≤ base ≤ 36.
num.toString(base) converts a number to a string in the numeral system with the given base.
For converting values like 12pt and 100px to a number:

Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.
For fractions:

Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
Make sure to remember there’s a loss of precision when working with fractions.
*/

// More ways to write a number

let billion = 1000000000;
billion = 2e9;
console.log(billion);

// toString(base) 

let num = 255;

console.log(num.toString(16)); 
console.log(num.toString(2));

// toFixed

let sum = 0.1+0.2;
console.log(sum); // 0.30000000000000004
console.log(sum.toFixed(2)); // 0.30


// Math functions

// Math.random

console.log(Math.random());
let a = 24.67;
console.log(Math.random(a));

// Math max or min 

console.log(Math.max(3,5,7,0.45, -11, 67, 9.9, 43));
console.log(Math.min(3,5,7,0.45, -11, 67, 9.9, 43));

// Math pow

console.log(Math.pow(3,5));
console.log(3*3*3*3*3);

// isFinite and isNaN

// isNaN(value) converts its argument to a number and then tests it for being NaN:

console.log(isNaN(234)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(23.34)); // false
console.log(isNaN("Leesha")); // true

/* 
isFinite(value) converts its argument to a number and returns true 
if it’s a regular number, not NaN/Infinity/-Infinity: 
*/

console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false
console.log( isFinite(Infinity) ); // false

// parseInt and parseFloat

/*
   parseInt is for converting a non integer number(54$) to an int(54) and 
   parseFloat is for converting a non float (with out a decimal) to a float (with a decimal)
   If the first character cannot be converted, NaN is returned.
*/

console.log(parseInt("44.89"));
console.log(parseFloat("69.51em"));

// Math Rounding

console.log(Math.floor(63.876));

// Difference between round and ceil in math function

console.log(Math.round(77.42)); // 77

console.log(Math.round(77.72)); // 77

console.log(Math.ceil(28.9977)); // 29

console.log(Math.ceil(28.3977)); // 29