// Object_create

// Object Of Protos

const firmProtos = {
    getSummary : function() {
        return `He is ${this.name}. He is a ${this.role}.`
    },
    getAge : function() {
        const years = new Date().getFullYear() - this.born;
        return `${this.name} is ${years} years old.`;
    }
};

// Create Object
// const person1 = Object.create(firmProtos);
// person1.name = "Satheesh";
// person1.role = "Software Developer";

const person1 = Object.create(firmProtos, {
    name: {value : "Satheesh"},
    role: {value : "Software Developer"},
    born: {value : 1995}
});

console.log(person1);