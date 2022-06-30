// Variables
/*  
    Variables ---> store the data using a value temporarily.
*/

// Difference between Let, Var and Const

// var variable:
var bikes = 45; // var can be redeclare and value can be change. (global scope)
bikes = 84;
console.log(bikes);

// let variable:

let apples = 35; // In let, value of variable can change but cannot redeclare same let variable
apples =78;
console.log(apples);

// const variable:
const name = 'Satheesh'; // In const variable value cannot be change.
/* 
name = 'Karthick'; --> which shows error {TypeError: Assignment to constant variable}. 
Const variable cannot be change once declared. 
*/
/* 
var name = 'Raja'; --> which shows error (Identifier 'name' has already been declared). 
Because name variable already declared in const varible. 
*/
console.log(name);

// var declaration:

var laptop = 24; var laptop = 57; // we can declare same variable again and again and change value in var variable.
console.log(laptop)

// let declaration:
/* 
let age = 23; let age = 66; --> which shows error {SyntaxError: Identifier 'age' has already been declared}. 
let cannot declare same variable again. */

let age =32;
age = 21; // In let, value of variable can change but cannot redeclare same let variable
console.log(age) // output will be 21 not 32

// const declaration:

const person = "Satheesh"; // In const variable mostly used to declare constant or standard things. 
console.log(person);

// Variable declaration:
/*
let a = 4; var a = "John"; const a = true; --> which shows error {SyntaxError: Identifier 'a' has already been declared}.
Because we cannot declare same variable(a) with different variable keyword(let, var, const) */




