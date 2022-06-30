// String class

let name = "Satheesh";
console.log(name.length); // its shows length of the string. it count space between string char.
console.log(name.charAt(4)); // its shows a char at given index of the string

// toUpperCase, toLowerCase

let name1 = "rajaGanapathy";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1[0].toUpperCase());

// indexOf

let fruit = "I love fruits"
console.log(fruit.indexOf("I"));
console.log(fruit.indexOf('k'));
console.log(fruit.indexOf("fruits"));

// includes

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
let x = sentence.includes(word)
console.log(x);

// trim

const greeting = '   Hello world!   '; // remove white spaces, tab, no-break space, etc on both end of the string.

console.log(greeting); 
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

// Repeat

const chorus = 'Because I\'m happy. \n';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(7)}`);