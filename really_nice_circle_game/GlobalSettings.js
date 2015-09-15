var SCALE = 1;
var SCREEN_WIDTH = 500 * SCALE;
var SCREEN_HEIGHT = 500 * SCALE;
var EPSILON = 0.1 * SCALE;
var CANVAS_BACKGROUND_COLOUR = 'white';
var canvas = document.querySelector('canvas#board');
canvas.setAttribute('width', SCREEN_WIDTH);
canvas.setAttribute('height', SCREEN_HEIGHT);
var surface = canvas.getContext('2d');