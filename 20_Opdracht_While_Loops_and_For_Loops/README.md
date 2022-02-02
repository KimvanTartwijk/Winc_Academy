# Exercise While Loops and For Loops
An Exercise in Winc Academy's Web Development Course.

## Project Goal

## Tools
Javascript

## Project Requirements
* Even/Odd Reporter: Write a loop that iterates from 0 to 20. During each iteration, check whether the current number is even or odd. Use console.log to view the output.
* Multiplication Tables: Write a script that prints the multiplication table of 9. The output should look like this:
```
// 1 x 9 = 9 
// 2 x 9 = 18 
// 3 x 9 = 27 
// etc...
```
* Bonus: use a nested for loop to write the multiplication tables of 1 until 10. Start the loop at the lowest number (in this case 1). The output now looks like this:
```
// 1 x 1 = 1 
// 1 x 2 = 2 
// 1 x 3 = 3 
// etc...

// ...
// 9 x 1 = 9 
// 9 x 2 = 18 
// 9 x 3 = 27
// ...etc 
```

* Grade assigner: For this exercise, your start off with an existing function that determines the grade based on a score of 0-100:
```
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}
```
* Write a for loop that iterates from 60 to 100. This value indicates the "score" of a student. During each iteration, call the assignGrade function with the current and log the following statement:
```
For scoring 80 points, you get an C
```
