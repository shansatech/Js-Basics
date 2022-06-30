// Nullish coalescing operator

/* 
In this operator, if variable value is not declared(a value is “defined” when it’s neither null nor undefined).
It execute the first value which is defined inside the console(?? returns the first argument if it’s not null/undefined). 
*/

let a; 
console.log(a ?? "Rama");

// In this operator, if variable value is declared. it will execute declared value

let name = 'Sita';
console.log(name ?? "Ravana");

// Major difference B/W || and ??

let height = 0;

console.log(height || 100); // 100 -->The height || 100 checks height for falsy value 0, falsy indeed.
console.log(height ?? 100); // 0

/* 
    The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

    It’s forbidden to use it with || or && without explicit parentheses.
*/