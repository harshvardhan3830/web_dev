let person = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        zip: "10001"
    }
};

// // Object notation
// console.log(person.name); // Accessing property using dot notation
// console.log(person.age);
// console.log(person.city);
// console.log(person.address.street); // Accessing nested property    
// console.log(person.address.zip);


// console.log(person["name"]); // Accessing property using bracket notation   


// // Object methods
// // Methods are functions that are properties of an object

// person.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };
// console.log(person); // Function reference
// person.greet(); // Calling the method


// Object methods
// 1. Object.keys() - returns an array of a given object's own enumerable property names
console.log(Object.keys(person)); // ["name", "age", "city", "address"]
// 2. Object.values() - returns an array of a given object's own enumerable property values
console.log(Object.values(person)); // ["John", 30, "New York", { street "123 Main St", zip: "10001" }]
// 3. Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["city", "New York"], ["address", { street: "123 Main St", zip: "10001" }]]
// 4. Object.assign() - copies the values of all enumerable own properties from one or more source objects to a target object
let newPerson = Object.assign({}, person, { age: 35, country: "USA" });
console.log(newPerson); // { name: "John", age: 35, city
// : "New York", address: { street: "123 Main St", zip: "10001" }, country: "USA" }
// 5. Object.freeze() - freezes an object, preventing new properties from being added to it and marking all existing properties as read-only
Object.freeze(person);
// person.name = "Doe"; // This will not change the name property because the object is frozen
console.log(person.name); // "John"
// 6. Object.seal() - seals an object, preventing new properties from being added to it but allowing existing properties to be modified
let sealedPerson = Object.seal(person);
sealedPerson.age = 31; // This will work because we can modify existing properties
console.log(sealedPerson.age); // 31