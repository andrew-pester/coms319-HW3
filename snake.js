var canvas;
var context;
var snake;
var game;
var end = false;
var state = false;
var x = -5;
var y = 150;
var direction = "r";
var path = [];
var btn = document.getElementById("start/stop");
var left = document.getElementById("left");
var right = document.getElementById("right");
canvas = document.getElementById("snake");
context = canvas.getContext("2d");
context.fillStyle = 'red';

btn.onclick = function () {
    if (!state && !end) {
        game = startGame();

    } else if (end) {

    } else {
        pauseGame();
    }

}
left.onclick = function () {
    if (direction == "r") {
        direction = "u";
    } else if (direction == "u") {
        direction = "l";
    } else if (direction == "d") {
        direction = "r";
    } else {
        direction = "d";
    }
}
right.onclick = function () {
    if (direction == "r") {
        direction = "d";
    } else if (direction == "u") {
        direction = "r";
    } else if (direction == "d") {
        direction = "l";
    } else {
        direction = "u";
    }
}
function startGame() {
    state = true;
    btn.value = "stop";
    document.getElementById("game-status").innerHTML = "<p></p>"
    return setInterval(draw, 1000);
}
function endGame() {
    clearInterval(game);
    end = true;
    document.getElementById("game-status").innerHTML = "<p>Game Over!</p>"
}
function pauseGame() {
    clearInterval(game);
    btn.value = "start";
    state = false;
    document.getElementById("game-status").innerHTML = "<p>Game Paused</p>"
}

function draw() {

    //adds an x and y into the array
    path.push({ x: x, y: y });
    if (direction == "r") {
        context.fillRect(x += 5, y, 5, 5);
        checkSnake(x, y);
    } else if (direction == "u") {
        context.fillRect(x, y -= 5, 5, 5);
        checkSnake(x, y);
    } else if (direction == "d") {
        context.fillRect(x, y += 5, 5, 5);
        checkSnake(x, y);
    } else {
        context.fillRect(x -= 5, y, 5, 5);
        checkSnake(x, y);
    }

    if (x < 0 || x > 300 || y < 0 || y > 300) {
        //if the snake hits a wall ends game
        endGame();
    }
}
function checkSnake(x, y) {
    var i = 0;
    for (i; i < path.length; i++) {
        if (path[i].x == x && path[i].y == y) {
            endGame();
        }
    }
}