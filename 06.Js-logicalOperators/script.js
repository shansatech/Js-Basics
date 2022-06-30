// Logical Operators

/* 
&& --> AND --> compare both condition is true, then its value is true
|| --> OR --> if one of the condition is true, then its value is true
! --> NOT --> if condition is not true, then its value is true
*/
/*
<  --> less than 
>  --> greater than 
<  --> less than or equal to 
>= --> greater than or equal to
!= --> not equal to 
*/

let value1 = 3;
let value2 = 6;
let value3 = 4;
let value4 = 5;
let value = value1 <= value2 && value3 >= value4;
console.log(value);
value = value1 <= value2 || value3 >= value4;
console.log(value);
value = value1 <= value2 && value3 != value4;
console.log(value);
