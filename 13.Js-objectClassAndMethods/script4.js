// Protypes Inheritance

//Constructor Person
function Person(name, role, born) {
    this.name = name;
    this.role = role;
    this.born = born;
}

// getSummary
Person.prototype.getSummary = function() {
    return `He is ${this.name}. He is a ${this.role}.`} // write a sentence using object properties.

// getAge
Person.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.born; // get age subtract this day and born day
    return `${this.name} is ${years} years old.`;
}

// Firm Constructor 

function Firm(name, role, company) {
    Person.call(this, name, role); // call previous or old constructor inside new constructor
    this.company = company;
}

// Inherit Prototype

Firm.prototype = Object.create(Person.prototype)

const firm1 = new Firm('Satheesh','Software Developer','Valorpay Tech');

// Use Firm constructor

Firm.prototype.constructor = Firm;
console.log(firm1); 