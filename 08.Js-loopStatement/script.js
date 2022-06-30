// Loop statement
/*
    Loop statement --> helps in executing one or more statements up to a desired number of times. 
*/
// While loop

let i =1;
while (i<7) {
    console.log(i); // While runs again and again until condition is true
    i++;
}

//For loop
/*
    Statement 1 (let j =0;) is executed (one time) before the execution of the code block.
    Statement 2 (j<7;) defines the condition for executing the code block.
    Statement 3 (j++) is executed (every time) after the code block has been executed.
*/

for(let j = 0; j <7; j++) {
    console.log("Hello World")
    }

// Do While Loop
/*
It will execute code once, before check the condition is true. bcoz code block is executed (do block).
before the condition(while block) is executed.

In below example, first we write do loop then only we write while loop. So it execute the do once then 
check condition in while loop then execute whatsoever depends on the condition.
*/

let text = '';
let k = 0;

do {
    text += "The number is " + k ;
    k++;
} while (k < 10); 

console.log(text)

