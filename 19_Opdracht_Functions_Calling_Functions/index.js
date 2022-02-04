// Opdracht Hey Kiddo!

const isAdult = function (age) {
    console.log("Entering isAdult");
    if (age >= 18) {
        return true;
    } else {
        return false;
    };
}

const greet = function (age) {
    console.log("Entering greet");
    if (isAdult(age)) {
        return ("Hello there!");
    } else {
        return ("Hey kiddo!");
    };
}

/*
Alternatief:
const isAdultShort = age => age >= 18;
const greetShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");
*/

console.log(greet(17));

// Opdracht VAT Calculations, exercise 1

const taxPrice = function (basePrice, taxPercentage) {
    const tax = (basePrice / 100) * taxPercentage;
    return tax
}

const totalPrice = function (basePrice, taxPercentage) {
    const total = basePrice + taxPrice(basePrice, taxPercentage);
    return ["Total price:", total];
}

console.log(totalPrice(85, 21));

// Opdracht VAT Calculations, exercise 2

const basePrice = function (totalPrice, taxPercentage) {
    const taxAmount = (totalPrice / 100) * taxPercentage;
    const basePrice = totalPrice - taxAmount;
    return basePrice;
}

const loosePrices = function (totalPrice, taxPercentage) {
    const taxAmount = (totalPrice / 100) * taxPercentage;
    return ['Price without tax:', basePrice(totalPrice, taxPercentage), "Price tax:", taxAmount];
}

console.log(loosePrices(53, 9));
