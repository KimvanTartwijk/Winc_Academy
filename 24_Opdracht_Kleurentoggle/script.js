const dropdownMenu = document.querySelector('.dropdown-menu')

// When hovering over the burger menu, the dropdown menu opens.
dropdownMenu.addEventListener('mouseover', function () {
    dropdownMenu.style.width = "200px";
    dropdownMenu.style.left = "0";
});

// When not hovering over the burger icon or dropdown menu, the dropdown menu closes.
dropdownMenu.addEventListener('mouseout', function () {
    dropdownMenu.style.width = "0px";
    dropdownMenu.style.left = "-100px";
});

// The background color will change to the choosen color when clicked on color circles or the colors in the menu.
// When clicked on a color name or radio button in the menu, the dropdown menu closes.
const backgroundColor = document.getElementById('background')
const color = document.querySelectorAll('.color')

color.forEach(function (clickableColor) {
    clickableColor.addEventListener('click', function (colorBackground) {
        backgroundColor.removeAttribute("class")
        backgroundColor.removeAttribute("style")
        backgroundColor.classList.add(colorBackground.target.classList[1])
        dropdownMenu.style.width = "0px";
        dropdownMenu.style.left = "-100px";
    });
});

// When pressed on key numbers 1 to 9, the background will change to the correspondending color.
const colors = {
    1: "#879ca3",
    2: "#c9c9ce",
    3: "#b3a8a0",
    4: "#80aec2",
    5: "#3e6e7a",
    6: "#006994",
    7: "#4f7380",
    8: "#82a6b3",
    9: "#c0d2d9"
}

document.addEventListener('keydown', function (keyNumber) {
    document.body.style.backgroundColor = colors[keyNumber.key];
});
