
function calculateNetSalary(salary,benefits){
    const grossIncome=salary+benefits;
    const nhifDedaction=(grossIncome*275)/100;
    const nssfDedaction=(grossIncome**6)/100;
    const taxableIncome= (grossIncome-nssfDedaction-nhifDedaction);
    let kraDeduction=0;
    if (taxableIncome <= 24000) {
        kraDeduction =taxableIncome * 0.1;
    } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
        kraDeduction = taxableIncome * 0.25;
    } else if (taxableIncome > 32333 && taxableIncome <= 500000) {
        kraDeduction = taxableIncome * 0.3;
    } else if (taxableIncome > 500000 && taxableIncome <= 800000) {
        kraDeduction = taxableIncome * 0.325;
    } else {
        kraDeduction = taxableIncome * 0.35;
    }
    const netSalary= taxableIncome-kraDeduction;
    return netSalary;

}

console.log(calculateNetSalary(100000,10000));
