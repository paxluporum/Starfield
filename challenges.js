let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

import { Star } from "./star.js";

let mySpecialStar = new Star(pencil);
mySpecialStar.draw();

function gameLoop() {

    //draw background
    //draw stars
    //move stars
    //recycle stars / restart stars



}

setInterval(gameLoop, 50);