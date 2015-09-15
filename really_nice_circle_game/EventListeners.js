var mouseClicked = false;
var mouseClickPosition = {x:69, y:69};

canvas.addEventListener('click', function q(event) {
    event = event || window.event;
    var x = event.pageX - canvas.offsetLeft,
        y = event.pageY - canvas.offsetTop;
    mouseClicked = true;
    mouseClickPosition.x = x;
    mouseClickPosition.y = y;
});