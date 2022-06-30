// Array methods Part 2

/* It covers array methods like
    indexOf/lastIndexOf
    find and findIndex
    filter
    map
    sort and reverse
*/

// indexOf/lastIndexOf and includes

let arr = [false, 1, 0, ];

console.log( arr.indexOf(0) ); // where 0 is located, index 2 
console.log( arr.indexOf(false) ); // where is false located, index 0
console.log( arr.indexOf(null) ); // where null is located, index -1

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

console.log( arr.includes(2) ); 

// find and findIndex

/* 
Syntax
    let results = arr.find(function(item, index, array) {
        // if true item is pushed to results and the iteration continues
        // returns empty array if nothing found
});
*/

const ages = [12,34,13,7,89,26,71,33,11,5,45]

console.log(ages.findIndex(checkAge)) // its return the index of the first element[1] in an array that passes a test
// console.log(ages.find(checkAge)) // its return the value of the first element(34) in an array that passes a test
// console.log(ages.filter(checkAge)) its return all the element that passes a test

function checkAge(age) {
    return age > 18;  
}

// filter

// The find method looks for a single (first) element that makes the function return true.
// If there may be many, we can use arr.filter(fn).

/*
Syntax
    let results = arr.filter(function(item, index, array) {
        // if true item is pushed to results and the iteration continues
        // returns empty array if nothing found
  });
  */

  console.log(ages.filter(checkAge)) 

  let person = [
      {id:1, name: "sarath"},
      {id:2, name: "Rajesh"},
      {id:3, name: "Arjun"}
  ];

  let somePersons = person.filter(item => item.id < 3);
  console.log(somePersons);

  // Examples

  const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(numbers => numbers<250)

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => word.length>7)

console.log(longFavoriteWords)

// map

let persons = [
    {firstName : "Saravana", lastName : "Kumar"},
    {firstName : "Abdul", lastName : "Rahman"},
    {firstName : "Rama", lastName : "Lakshmi"}
];

console.log(persons.map(getFullName));

function getFullName(item) {
    return[item.firstName,item.lastName].join(" ");
}

// sort and reverse

let fruits = ["watermelon", "banana", "apple", "pineapple"]
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

// if we sort 1,11,2,111,3, it give output like this [ 1, 121, 19, 3, 9 ] 
// To avoid this type of sorting, write function like below. 

let value = [1,19,9,121,3]
console.log(value.sort()); // [ 1, 121, 19, 3, 9 ] 
value.sort(function(a,b){return a-b}); // function 
console.log(value); // [ 1, 3, 9, 19, 121 ]


