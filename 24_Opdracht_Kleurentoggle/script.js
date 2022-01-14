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
document.addEventListener('keydown', function (keyNumber) {
    if (keyNumber.key === '1') {
        document.body.style = "background-color: #879ca3";
    }
    else if (keyNumber.key === '2') {
        document.body.style = "background-color: #c9c9ce";
    }
    else if (keyNumber.key === '3') {
        document.body.style = "background-color: #b3a8a0";
    }
    else if (keyNumber.key === '4') {
        document.body.style = "background-color: #80aec2";
    }
    else if (keyNumber.key === '5') {
        document.body.style = "background-color: #3e6e7a";
    }
    else if (keyNumber.key === '6') {
        document.body.style = "background-color: #006994";
    }
    else if (keyNumber.key === '7') {
        document.body.style = "background-color: #4f7380";
    }
    else if (keyNumber.key === '8') {
        document.body.style = "background-color: #82a6b3";
    }
    else if (keyNumber.key === '9') {
        document.body.style = "background-color: #c0d2d9";
    }
});