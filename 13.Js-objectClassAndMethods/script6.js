// Classes

class Person {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    getSummary() {
        return `He is ${this.name}. He is a ${this.role}.`
    }

    getAge() {
        const years = new Date().getFullYear() - this.born;
        return `${this.name} is ${years} years old.`;
    }
}

// Instantiate Object
const person1 = new Person("Satheesh", 27, "Software Developer");

console.log(person1.getSummary());