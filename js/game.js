//constants
IMAGE_SIZE = 320;
MILLISECONDS_PER_FRAME = 30;
NUM_FRAMES = 2;
BACKGROUND_WIDTH = 1920;
BACKGROUND_HEIGHT = 1200;

//initialization
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var character = document.getElementById("animation");
var background = document.getElementById("background");
var score = document.getElementById("score");
var x_distance = 0;
var speed = 1;

var char_x = 0;
var char_y = 0;
var background_x = 0;
//background_x+=200;
var background_y = 0;
var movingLeft = false, movingRight = false, movingUp = false, movingDown = false;


//variables
var frame = 0;

setInterval(draw, MILLISECONDS_PER_FRAME);

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(movingLeft){
    moveLeft();
  }
  if(movingRight){
    moveRight();
  }
  if(movingUp){
    moveUp();
  }
  if(movingDown){
    moveDown();
  }
  if(background_x<=-BACKGROUND_WIDTH){
    background_x+=BACKGROUND_WIDTH;
  }

  score.innerHTML = "Score: " + x_distance/50;

  //drawImage(img, imageX, imageY, width, height, canvasX, canvasY, canvasWidth, canvasHeight);
  ctx.drawImage(background, 0, BACKGROUND_HEIGHT-canvas.height, BACKGROUND_WIDTH, canvas.height, background_x, 0, BACKGROUND_WIDTH, canvas.height);
  ctx.drawImage(background, 0, BACKGROUND_HEIGHT-canvas.height, BACKGROUND_WIDTH, canvas.height, background_x+BACKGROUND_WIDTH, 0, BACKGROUND_WIDTH, canvas.height);
  ctx.drawImage(character, frame*IMAGE_SIZE, 0, IMAGE_SIZE, IMAGE_SIZE, char_x, char_y, IMAGE_SIZE/2, IMAGE_SIZE/2);

}
document.addEventListener("keypress", function(e){

  switch(e.key){
    case 'a':
      movingLeft = true;
      break;
    case 'd':
      movingRight = true;
      break;
    case 'w':
      movingUp = true;
      break;
    case 's':
      movingDown = true;
      break;
    default: break;
  }
});

document.addEventListener("keyup", function(e) {
  switch(e.key){
    case 'a':
      movingLeft = false;
      break;
    case 'd':
      movingRight = false;
      break;
    case 'w':
      movingUp = false;
      break;
    case 's':
      movingDown = false;
      break;
    default: break;
  }
});

function updateFrame(){
  frame+=1;
  if(frame>NUM_FRAMES-1)
    frame= 0;
}
function moveLeft() {
  if(x_distance<=0)
    return;
  if(char_x<canvas.width/3 && !(x_distance<=canvas.width/3)){
    background_x+=speed*5;
  }
  else{
    char_x -=speed*5;
  }
  x_distance-=speed*5;
  updateFrame();
}

function moveRight() {
  if(char_x>2*canvas.width/3){
    background_x-=speed*5;
  }
  else{
    char_x+=speed*5;
  }
  x_distance+=speed*5;
  updateFrame();
}

function moveUp() {
  if(char_y<0)
    return;
  char_y-=speed*5;
  updateFrame();
}

function moveDown() {
  if(char_y+70>canvas.height)
    return;
  char_y+=speed*5;
  updateFrame();
}
