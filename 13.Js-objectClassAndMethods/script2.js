// Objects constructor

function Person(name,born, role) {
    this.name = name;   
    this.role = role;
    this.born = born;
    this.getSummary = function() {
        return `He is ${this.name}. He is a ${this.role}.`
    }
}

// Instatiate an Object

const Person1 = new Person('Satheesh', "Software Developer");
const Person2 = new Person('Harun', "HR");

console.log(Person1.getSummary());