# Exercise Use Eventhandlers (defer)
An exercise from Winc Academy's Web Development Course.

## Tools
HTML, CSS, Javascript

## Project Requirements
* Link the JavaScript and CSS to the HTML file.
* Add a click event to a button.
* When the button is clicked, give an alert: "button clicked".

```
<!DOCTYPE html>
<html>
<head>
   <title>Practice Event Handlers</title>
   <script defer src="script.js"></script>
   <link rel="stylesheet" href="style.css">
</head>

<body>
    <button id="mybutton" type="button" class="btn-alert">Alert Me!</button>
</body>
</html>
```

* Add a second button to your HTML that says "Change Background".
* Add the following CSS in your CSS file.

```
.blue-background {
background-color: blue;
}
.red-background {
background-color: red;
}
```

* Give the body tag the class "blue-background".
* Create a new function that includes the following functionalities:
* 1 Add a click event to the new button.
* 2 When the change-background-button is clicked you will add the class "red-background" to your body element.
* Change the name of the function from changeColor to toggleColor.
* Instead of adding an extra class "red-background" to the classlist we are going to toggle the class.
