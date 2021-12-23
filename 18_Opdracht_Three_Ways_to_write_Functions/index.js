// Function Declaration
function FunctionDeclarationSum(number1, number2) {
    const uitkomst1 = (number1 * number1) + (number2 * number2)
    const uitkomst2 = uitkomst1 * uitkomst1;
    return uitkomst2;
}

console.log(FunctionDeclarationSum(3, 4));


// Function Expression
const FunctionExpressionSum = function (number1, number2) {
    const uitkomst1 = (number1 * number1) + (number2 * number2)
    const uitkomst2 = uitkomst1 * uitkomst1;
    return uitkomst2;
};

console.log(FunctionExpressionSum(3, 4));

// Arrow Function
const ArrowFunctionSum = (number1, number2) => {
    const uitkomst1 = (number1 * number1) + (number2 * number2)
    const uitkomst2 = uitkomst1 * uitkomst1;
    return uitkomst2;
};

console.log(ArrowFunctionSum(3, 4));
