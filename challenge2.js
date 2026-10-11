// CHALLENGE 2 
// Type Conversion Workshop
//PART A 

// The 8 given values to convert

let a = "123";
let b = "3.14";
let c = "hello";
let d = "42abc";
let e = "";
let f = 0;
let g = null;
let h = undefined;

// a = "123"

console.log("Number:", Number(a), typeof Number(a));
console.log("parseInt:", parseInt(a), typeof parseInt(a));
console.log("parseFloat:", parseFloat(a), typeof parseFloat(a));
console.log("Boolean:", Boolean(a), typeof Boolean(a));
console.log("String:", String(a), typeof String(a));

// b = "3.14"

console.log("Number:", Number(b), typeof Number(b));
console.log("parseInt:", parseInt(b), typeof parseInt(b));
console.log("parseFloat:", parseFloat(b), typeof parseFloat(b));
console.log("Boolean:", Boolean(b), typeof Boolean(b));
console.log("String:", String(b), typeof String(b));

// c = "hello"

console.log("Number:", Number(c), typeof Number(c));
console.log("parseInt:", parseInt(c), typeof parseInt(c));
console.log("parseFloat:", parseFloat(c), typeof parseFloat(c));
console.log("Boolean:", Boolean(c), typeof Boolean(c));
console.log("String:", String(c), typeof String(c));

// d = "42abc"

console.log("Number:", Number(d), typeof Number(d));
console.log("parseInt:", parseInt(d), typeof parseInt(d));
console.log("parseFloat:", parseFloat(d), typeof parseFloat(d));
console.log("Boolean:", Boolean(d), typeof Boolean(d));
console.log("String:", String(d), typeof String(d));

// e = ""

console.log("Number:", Number(e), typeof Number(e));
console.log("parseInt:", parseInt(e), typeof parseInt(e));
console.log("parseFloat:", parseFloat(e), typeof parseFloat(e));
console.log("Boolean:", Boolean(e), typeof Boolean(e));
console.log("String:", String(e), typeof String(e));

// f = 0

console.log("Number:", Number(f), typeof Number(f));
console.log("parseInt:", parseInt(f), typeof parseInt(f));
console.log("parseFloat:", parseFloat(f), typeof parseFloat(f));
console.log("Boolean:", Boolean(f), typeof Boolean(f));
console.log("String:", String(f), typeof String(f));


//g = null

console.log("Number:", Number(g), typeof Number(g));
console.log("parseInt:", parseInt(g), typeof parseInt(g));
console.log("parseFloat:", parseFloat(g), typeof parseFloat(g));
console.log("Boolean:", Boolean(g), typeof Boolean(g));
console.log("String:", String(g), typeof String(g));

//h = undefined

console.log("Number:", Number(h), typeof Number(h));
console.log("parseInt:", parseInt(h), typeof parseInt(h));
console.log("parseFloat:", parseFloat(h), typeof parseFloat(h));
console.log("Boolean:", Boolean(h), typeof Boolean(h));
console.log("String:", String(h), typeof String(h));

// PART B 
// Implict coercion

/* "5" + 3
a. Prediction : error
b. type : error
c. because from my understanding the addition operator can only work on data types of the same kind.
d. results : it printed 53 meaning it can add a string and a Number.*/
console.log("5"+ 3);

/*
a. Prediction : 2
b. type : number
c. because the - operator converts the string "5" into a number.*/
console.log("5"-3);

/* "5" * "2"
a. Prediction : 10
b. type: number
c. same reason because the * operator gets to convert both strings into numbers*/
console.log("5" * "2");

/* true + 1
a. Prediction : 2
b. type - number
c. I think Javascript will convert or take true as 1 when doing numeric addition*/
console.log(true + 1);

/* true + "1"
a. Prediction : not sure but since are both strings the will be just combined
b. type: string*/
console.log(true + "1");

/* false + null
a. Prediction : 0
b. number
c. because both represent zero when it comes to numeric addition/conversion*/
console.log(false + null);

/* null + undefined
a. Prediction: NaN
b. type : NaN
c. because undefined cannot be converted into a valid number*/
console.log(null + undefined);

/* 1/0
a. Prediction: O
b. type : number
c. because dividing by zero give zero*/
console.log(1/0);

/* 0/0
a. Prediction: 0
b. type : number 
c. anything divided by zero will be zero*/
console.log(0/0);

/* "abc" - 1
a. Prediction : error or not a number
b. type : 
c. abc cant be converted to make this nurmeric conversion possible*/
console.log("abc" - 1);

/* [] + []
a. Prediction : ""
b. type : string
c. empty arrays get to converted into empty strings*/
console.log([] + []);

/* [1] + [2] 
a. Prediction : 12
b. type : strings
c. since arrays get to be converted to strings, then this means 1 and 2 will be strings and whe put together they will form a string of 12*/
console.log([1] + [2]);

// PART C
// The three questions

/* 1. Number("42abc") returns NaN because the whole value cannot be converted
into a number. parseInt("42abc") returns 42 because it reads the number
from the beginning of the string.*/

/* 2. I would use parseFloat when I need a decimal number. For example,
parseFloat("3.14") returns 3.14, while parseInt("3.14") returns 3.*/

/* 3. Number("") returns 0. This confusing because it is supposed to return not a number*/
