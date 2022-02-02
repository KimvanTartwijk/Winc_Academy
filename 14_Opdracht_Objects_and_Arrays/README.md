# Exercise Objects and Arrays
An Exercise in Winc Academy's Web Development Course.

## Project Goal

## Tools
Javascript

## Project Requirements
Part 1: Objects
* Create an object called person.
* person has the following key-value pairs / properties: name and age. Fill in you own name and age.
* Use console.log(person) and run your JavaScript program, to log your object.
* Only log the value of name using the key name.
* Only log age age.
* Use dot-notation and bracket-notation to log the two properties above.
* Create a final key-value pair in which the key is evaluations and the value [7, 10, 9]. These are the marks you've received in the past year.
* Log only the property evaluations. 

Part 2: Arrays
* Create a new variable containing an empty array [].
* Fill this array with at least three different colors in the form of strings. For example: "green", "blue", "red".
* Log your new array to the console.
* Log the length of your array to the console. Use array.length.
* Log the first element of your array to the console. In our example, this would be "green".
* Log the last element of your array to the console, in our example: "red". Assume the amount of elements in your array is unknown. array[3] will not give the correct result if later on five elements are contained within the array.
* Add a 4th element to your array using the push method: array.push(). The result will be something like: ["green", "blue", "red", "Yellow"]
* Now add a digit to your array using the push method. Result: ["green", "blue", "red", "Yellow", 5]
* Finally add an object to your array, again with the push method. The object is as follows: {greeting: "hi, I am an object"}. Result: ["green", "blue",
"red", "Yellow", 5, {greeting: "hi, I am an object"}]
* Log Only the greeting from the object (last element of your array), to the console.

Part 3: A "real-life" object
O* bjects in JavaScript can be compared with objects in real life. Therefore we will continue with an exercise using a "real" object. We have created an array that contains three cat breeds. Below you will find this array with three cat breeds and their features.

```
Array with cat breeds

const catBreeds = [{
 name: "Abyssinian",
 description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
 dog_friendly: 4,
 energy_level: 5,
 life_span: "14 - 15",
 origin: "Egypt",
 temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
 wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
 food: {favourite_food: "fish",
 medium_liked_food: "dried fruits", 
 disliked_food: "walnuts"
 }},
 
 {name: "Aegean",
 description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
 dog_friendly: 4,
 energy_level: 53,
 life_span: "9- 12",
 origin: "Greece",
 temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
 wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
 food: {favourite_food: "tuna",
 medium_liked_food: "canned food", 
 disliked_food: "all fruits"
 }},
 
 {name: "American Bobtail",
 description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
 dog_friendly: 5,
 energy_level: 3,
 life_span: "11 - 15",
 origin: "United States",
 temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
 wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
 food: {favourite_food: "meaty things",
 medium_liked_food: "tuna", 
 disliked_food: "canned food"
 }}
 ]
 ```
 
* In every step use a console.log("object description", yoursolutionhere). 
* Log the name of the last cat breed.
* Name cat breed 3: American Bobtail
* Log the energy level of the first cat breed.
* Energy level cat breed 1: 5
* Log the first temperament of the temperaments of the second cat breed.
* First temperament cat breed 2: Affectionate
* Log the last temperament of the temperaments of the third cat breed.
* Last temperament cat breed 3: Sensitive
* Log the favorite food of the third cat breed
* Favorite food cat breed 3: meaty things
