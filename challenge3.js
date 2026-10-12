// CHALLENGE 3 
// Operators Masterclass

const grossSalary = 45000;

let paye = grossSalary * 0.25;
let uif = Math.min(grossSalary * 0.01 , 177.12);
let medicalAid = 2500; 
let pension = grossSalary * 0.075;

let totalDeductions = paye + uif + medicalAid + pension;
let netSalary = grossSalary - totalDeductions;

