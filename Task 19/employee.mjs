// // creating a module.
// let Employee = {
//     salary: 100000
// };


// let payGrades = {
//   entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
//   midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
//   seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
// };

//  Employee.getCadre = function() {
//   if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
//     return 'entryLevel';
//   } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
//     return 'midLevel';
//   } else return 'seniorLevel';
// }

// Employee.calculateTax = function() {
//   return payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
// }

// Employee.getBenefits = function() {
//   return payGrades[Employee.getCadre()].benefits.join(', ');
// }

// Employee.calculateBonus = function() {
//   return .02 * Employee.salary;
// }

// Employee.reimbursementEligibility = function() {
//   let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
//   let totalBenefitsValue = 0; 
//   let employeeBenefits = payGrades[Employee.getCadre()].benefits;
//   for (let i = 0; i < employeeBenefits.length; i++) {
//     totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
//   }
//   return totalBenefitsValue;
// }


// // export module Employee
// export default Employee;

// Employee object with salary
let Employee = {
  salary: 100000
};

// PayGrades object
let payGrades = {
entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

// Functions (no longer part of Employee object)
export function getCadre() {
if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
  return 'entryLevel';
} else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
  return 'midLevel';
} else return 'seniorLevel';
}

export function calculateTax() {
return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

export function getBenefits() {
return payGrades[getCadre()].benefits.join(', ');
}

export function calculateBonus() {
return .02 * Employee.salary;
}

export function reimbursementEligibility() {
let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
let totalBenefitsValue = 0; 
let employeeBenefits = payGrades[getCadre()].benefits;
for (let i = 0; i < employeeBenefits.length; i++) {
  totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
}
return totalBenefitsValue;
}

// Export functions with aliases
export { getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement };

// Export Employee object as default
export default Employee;



