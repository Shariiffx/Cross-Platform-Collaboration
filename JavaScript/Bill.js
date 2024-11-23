let units = 110;
let bill = 0;
if (units <= 50) {
    bill = units * 0.5;
}
else if (units <= 150) {
    bill = (50 * 0.5) + ((units - 50) * 0.75);
}
else if (units <= 250) {
    bill = (50 * 0.5) + (100 * 0.75) + ((units - 150) * 1.2);
} else {
    bill = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + ((units - 250) * 1.2);
}
let serviceCharge = bill * 0.20;
let totalBill = bill + serviceCharge;

console.log("Total bill (including 20% service charge): Rs. " + totalBill);
