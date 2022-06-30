// Array methods Part 1
/* It covers array methods like
    arr.push()
    arr.pop()
    arr.shift()
    arr.unshift()
    arr.splice()
    arr.slice()
    arr.concat()
    Symbol.isConcatSpreadable 
    arr.forEach()
*/

/* 
Add/Remove items array methods
    arr.push(...) --> adds items to the end.
    arr.pop(...) --> extracts an item from the end.
    arr.shift(...) --> extracts an item from the beginning.
    arr.unshift(...) --> add items to the beginning.
*/

let cars = ["Volvo", "BMW", "Jaguar", "Porshe"]
console.log(cars.pop()); // Porshe, pop() remove last index of an array
console.log(cars.shift()); // Volvo, shift() remove first index of an array
cars.unshift("Mercedas")
console.log(cars); // Mercedas, unshift() adds an item infront of the first index of an array
cars.push("Toyota") 
console.log(cars); // Toyota, push() adds an item last of the last index of an array

// splice 

/*
splice --> it is useful to delete, insert and replace elements in array.

Syntax: 

arr.splice(start[, deleteCount, elem1, ..., elemN])
start --> starting from the index
deleteCount --> removes elements count
elem1... elemN --> insert or replace elements

example:
let a = ["My", "value", "is", "Satheesh" ]
a.splice(1,1,"name");
console.log(a); // [ 'My', 'name', 'is', 'Satheesh' ]
*/

// we add 3, 4 between 2,5 get a output of 1,2,3,4,5.

let  arr = [1,2,5];
arr.splice(2,0,3,4); // first two value 
console.log(arr); 

// same output using negative index

let arr1 = [1,2,5];
arr1.splice(-1,0,3,4); // same output using negative index
console.log(arr1);

// remove elements in an array using splice

let fruits = ["apple", "mango", "potato", "pumpkin", "grapes", "watermelon"]
fruits.splice(2,2); // removed vegetables using splice using index position and no of elements need to be removed.
console.log(fruits);

// add elements without remove elements in an array using splice

let homeTown = [ "My", "is", "Pondicherry"];
homeTown.splice(1,0,"native"); // add native into the array without remove anything
console.log(homeTown);

// replace elements in an array using splice

let a = ["My", "value", "is", "Satheesh" ]
a.splice(1,1,"name"); // replace value with name in an array.
console.log(a); 

// Slice

let mobiles = ["I-phone","Redmi","Nokia","Samsung","Motorola","Realme","Vivo","Oppo"];
console.log(mobiles.slice(1,7)); // copy the items from start index to end index

// concat 

let arr2 = [1,2];

console.log(arr2.concat([3,4],[5,6])); // [1,2,3,4,5,6] --> add the value which we give 
console.log(arr2.concat(7)); // [1,2,7]

// Symbol.isConcatSpreadable 

let arrayLike = {
    0: "Hi",
    1: "Welcome to our course",
    [Symbol.isConcatSpreadable]: true, // --> it helpful to add a value in arrayLike without print of index 
    length : 2
};
console.log(arr2.concat(arrayLike)); // output --> [ 1, 2, 'Hi', 'Welcome to our course' ]
/* 
if we didnt used Symbol.isConcatSpreadable, then output will be 
--> [ 1, 2, { '0': 'Hi', '1': 'Welcome to our course', length: 2 } ] 
*/

// Iterate: forEach

/* 
    The arr.forEach method allows to run a function for every element of the array.
 */

    ["Hi","How are you", "Welcome to my course"].forEach((item,index,array) => {
        console.log(`${item} is at index ${index} in ${array}`);
    });




