// Objects basic literals

let person1 = {
    name : "Satheesh",
    born : 1994,
    role : "Software Developer",
    getSummary : function() {
        return `He is ${this.name}. He is a ${this.role}.`
    }
}

let person2 = {
    name : "Harun",
    born : 1994,
    role : "HR",
    getSummary : function() {
        return `He is ${this.name}. He is a ${this.role}.`
    }
}
//console.log(person2.getSummary());
console.log(Object.keys(person1));
console.log(Object.values(person2));