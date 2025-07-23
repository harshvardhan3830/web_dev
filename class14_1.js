// functions are first-class objects in JavaScript, meaning they can be treated like any other value
// they can be passed as arguments, returned from other functions, and assigned to variables
// this allows for powerful programming patterns like callbacks, higher-order functions, and closures

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}


// Function Expression  
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greetExpression("Bob")); // "Hello, Bob!"


// Arrow Function
const greetArrow = (name) => `Hello, ${name}!`;
const greetArrow2 = (name) => {
    return `Hello, ${name}!`;
};

console.log(greetArrow("Charlie")); // "Hello, Charlie!"
console.log(greetArrow2("Dave")); // "Hello, Dave!"
