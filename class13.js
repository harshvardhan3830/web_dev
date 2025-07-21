// Array Methods
// What are methods?
// Methods are functions that are associated with an object(instance of a class).
// JS is  an object-oriented programming language, so it has many built-in methods for arrays.
// JS follows prototype-based inheritance, meaning that all arrays inherit methods from the Array prototype.


// Array Methods
// 1. push() - adds an element to the end of an array
// 2. pop() - removes the last element from an array
// 3. shift() - removes the first element from an array
// 4. unshift() - adds an element to the beginning of an array
// 5. splice() - adds/removes elements from an array
// 6. slice() - returns a portion of an array
// 7. forEach() - executes a function for each element in an array
// 8. map() - creates a new array with the results of calling a function for each element
// 9. filter() - creates a new array with all elements that pass a test
// 10. reduce() - executes a function for each element and returns a single value


let arr = [1, 2, 3, 4, 5];
// 1. push() - adds an element to the end of an array
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// 2. pop() - removes the last element from an array
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

// 3. shift() - removes the first element from an array
arr.shift();
console.log(arr); // [2, 3, 4, 5]
// 4. unshift() - adds an element to the beginning of an array
arr.unshift(1);
console.log(arr); // [1, 2, 3, 4, 5]

// 5. splice() - adds/removes elements from an array
// arr.splice(start, deleteCount, item1, item2, ...)
arr.splice(2, 1, 10, 11); // removes 1 element at index 2 and adds 10, 11
console.log(arr); // [1, 2, 10, 11, 4, 5]

// 6. slice() - returns a portion of an array
// arr.slice(start, end)
let newArr = arr.slice(1, 4); // returns elements from index 1 to index 4 (not inclusive)
console.log(newArr); // [2, 10, 11]
console.log(arr); // [1, 2, 10, 11, 4, 5]

// 7. forEach() - executes a function for each element in an array
arr.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});

// 8. map() - creates a new array with the results of calling a function for each element
let mappedArr = arr.map((element) => element * 2);
console.log(mappedArr); // [2, 4, 20, 22, 8, 10]

// 9. filter() - creates a new array with all elements that pass a test
let filteredArr = arr.filter((element) => element > 5);
console.log(filteredArr); // [10, 11]

// 10. reduce() - executes a function for each element and returns a single value
let reducedValue = arr.reduce((accumulator, element) => accumulator + element, 0);
console.log(reducedValue); // 33 (1 + 2 + 10 + 11 + 4 + 5)