let salary = 15000;
let da, hra;

if (salary <= 10000) {
    da = 0.80 * salary;
    hra = 0.20 * salary;
} else if (salary <= 20000) {
    da = 0.85 * salary;
    hra = 0.25 * salary;
} else {
    da = 0.90 * salary;
    hra = 0.30 * salary;
}

let totalSalary = salary + da + hra;
console.log("Total Salary: Rs. " + totalSalary);
