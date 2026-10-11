// PART A 
// Declaring 10 variables

const fullName = "Mandla Sikhosana"; 
// I used const because my name will not change it is my name and it will always be my name.

let age = 25; 
// I used let because my age will change every year and I will have to update it.

let  isEnjoyingJavaScript = true; 
// I used let for the boolean because this variable can change depending on my mood and how I feel about JavaScript.

let favouriteTemperature = 30.5; 
// I used let because my favorite temperature might change over time, this stores decimal values and can be updated.

const notANumber = Number("Thanks"); 
//Number: Number("Thanks") cannot be converted into a valid number, so JavaScript produces the special value NaN.

const infiniteValue = 1/0; 
// dividing a posotive number by zero produces Infinity.

let maximumSafeIntenger = Number.MAX_SAFE_INTEGER; 
//this is the largest integer that JavaScript can safely represent.

const emptyValue = null; 
// I used cosnt because the variable itself will not be reassigned and this represents the absence of a value

const status = undefined;
// I used status and assigned it to undefined

let message = 'the ${status} of my favorite temperature is ${favouriteTemperature}';
//used the undefined status variable and the decimal variable of my tempature



// PART B 
// Checking the typeof of the variables

console.log("Data type of fullName:", typeof fullName); // string

console.log("Data type of age:", typeof age); // number

console.log("Data type of isEnjoyingJavaScript:", typeof isEnjoyingJavaScript); // boolean

console.log("Data type of favouriteTemperature:", typeof favouriteTemperature);

console.log("typeof notANumber:", typeof notANumber);

console.log("typeof infiniteValue:", typeof infiniteValue);

console.log("typeof maximumSafeInteger:", typeof maximumSafeInteger);

console.log("typeof emptyValue:", typeof emptyValue);

console.log("Data type of status:", typeof status);

console.log("Data typeof message:", typeof message);

// Checking other data types

console.log("typeof null:", typeof null);

// Prediction : not a number but since I previously learned that it is a special number it will return number
console.log("typeof NaN:", typeof NaN);

console.log("typeof undefined:", typeof undefined);

// Prediction : string since the number is inside the the quotation marks
console.log('typeof "42":', typeof "42");

// Prediction : number 
console.log("typeof (typeof 42):", typeof (typeof 42));

// Prediction : array
console.log("typeof [1, 2, 3]:", typeof [1, 2, 3]);

console.log("typeof function() {}:", typeof function () {});

/* typeof [1,2,3] returns "object" because arrays are objects in JavaScript.*/