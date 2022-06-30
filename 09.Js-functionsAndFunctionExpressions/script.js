// Function 
/* 
    A JavaScript function is a block of code designed to perform a particular task.
    A JavaScript function is executed when "something" invokes it (calls it).
*/

function welcomeNote () {
    console.log("Hello world");
}
welcomeNote();
welcomeNote();
welcomeNote(); // Once function created, we can call the function 'n' number of times.

// Passing parameters in the function

function person(name) // Parameter
{ 
    console.log('Welcome to my course ' + name + '.')
}
person('David'); // Argument

// outer variable scenerio

let bikeName; // Variable declared outside the function 
function myfunction() {
bikeName = "Ducatti"; // Variable value declared inside the function

}
console.log(bikeName); // output is undefined bcoz variable declared outside and variable value declared inside

// Outer variable

let carName;
carName="Mercedes";
function myfunction() {
    carName = "Volvo";
}
console.log(carName) // output is Mercedes not volvo bcoz its outer variable. it execute value outside of the function

// Local Variable

function mobileBrand() {
let mobileName = "Redmi";
console.log(mobileName);
}
mobileBrand();

// Difference between local variable and outer variable

// Example 1

let userName = 'Chris';

function showMessage() {
   let userName = "Gayle"; // declare variable using let, its a local varible

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName );

showMessage();

console.log( userName );

// Example 2

let user = 'John';

function showIdea() {
   user = "Bob"; // define variable, it will consider a global variable ( no let here )

  let idea = 'Hello, ' + user;
  console.log(idea);
}

console.log( user );

showIdea();

console.log( user );

// Function expression

// variable is declared and then function is created is called function expression.

let x = function(y) { // In function expression, Function name can be omitted, variable name(x) can be consider as function name.
    return y * y;
 }; 



// Recursive function

function countDown(number) { // 10 
    console.log(number); // print 10

    let newNumber = number - 1; // 10 -1 = 9

    if (newNumber > 0) { // 9 > 0 if its true it print the value as 9 then continue same process until condition turns to false.
        countDown(newNumber);
    }
}
countDown(10);

/* 
countDown(4) prints 4 and calls countDown(3)
countDown(3) prints 3 and calls countDown(2)
countDown(2) prints 2 and calls countDown(1)
countDown(1) prints 1 and calls countDown(0)
*/