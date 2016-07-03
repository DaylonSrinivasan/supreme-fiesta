//constants
IMAGE_SIZE = 320;
MILLISECONDS_PER_FRAME = 30;

//initialization
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img = document.getElementById("animation");

var x = 0;
var y = 0;
var movingLeft = false, movingRight = false, movingUp = false, movingDown = false;

//variables
var frame = 0;

setInterval(draw, MILLISECONDS_PER_FRAME);
ctx.drawImage(img, frame*IMAGE_SIZE, 0, IMAGE_SIZE, IMAGE_SIZE, x, y, IMAGE_SIZE/2, IMAGE_SIZE/2);

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

  //drawImage(img, imageX, imageY, width, height, canvasX, canvasY, canvasWidth, canvasHeight);
  ctx.drawImage(img, frame*IMAGE_SIZE, 0, IMAGE_SIZE, IMAGE_SIZE, x, y, IMAGE_SIZE/2, IMAGE_SIZE/2);

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
  if(frame>5)
    frame= 0;
}
function moveLeft() {
  x -= 10;
  updateFrame();
}

function moveRight() {
  x+=10;
  updateFrame();
}

function moveUp() {
  y-=10
  updateFrame();
}

function moveDown() {
  y+=10;
  updateFrame();
}
