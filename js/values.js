//constants
IMAGE_SIZE = 320;
GIF_SIZE = 64;
MILLISECONDS_PER_FRAME = 30;
NUM_FRAMES = 2;
BACKGROUND_WIDTH = 1920;
BACKGROUND_HEIGHT = 1200;
ENEMY_SPAWN_RATE = 100;

//variables
var canvas = document.getElementById("myCanvas");
var character = document.getElementById("animation");
var background = document.getElementById("background");
var score = document.getElementById("score");
var ctx = canvas.getContext("2d"); //used as object of drawImage function
var x_distance = 0; //displacement from start
var speed = 1; //speed of character
var char_x = 0; //x position of char on canvas
var char_y = 0; //y position of char on canvas
var background_x = 0; //x coordinate to draw background image from - goes from 0 to -BACKGROUND_WIDTH
var movingLeft = false, movingRight = false, movingUp = false, movingDown = false; //whether character is moving
var frame = 0; //frame of the character animation
var enemyList = []; //list of enemies
var enemycounter = 0; //timer to spawn enemies periodically - counts from 0 to ENEMY_SPAWN_RATE then spawns enemy and resets
