// CreateJS Boiler Plate for COMP397

// Variables : 
var canvas; // Reference to Canavas Element
var stage: createjs.Stage; // Reference Stage
var helloText: createjs.Text; // Holds the Hello world Text
var buttonBitmap: createjs.Bitmap;


// Functions 
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Turn On MouseOver Event 

    createjs.Ticker.setFPS(60); // set the frame rate 60 per frame per seconds
    createjs.Ticker.addEventListener("tick",gameLoop);

    main();
}


// GameLoop Function
function gameLoop() {
    stage.update();

}


function buttonClicked() {
    helloText.text = "Good Bye !";
}

function buttonOut() {
    buttonBitmap.alpha = 1;
}

function buttonOver() {
    buttonBitmap.alpha = 0.5;
}

function main() {
    // This is where all the stuff happens
    helloText= new createjs.Text("Hello World !", "40px Consolas", "#000000");
    stage.addChild(helloText); // First Child Object added to Stage

    buttonBitmap= new createjs.Bitmap("assets/images/button.png");
    buttonBitmap.x = 100;
    buttonBitmap.y = 100;
    buttonBitmap.addEventListener("click", buttonClicked);
    buttonBitmap.addEventListener("mouseout",buttonOut);
    buttonBitmap.addEventListener("mouseover",buttonOver);


    stage.addChild(buttonBitmap);
}