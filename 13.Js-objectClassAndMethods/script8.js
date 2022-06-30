// Object methods

let user = {
    name : "Satheesh",
    age : 27,
    "like nature" : true
}

console.log(user.name);
console.log(user.age);

let person1 = {};

// set 

person1["Satheesh"] = true;

// get

console.log(person1["Satheesh"]);

// delete

delete user["Satheesh"];
 
// Object.values()

const person = {
    name : "Jeeva",
    work: "Developer",
    Experience : 3
};

console.log(Object.values(person)); // output all the values in an object

// Object.key()

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  // expected output: Array ["a", "b", "c"] // output all the key in an object

  // Object.create()

  const person7 = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person7); // create a new property value in person7 object.
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"

  // Function call()

  const per_son = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    } // this represents the property of person objects.
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe"
  }

  const person3 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  console.log(per_son.fullName.call(person2, "Oslo", "Norway")); 

  // Function call, we can write a method that can be used on different objects. 

