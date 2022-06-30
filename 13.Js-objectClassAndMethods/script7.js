// subClasses

class Person {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    getSummary() {
        return `He is ${this.name}. He is a ${this.role}.`
    }
}

// Firm Class

class Firm extends Person {
    constructor(name, age, role, company) {
        super(name, age, role,);
        this.company = company;
    }
} 

// Instatiate Firm
const firm1 = new Firm("Satheesh", "27", "Software Developer", "Valorpay Tech")

console.log(firm1.getSummary());