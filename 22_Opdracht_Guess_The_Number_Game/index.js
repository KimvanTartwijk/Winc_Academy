// Guess the Number Game
const maxTries = 5;

const nameUser = prompt('Welcome to the Guess the Number Game!\nWhat is your name?');
alert("Hi " + nameUser + '!\nYou have ' + maxTries + ' tries to guess the right number.');
const minNumber = prompt('What is the smallest number you want to guess?');
const maxNumber = prompt('What is the highest number you want to guess?');

const minUserNumber = parseInt(minNumber);
const maxUserNumber = parseInt(maxNumber);
const chooseRandomNumber = Math.floor(Math.random() * (maxUserNumber - minUserNumber)) + minUserNumber;

for (let i = 0; i < maxTries; i++) {
    let chosenNumber = prompt('Enter a number from ' + minUserNumber + ' to ' + maxUserNumber + ' to start guessing.');
    if (chosenNumber == chooseRandomNumber) {
        alert('Congratulations, you have won the game!');
        alert('Bye ' + nameUser + ', see you!');
        i = maxTries;
        document.location.reload(true);
    } else if (i == maxTries - 1) {
        alert('Unfortunately, you tried ' + maxTries + ' times and your guess was not correct. You lost the game!\nThe number was ' + chooseRandomNumber + '.');
        alert('Bye ' + nameUser + ', see you!');
        document.location.reload(true);
    } else if (chosenNumber > chooseRandomNumber) {
        alert('Unfortunately, your guess is too high!\nYou have ' + (maxTries - 1 - i) + ' tries left.\nTry again!');
    } else if (chosenNumber < chooseRandomNumber) {
        alert('Unfortunately, your guess is too low!\nYou have ' + (maxTries - 1 - i) + ' tries left.\nTry again!');
    }
}