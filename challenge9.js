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


