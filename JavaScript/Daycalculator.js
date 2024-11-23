let totalDays = 500;
let years = 0, months = 0, weeks = 0, days = 0;

if (totalDays >= 365) {
    years = (totalDays / 365) | 0;
    totalDays = totalDays % 365;
}

if (totalDays >= 30) {
    months = (totalDays / 30) | 0;
    totalDays = totalDays % 30;
}

if (totalDays >= 7) {
    weeks = (totalDays / 7) | 0;
    totalDays = totalDays % 7;
}

days = totalDays;

console.log("Years: " + years + ", Months: " + months + ", Weeks: " + weeks + ", Days: " + days);
