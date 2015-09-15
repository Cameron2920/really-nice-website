var canvas = document.querySelector('canvas#board');
canvas.setAttribute('width', SCREEN_WIDTH);
canvas.setAttribute('height', SCREEN_HEIGHT);
var surface = canvas.getContext('2d');
var timeZero = Date.now();
var prevTime = Date.now() - timeZero;
var currentTime = Date.now() - timeZero;
var currentScreen = gameScreen;
currentScreen.startLevel();

function beginLoop() {
    var frameId = 0;

    function loop() {
        frameId = window.requestAnimationFrame(loop);
        currentTime = Date.now() - timeZero;
        currentScreen.update(currentTime, prevTime);
        prevTime = currentTime;
        currentScreen.draw(surface);
    }
    loop();
}

beginLoop();