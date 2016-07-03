//constants
IMAGE_SIZE = 320;

//initialization
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img = document.getElementById("animation");
var x = 0;
var y = 0;

//variables
var frame = 0;

ctx.drawImage(img, frame*IMAGE_SIZE, 0, IMAGE_SIZE, IMAGE_SIZE, x, y, IMAGE_SIZE/2, IMAGE_SIZE/2);

document.addEventListener("keypress", function(e){
  frame+=1;
  if(frame>5)
    frame= 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  switch(e.key){
    case 'a':
      moveLeft();
      break;
    case 'd':
      moveRight();
      break;
    case 'w':
      moveUp();
      break;
    case 's':
      moveDown();
      break;
    default: break;
  }

  //drawImage(img, imageX, imageY, width, height, canvasX, canvasY, canvasWidth, canvasHeight);
  ctx.drawImage(img, frame*IMAGE_SIZE, 0, IMAGE_SIZE, IMAGE_SIZE, x, y, IMAGE_SIZE/2, IMAGE_SIZE/2);
});

function moveLeft() {
  x -= 10;
}

function moveRight() {
  x+=10;
}

function moveUp() {
  y-=10;
}

function moveDown() {
  y+=10;
}
