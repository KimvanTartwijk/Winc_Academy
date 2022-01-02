// When clicked on button, it gives the message: button clicked!
const buttonAlert = document.getElementById("button-alert")

buttonAlert.addEventListener('click', function () {
    alert("Button clicked!");
});

const buttonBackground = document.getElementById("button-background")

// When clicked on button, background changes to red.
/* buttonBackground.addEventListener('click', function () {
    document.body.classList.add('red-background');
}); */

// When clicked on button, background changes to red when its blue, and to blue when its red.
buttonBackground.addEventListener('click', function () {
    document.body.classList.toggle('red-background');
});