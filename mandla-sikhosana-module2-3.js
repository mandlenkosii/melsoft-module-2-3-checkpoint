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


// CHALLENGE 3 
// Operators Masterclass

const grossSalary1= 45000;

let paye1 = grossSalary1 * 0.25;
let uif1 = Math.min(grossSalary1 * 0.01 , 177.12);
let medicalAid1 = 2500; 
let pension1 = grossSalary1 * 0.075;

let totalDeductions1 = paye1 + uif1 + medicalAid1 + pension1;
let netSalary1 = grossSalary1 - totalDeductions1;

// CHALLENGE 4
// The Equality Deep Dive 

// PART A

// 1.
// My prediction: true
console.log(0 == false);

// 2
// My prediction: false
console.log(0 === false);

// 3
// My prediction: true
console.log("" == 0);

// 4
// My prediction: false
console.log("" === 0);

// 5
// My prediction: true
console.log("0" == 0);

// 6
// My prediction: false
console.log("0" === 0);

// 7
// My prediction: true
// Reason : the is some conversion here 
console.log(null == undefined);

// 8
// My prediction: false
// Reason : The strict === operator does not do any conversion 
console.log(null === undefined);

// 9
// My prediction: false
// Reason : Javascript or the operator does not convert anything meaning null == 0 will be false 
console.log(null == 0);

// 10
// My prediction: true
// Reason : JavaScript converts null to a numeric value of 0 through abstract relational comparison so it becomes 0>=0
console.log(null >= 0);

// 11
// My prediction: false
// Reason : Since null gets to be converted to 0 then 0>0 is false
console.log(null > 0);

// 12
// My prediction: true
console.log(NaN == NaN);

// 13
// Prediction: true
console.log(NaN === NaN);

// 14
// Prediction: true
console.log(Object.is(NaN, NaN));

// 15
// Prediction: true
console.log(+0 === -0);

// 16
// Prediction: false
console.log(Object.is(+0, -0));

// 17
// Prediction: true
console.log([1, 2, 3] == "1,2,3");

// 18
// Prediction: true
console.log([] == false);

// 19
// Prediction: true
console.log([] == 0);

// 20
// Prediction: true
console.log([0] == false);



// PART B
// Real world form validator 

const newPassword = "Junior@123";
const confirmPassword = "Juniors@123";

const currentEmail = "junior@example.com";
const confirmEmail = "juniors@example.com";

// Check that both passwords are exactly the same.
const passwordsMatch = newPassword === confirmPassword;

// Check that both emails are exactly the same.
const emailsMatch = currentEmail === confirmEmail;

// The password should not be the same as the email.
const passwordIsDifferent = newPassword !== currentEmail;

// Check that the password has at least 8 characters.
const passwordIsLongEnough = newPassword.length >= 8;

console.log("Passwords match:", passwordsMatch);
console.log("Emails match:", emailsMatch);
console.log("Password is different:", passwordIsDifferent);
console.log("Password is long enough:", passwordIsLongEnough);

// CHALLENGE 5
// Operator Precedence

// 1
// Prediction: 13 because multiplication happens before addition/subtraction.
console.log(2 + 3 * 4 - 1);

// 2
// Prediction: 15 because it will start with the brackets first then multiply
console.log((2 + 3) * (4 - 1));

// 3
// Prediction: 4 because it only substraction only it will start where the equation starts.
console.log(10 - 4 - 2);

// 4
// Prediction: 64, the power of 2**3 is 8 and then 8**2 is 64.
// Output was 512
console.log(2 ** 3 ** 2);

// 5
// Prediction: 3 because 10 % 3 is 1, then 1 * 2 is 2, and finally 2 + 1 is 3.
console.log(10 % 3 * 2 + 1);

// 6
// Prediction: 5 because division is evaluated from left to right.
console.log(100 / 4 / 5);

// 7
// Prediction: true because 5 + 2 is 7, which is greater than 6, and 3 is less than 4, so both conditions are true.
console.log(5 + 2 > 6 && 3 < 4);

// 8
// Prediction: true because the first part of the expression (true && false) evaluates to false, but the second part (true && true) evaluates to true. Since it's an OR operation, the overall result is true.
console.log(true && false || true && true);

// 9
// Prediction: true because !false is true, and !!0 is false, so the overall expression evaluates to true.
// Output was false
console.log(!false && !!0);

// 10
// Prediction: true because 5 > 3 is true, 10 < 20 is true, and !(2 === "2") is true.
console.log(5 > 3 && 10 < 20 || !(2 === "2"));

// 11
// Prediction: 1035 because it multiplies 1000 by 1.15 and then by 0.9.
console.log(1000 * 1.15 * 0.9);

