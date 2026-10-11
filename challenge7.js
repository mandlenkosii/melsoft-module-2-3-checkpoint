//CHALLENGE 7 
// PART A : TYPEOF MASTERY 

// Prediction : number  
console.log(typeof 42);

// Prediction : string
console.log(typeof "hello");

// Prediction : boolean
console.log(typeof true);

// Prediction : undefined
console.log(typeof undefined);

// Prediction : null
console.log(typeof null);

// Prediction : object
console.log(typeof {});

// Prediction : array
console.log(typeof []);

// Prediction : object
console.log(typeof function () {});

// Prediction : number
console.log(typeof NaN);

// Prediction : undefined
console.log(typeof undeclaredVariable);

// Array.isArray is a typeof that returns "object" for both arrays and plain object 


// PART B : INSTANCE OF 

console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object);
console.log("hello" instanceof String);
console.log(new String("hello") instanceof String);
console.log(42 instanceof Number);
console.log(new Date() instanceof Date);
console.log(/abc/ instanceof RegExp);


// PART C : DELETE AND ITS GOTACHAS

const user = {
    name: "Lerato",
    age: 25,
    role: "student"
};

console.log("Before:", user);

delete user.role;

console.log("After:", user);


// Array delete experiment
const numbers = [1, 2, 3, 4];

delete numbers[1];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[1]);


/* A non-configurable property is a property that cannot be deleted or have certain property settings changed.
So with this Math.PI it wont work since MATH.PI is a non-configurable */


/* I would not use delete because it removes the item but leaves an empty space in the array while the array length stays the same 
so going forward it would make sense having to use the splice() has it removes items and lets the remaining items fill the space */

