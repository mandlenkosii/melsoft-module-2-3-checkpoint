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