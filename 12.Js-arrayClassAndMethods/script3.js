// Array Methods

// Split and Join

// Split

/*
    Split --> The split() method splits a string into an array of substrings.
*/

let text = 'Satheesh, Karthick, Dheena';
const myArray = text.split(" ");
for (let text of myArray) {
    console.log( `A message to ${text}.` ); // A message to Bilbo  (and other names)
  }

// Join

/* 
  Join --> The join() method returns an array as a string.
*/
let arr = ["sivaji", "M.G.R", "Gemini"]
  let str = arr.join(';');

  console.log(str);

// reduce/reduceRight

/*
  reduce/reduceRight --> The function is applied to all array elements one after another and
   “carries on” its result to the next call.
*/

/* 
  Syntax:

  let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

*/

let arr2 = [0, 2, 3, 4, 5];

let result = arr2.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

/* reduce method syntax first assume value as 0 and current value in the index of [0] is 1. so 0+1 = 1.
  then sum value changed to 1 and current value moved to next index is [1] value is 2. so 1+2 = 3.
  then sum value changed to 3 and current value moved to next index is [2] value is 3. so 3+3 = 6.
  then sum value changed to 6 and current value moved to next index is [3] value is 4. so 6+4 = 10.
  then sum value changed to 10 and current value moved to next index is [4] value is 5. so 10+5 = 15.
/*
sum	current	result
the first call	0	1	1
the second call	1	2	3
the third call	3	3	6
the fourth call	6	4	10
the fifth call	10	5	15
*/
// Array.isArray 

/*
    Array.isArray --> It returns true if the value is an array, and false otherwise.
*/

let x = [1,2,34,45,98]
let y = {
    name: "satheesh",
    qualification : "B.C.A"
};
console.log(Array.isArray(x));
console.log(Array.isArray(y));

// Some

/* 
  Some -->  The some() method tests whether at least one element in the array 
            passes the test implemented by the provided function.
*/

const b = [1,9,3,4,5]

let even = (element) => element % 2 === 0;

console.log(b.some(even)); // here 1 value(4) is gives reminder 0. so condition is true. 

// condition is satisfy atleast one element, then array some returns true.

// every 

/* 
  every --> The every() method tests whether all elements in the array pass the test 
  implemented by the provided function. It returns a Boolean value.
*/

const c = [2,4,6,8,10]

even = (element) => element % 2 === 0;

console.log(c.every(even)); // all elements is give reminder true. so condition is true.

// All element must satisfy the condition, then array every returns true.

// fill()

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

// Recursive function

/* 
  Function call itself again and again until it satisfy the base condition itself 
*/

// program to count down numbers to 1
function countDown(number) {

  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
      countDown(newNumber);
  }
}

countDown(10);

// Codecademy

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
 }, "C");

 console.log(word)

// Choose a method that will return a new array
 const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
 nums.includes(num => num < 0);