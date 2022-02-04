// No Arguments

const paintWall = function () {
    console.log("The wall has been painted red");
}

paintWall();


// Single Argument

const paintColor = function (color) {
    console.log("The wall has been painted " + color);
}

paintColor("green");
paintColor("blue");
paintColor();

// Multiple Arguments

const paintWall = function (whichWall, color) {
    console.log("The " + whichWall + " wall has been painted " + color);
}

paintWall("North", "grey");

// De volgorde is belangrijk! Tevens is de volgorde van de function definition belangrijk.
// Indien de volgorde omgedraaid wordt, worden de argumenten op een andere plek geplaatst.
paintWall("yellow", "East");
