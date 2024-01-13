canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 1200;
img_height = 115;

var img_image;


function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {
    // Calculate the center position for the image
    var center_x = canvas.width / 2 - img_width / 2;
    var center_y = canvas.height / 2 - img_height / 2;

    // Clear the canvas before drawing the image
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image at the center position
    ctx.drawImage(img_imgTag, center_x, center_y, img_width, img_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
        alphabetkey();
        document.getElementById("d1").innerHTML = "You pressed an alphabet key";
        console.log("alphabet_key");
    } else if (keyPressed >= 48 && keyPressed <= 57) {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a number key";
        console.log("number_key");
    } else if (keyPressed >= 37 && keyPressed <= 40) {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed an arrow key";
        console.log("arrow_key");
    } else if (keyPressed == 17 || keyPressed == 18 || keyPressed == 27) {
        specialkey();
        document.getElementById("d1").innerHTML = "You pressed a special key";
        console.log("special_key");
    } else {
        otherkey();
        document.getElementById("d1").innerHTML = "You pressed symbol or other key";
    }
}

function alphabetkey() {
    img_image = "ALPHABET.PNG";
	img_width = 1450;
    img_height = 145;
    add();
}

function numberkey() {
    img_image = "number.png";
	img_width = 1470;
    img_height = 160;
    add();
}

function arrowkey() {
    img_image = "arrow.png";
	img_width = 1350;
    img_height = 210;
    add();
}

function specialkey() {
    img_image = "special.png";
	img_width = 1200;
    img_height = 210;
    add();
}

function otherkey() {
    img_image = "other.png";
	img_width = 1200;
    img_height = 150;
    add();
}
