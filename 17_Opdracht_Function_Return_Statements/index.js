// Check if a number is bigger dan 100

const BiggerThan100 = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(BiggerThan100(43));
console.log(BiggerThan100(168));

/* 
Alternatieve oplossing:
const biggerThan100 = function (number) {
    return number > 100;
} 
*/

// Brenda the Bouncher Bot

const areWelcome = function (maxPeople, currentPeople, isAdult) {
    if (currentPeople >= maxPeople) {
        return ("It's too busy now, come back later!");
    }
    if (isAdult < 18) {
        return ("This is a club for adults.");
    }
    else {
        return ("Come in!");
    }
}
console.log(areWelcome(100, 36, 23));
console.log(areWelcome(100, 36, 17));
console.log(areWelcome(100, 100, 23));

/*
Alternatieve oplossing:
const areWelcome = function(
    isAdult,
    currentPeople,
    maxPeople
) {
    if (isAdult < 18) return "this is a club for adults";
    if (currentPeople >= maxPeople)
        return "it's too busy now, come back later";
    return "come in";
}
*/

// Calculate average of 5 numbers

const averageNumbers = function (numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    const average = sum / numbers.length;
    return average;
}
console.log(averageNumbers([22, 46, 13, 9, 15]));
