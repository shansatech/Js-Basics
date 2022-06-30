// Date class

const now = new Date();
console.log(now); // it shows exact date and time based on our system time.

// Js Date Get Methods --> These methods can be used for getting information from a date object:

let newDate = new Date("2022-05-31");
console.log(newDate);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
let day = console.log(days[now.getDay()]);
console.log(now.getTime());

// Js Date Set Methods --> Set Date methods let you set date values for a Date Object.

const d = new Date();
d.setFullYear(2020);
d.setMonth(11);
d.setDate(22);
d.setHours(22);
d.setMinutes(54);
d.setSeconds(23);
console.log(d);