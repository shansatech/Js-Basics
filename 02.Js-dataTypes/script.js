// Data Types 
/* 
    Data Types --> categorize the data 
*/

let age = 27; 
console.log(age);
console.log(typeof age); // Number

let name = "Satheesh";
console.log(name);
console.log(typeof name); // String

let isRequired = true;
console.log(isRequired);
console.log(typeof isRequired); // Boolean

let fruits = ['apples', 'mango', 'orange', 'pineapple'] // Array
console.log(fruits);
console.log(typeof fruits); // array is consider as object by typeof operator

let person = {
    personName: "Shiva",
    personAge: 32,
    isAdult : true
}
console.log(person);
console.log(typeof person); // object

let x; // declare a variable and value is not assigned.
console.log(x);
console.log(typeof x); // undefined

let value = ""; // assign an empty value
console.log(value);
console.log(typeof value); // empty value consider as a string

// Js is dynamic language
// Once declare a variable, we can change variable value dynamically. 

let firstName = "Raju";
firstName = 5;
firstName = true;
console.log(firstName); // output is true. it is called dynamic typing

// Numbers 
// Js has only one type of number

let decimal = 34.78;
let float = 12e54;
console.log(decimal);
console.log(typeof decimal); // number
console.log(float);
console.log(typeof float); // number

// Adding string & numbers gives different results

let result = "Kavya" + 5 + 3; // Both number and string consider as a string. eg.Kavya53
let total = 4 + 8 + "Ravi"; // add number value and combine string. eg.12Ravi 
let average = 1 + 6 + "Divya" + 4 + 7; // See the difference here. eg.7Divya47
console.log(result);
console.log(total);
console.log(average);





