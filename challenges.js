let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

import { Star } from "./star.js";

//add all stars to array
let stars = [];

let howManyStars = 100;


for (let i = 0; i < howManyStars; i++) {
    let newStar = new Star(canvas, pencil);
    stars.push(newStar)
}

function drawSpace() {

    pencil.fillStyle = 'black';
    //draw dilled rectangle
    pencil.fillRect(0, 0, canvas.width, canvas.height);
}

//erase canvas
function clearScreen() {
     pencil.clearRect(0, 0, canvas.clientWidth, canvas.height);
}

function gameLoop() {

   
    clearScreen();
    drawSpace();
    for (let i = 0; i < stars.length; i++) {
        stars[i].move();
        stars[i].draw();
        stars[i].tryToRecycle();
    }
    



}

setInterval(gameLoop, 10);