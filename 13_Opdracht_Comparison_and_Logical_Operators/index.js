const age = 22;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Sarah";
const totalAmount = 8;

if (age > 18) {
    console.log("You are over 18, welcome!")
} else {
    console.log("You are not over 18, unfortunately you cannot enter.")
}

if (isFemale) {
    console.log("Welcome to the ladies night!")
} else {
    console.log("Unfortunately, only ladies are welcome!")
}

if (driverStatus == "bob") {
    console.log("You are allowed to drive.")
} else {
    console.log("You are not allowed to drive.")
}

if (age >= 18 && age <= 25) {
    console.log("You get 50% off!")
} else {
    console.log("You are paying the normal price.")
}

if (firstName == "Sarah" || firstName == "Bram") {
    console.log("You get a free beer!")
} else {
    console.log("No birthday gift for you mate!")
}

if (totalAmount > 100) {
    console.log("You get a free bottle of champagne!")
} else if (totalAmount > 50) {
    console.log("You get a free portion of nacho's!")
} else if (totalAmount > 25) {
    console.log("You get free (veggie)bitterballen!")
} else {
    console.log("Your total amount is too low for a gift.")
}
