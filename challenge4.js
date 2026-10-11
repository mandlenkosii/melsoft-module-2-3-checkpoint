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