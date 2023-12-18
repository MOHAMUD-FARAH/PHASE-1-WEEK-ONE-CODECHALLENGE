
// Calculates the net salary after deductions based on provided salary and benefits.
function calculateNetSalary(salary, benefits) {
    // Calculate gross income, NHIF deduction (1.5%), and NSSF deduction (6%).
    const grossIncome = salary + benefits;
    const nhifDeduction = grossIncome * 0.015; // 1.5% NHIF RATE
    const nssfDeduction = grossIncome * 0.06; // 6% NSSF RATE
    
    // Calculate taxable income after deductions.
    const taxableIncome = grossIncome - nssfDeduction - nhifDeduction;
    let kraDeduction = 0;

    // Determine KRA deduction based on different income ranges.
    if (taxableIncome <= 24000) {
        kraDeduction = taxableIncome * 0.1;
    } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
        kraDeduction = taxableIncome * 0.25;
    } else if (taxableIncome > 32333 && taxableIncome <= 500000) {
        kraDeduction = taxableIncome * 0.3;
    } else if (taxableIncome > 500000 && taxableIncome <= 800000) {
        kraDeduction = taxableIncome * 0.325;
    } else {
        kraDeduction = taxableIncome * 0.35;
    }

    // Calculate net salary after KRA deduction.
    const netSalary = taxableIncome - kraDeduction;
    return netSalary;
}

// Example usage: Calculate net salary for a given salary of 100000 and benefits of 10000.
console.log(calculateNetSalary(100000, 10000));
