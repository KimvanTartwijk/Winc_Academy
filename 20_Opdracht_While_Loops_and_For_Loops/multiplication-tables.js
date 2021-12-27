/* // Multiplication tables

for (let i = 1; i <= 10; i++) {
    console.log(`What is ${i} x 9?`);
    console.log(i + ' x 9 = ' + (i * 9));
} */

// Multiplication tables

for (let firstNumber = 1; firstNumber <= 10; firstNumber++) {
    for (let secondNumber = 1; secondNumber <= 10; secondNumber++) {
        console.log(`What is ${firstNumber} x ${secondNumber}` + ' ?');
        console.log(firstNumber + ' x ' + secondNumber + ' = ' + (firstNumber * secondNumber));
    }
}