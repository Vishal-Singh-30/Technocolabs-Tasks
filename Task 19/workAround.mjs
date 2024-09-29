// // import module
// import Employee from "./employee.mjs";

// function getEmployeeInformation(inputSalary) {
//     Employee.salary = inputSalary;
//     console.log('Cadre: ' + Employee.getCadre());
//     console.log('Tax: ' + Employee.calculateTax());
//     console.log('Benefits: ' + Employee.getBenefits());
//     console.log('Bonus: ' + Employee.calculateBonus());
//     console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
//   }
  
//   getEmployeeInformation(10000);
//   getEmployeeInformation(50000);
//   getEmployeeInformation(100000);

// Importing variables using their aliases
import { cadre, tax, benefits, bonus, reimbursement } from "./employee.mjs";

// Import the Employee object separately
import Employee from "./employee.mjs";

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + cadre()); // Use the alias instead of Employee.getCadre()
  console.log('Tax: ' + tax()); // Use the alias instead of Employee.calculateTax()
  console.log('Benefits: ' + benefits()); // Use the alias instead of Employee.getBenefits()
  console.log('Bonus: ' + bonus()); // Use the alias instead of Employee.calculateBonus()
  console.log('Reimbursement Eligibility: ' + reimbursement() + '\n'); // Use the alias instead of Employee.reimbursementEligibility()
}

// Calling the function to see output
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);