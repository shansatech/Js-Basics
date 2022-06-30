// Conditional and branching statement
/*
    Conditional and branching --> check the condition and execute value based on true or false.
 */

// If statement

let time = 12;
if (time == 12 ) {
    console.log("Good Noon") // if condition is true, it execute. thats it.
}


// If else statement

let year = 2022;

if (year % 4 === 0) {
    console.log("Its a leap year"); // if condition is true, it shows leap year
}

else {
    console.log("Its not a leap year"); // if condition is false, its shows not leap year
}

// Multiple if else statement

let hour = "What is the time now? "
if (hour >=6 && hour < 12) {
    console.log("Good Morning")
} 
else if (hour == 12) {
    console.log("Good Noon")
}
else if (hour > 12 && hour <= 14) {
    console.log("Good Afternoon")
}
else if (hour >= 14 && hour <= 18) {
    console.log("Good Evening")
}
else {
    console.log("Good Night")
}

// Ternary Operators

let category = "Indian";
let visit = category == "Indian" ? console.log("Passport is not required") : console.log("Passport is Compulsary");

//Switch Statement

let imagine = 8;

switch(imagine) {
    case 5:
        console.log("Less than I think");   
    case 6:
        console.log("Correct!");    
    case 7:
        console.log("More than I think");   
    case 10:
        console.log("What a coincidence");
    default:
        console.log('Not a number I selected');
};