// 12
// Prediction: "number"
// Output was "number1" because the typeof operator returns a string, and then the + operator concatenates the string "number" with the number 1.
console.log(typeof 5 + 1);

// 13
// Prediction: "number"
console.log(typeof (5 + 1));

// 14
// Prediction: "56"
console.log("5" + 3 * 2);

// 15
// Prediction: 4    
console.log("5" - 3 + 2);

/*I use parentheses to make my code easier to read and to show which operations should happen first, even when JavaScript can understand the code without them. This helps avoid confusion and makes the logic clearer to other developers.*/

// CHALLENGE 6
// Ternary and Short Circuit Patterns

// PART A

let getGrade = percentage => 
            percentage >= 90 ? "A" :
            percentage >= 80 ? "B" :
            percentage >= 70 ? "C" :
            percentage >= 60 ? "D" : 
            percentage >= 50 ? "E" : "F";
let percentages = [95, 82, 73, 65, 54, 42, 0, 100];

percentages.forEach(percentage => {
    console.log(percentage + "% = " + getGrade(percentage));
});

// PART B
// SHORT CIRCUIT DEFAULTS

let userProfile = {
    displayName: "",
    theme: "",
    maxResults: null,
    lastLogin: null,
    notificationCount: 0
};

// Use short-circuit evaluation to provide default values
let displayName = userProfile.displayName || "Guest User";
let theme = userProfile.theme || "light";
let maxResults = userProfile.maxResults ?? 10; // Use nullish coalescing operator for null or undefined

let lastLogin = userProfile.lastLogin ?? "Never";   // Use nullish coalescing operator for null or undefined
let notificationCount = userProfile.notificationCount ?? 0; // Use nullish coalescing operator for null or undefined

console.log("Display Name:", displayName);
console.log("Theme:", theme);
console.log("Max Results:", maxResults);
console.log("Last Login:", lastLogin);
console.log("Notification Count:", notificationCount);


/* So basically, short-circuit evaluation allows us to provide default values for properties that might be empty strings, null, or undefined. The nullish coalescing operator (??) is more specific and only provides the default value when the operand is null or undefined. */
/* || uses the default value for any falsy value (like empty string, 0, null, undefined, false), while ?? only uses the default for null or undefined. */


// PART C
// GUARD CLAUSES 

let person = { 
    address: {
        city: "Cape Town"
    }
};

// Using && guards
console.log(
    person &&
    person.address &&
    person.address.city
);

// Using optional chaining
console.log(person?.address?.city);

// Using optional chaining with a default
console.log(person?.address?.city ?? "Unknown city");


// PART D
// PREDICTING THE OUT COME 

// Prediction : finally it will skip falsy values until it finds finally
 null || undefined || 0 || "" || "finally"

 // Prediction : 0, it will only skip null and undefined
 null ?? undefined ?? 0 ?? "" ?? "finally"

 // Prediction : first truthy, not sure but probaly because 0 is falsy value  
 0 || "first truthy"

 // Prediction : 0 , 
 0 ?? "first non-nullish"

 // Prediction : false , it compared the first two and found the second one false 
 true && false && "never reached"

 // Prediction :
 "first" && "second" && "third"

 // Prediction :
 false || (true && "yes")

 // Prediction :
 (false || true) && "yes"

 // Prediction : 3 , all 3 numbers are valid/truthy
 1 && 2 && 3

// Prediction :
 null?.foo?.bar?.baz

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

// CHALLENGE 8 
// BITWISE PERMISSION SYSTEM

const READ = 1;      // 0001
const WRITE = 2;     // 0010
const DELETE = 4;    // 0100
const ADMIN = 8;     // 1000

// Give a user READ and WRITE permissions.
let userPermissions = READ | WRITE;

console.log("User permissions:", userPermissions);

// Check READ permission.
const canRead = (userPermissions & READ) !== 0;

console.log("Can read:", canRead);

// Check DELETE permission.
const canDelete = (userPermissions & DELETE) !== 0;

console.log("Can delete:", canDelete);

// Give the user DELETE permission.
userPermissions |= DELETE;

console.log("After adding DELETE:", userPermissions);

// Removing WRITE permission.
userPermissions &= ~WRITE;

console.log("After removing WRITE:", userPermissions);

// Toggle ADMIN on.
userPermissions ^= ADMIN;

console.log("After ADMIN toggle:", userPermissions);

// Toggle ADMIN off.
userPermissions ^= ADMIN;

console.log("After second ADMIN toggle:", userPermissions);

// Create the next permission using left shift.
const SUPER_ADMIN = ADMIN << 1;

console.log("SUPER_ADMIN:", SUPER_ADMIN);

/* 1. Bitwise permission uses less memory compared to an array and also they are easy to check if a user has a specific permission*/

/* 2. Bitwise even at first and somewhat now I still find it hard to understand and work with so maybe I would say it difficult to understand and might be worse given there is a lot of numbers to work with*/


