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

