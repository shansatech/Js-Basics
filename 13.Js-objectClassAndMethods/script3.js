// Objects prototype

//Constructor
function Person(name, born, role) {
    this.name = name;
    this.born = born;
    this.role = role;
}

// getSummary
Person.prototype.getSummary = function() {
    return `He is ${this.name}. He is a ${this.role}.`}

// getAge
Person.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.born;
    return `${this.name} is ${years} years old.`;
}

// check eligibility

Person.prototype.eligible = function(newYear) {
    this.born = newYear;
    this.eligible = newYear > 2013 ? true : false;
}

// Instatiate an Object

const Person1 = new Person('Satheesh', 1995, "Software Developer");
const Person2 = new Person('Harun', 1994, "HR");

console.log(Person1.getSummary());
Person1.eligible(2010);
console.log(Person1);