/* 3. & is a bitwise AND operater that works in bits 
    && is a logical AND operator that checks truthiness
    | is a bitwise OR operator that works on bits
    || is a logical OR operator that checks thruthiness

let READ = 1
let WRITE = 2

let permissions = READ;

console.log(permissions & WRITE);
console.log(permissions && WRITE); */


// CHALLENGE 9
// REAL WORLD PAYROLL + BANKING CALCULATOR

// SCENARIO 1 - PAYROLL PROCESSOR 

const grossSalary = 45000;

let paye = grossSalary * 0.25;
let uif = Math.min(grossSalary * 0.01 , 177.12);
let medicalAid = 2500; 
let pension = grossSalary * 0.075;

let totalDeductions = paye + uif + medicalAid + pension;
let netSalary = grossSalary - totalDeductions;

// struggling with making the numbers two decimals

let formatMoney = amount =>
    "R" + amount.toLocaleString("en-US",{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

console.log("Gross Salary : " + formatMoney(grossSalary));
console.log("PAYE : " + formatMoney(paye));
console.log("UIF : " + formatMoney(uif));
console.log("Medical Aid: " + formatMoney(medicalAid));
console.log("Pension: " + formatMoney(pension));
console.log("Total Pension : " + formatMoney(totalDeductions));
console.log("Net Salary : " + formatMoney(netSalary));


// CHALLENGE 11
// BUG HUNT 

/* === JUNIOR DEVELOPER'S CART SCRIPT (DO NOT TRUST ANY LINE) ===
var item1Price = "199.99"; 
*The problem with this line is that the price is stored as a string instead of a number. And also they have used var instead of const or let.
let item1Price = 199.99

var item2Price = "49.50";
*This is the same bug/problem as the first one, the price is stored as a string instead of a number. And also they have used var instead of const or let.
let item2Price = 49.50

var item3Price = 125;
*Not completetly wrong because it is valid just that they used "var" instead of let or const
let item3Price = 125

var quantity = "2";
*Should have not used the quotation marks as it makes the variable a string instead of a number 
let quantity = 2

var discountCode = "SAVE10";
*The problem with this line is that discountCode is a string, and comparing it to another string using == will always return true. It should be compared using === instead of == to ensure strict equality.\


var isLoggedIn = "true";
* The problem with this line is that isLoggedIn is a string instead of a boolean. It should be initialized to a boolean value (true or false) instead of a string.
let isLoggedIn = true;

var customerAge = null;
* It should have initialised to a number instead of null


var subtotal = item1Price + item2Price + item3Price * quantity;
* The problem with this line is that the order of operations is incorrect. The multiplication should be done before the addition, so parentheses should be used to ensure the correct order of operations: 
(item1Price + item2Price) * quantity;

console.log("Subtotal:", subtotal);

var discount = discountCode == "SAVE10" ? 0.1 : 0;
var discountAmount = subtotal * discount;
var afterDiscount = subtotal - discountAmount;

var vat = afterDiscount * 0.15;
* should have used const since it is a formular and it wont change.

var total = afterDiscount + vat;
var canCheckout = isLoggedIn && customerAge > 18;
console.log("Can checkout?", canCheckout);
var seniorDiscount = customerAge >= 60 ? total * 0.05 : null;

var finalTotal = total - seniorDiscount;
The problem with this line is that total and seniorDiscount are not defined, so this line will throw a ReferenceError. They should be defined before this line is executed.


console.log("Total: R" + finalTotal.toFixed(2));

// === END OF SCRIPT === */

/* 1. One thing I got to fully understand is JavaScript handles data types accoding to the different purposes or special purposes, meaning I have to be very careful when working with numbers, strings and booleans.


2. I got to see that == compares values but it also converts them before,
while === compares the data type and value without any converting 

3. I would use ?? when I only want to provide a default value if something is null or undefined.
like: let number = 0;
console.log(number || 16);
console.log(number ?? 16);

4. typeof null returning a object is apparently a compatibility with the older version/code
So now checking the value null would look something like this: value === null


5. Forgeting to convert can cause a problem in the banking space since they always deal with numbers.
NUmbers that come in forms of strings must be cinverted 


6. This is because Javascript doesnt represent numbers corretly as it stores decimal numbers using binary floating-point


7.  & is a bitwise AND operater that works in bits 
    && is a logical AND operator that checks truthiness
    | is a bitwise OR operator that works on bits
    || is a logical OR operator that checks thruthiness

    Basically the first ones/single ones work with bits,
    while the other two are used for LOgical conditions 

8. I think for me the hardest thing is still working with bits  and working with null, undefined and also the concept of the operators in the previous question

I did however research and looked at different examples such that I get to have an idea
*/