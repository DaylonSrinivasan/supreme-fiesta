
//periodically call the "draw" function every MILLISECONDS_PER_FRAME
setInterval(draw, MILLISECONDS_PER_FRAME);

class Enemy {
  constructor(){
    //randomly pick either an octopus or enemyfish with 50% probability (Math.random() returns float between 0 and 1)
    this.img = document.getElementById(Math.random() < 0.5 ? "octopus" : "enemyfish");
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    }
    move () { // This looks creepy af let's fix it okay GO
      this.x+= Math.random() < 0.5 ? -1 : 1;
      this.y+= Math.random() < 0.5 ? -1 : 1;
    }
}

class Bubble {
  constructor() {
    // Bubble is shot from character's position
    this.x = char_x + (IMAGE_SIZE/3);
    this.y = char_y + (IMAGE_SIZE/4);
    this.img = document.getElementById("bubble");
  }

  move () {
    // Bubble moves constantly to the right
    this.x += 10;
  }
}

//called periodically every MILLISECONDS_PER_FRAME milliseconds
function draw() {

  //spawns an enemy after ENEMY_SPAWN_RATE calls to draw
  enemycounter++;
  if(enemycounter==ENEMY_SPAWN_RATE){
    enemyList.push(new Enemy());
    enemycounter=0;
  }


  //clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //character movement
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


  //reset background_x to keep background rotating (after it reaches edge, set back to 0)
  if(background_x<=-BACKGROUND_WIDTH){
    background_x+=BACKGROUND_WIDTH;
  }

  score.innerHTML = "Score: " + x_distance/50;


  /* rotating background implemented by drawing 2 background images back to back, and rotating them forward or backward as you move */

  //drawImage(img, imageX, imageY, width, height, canvasX, canvasY, canvasWidth, canvasHeight);
  ctx.drawImage(background, 0, BACKGROUND_HEIGHT-canvas.height, BACKGROUND_WIDTH, canvas.height, background_x, 0, BACKGROUND_WIDTH, canvas.height);
  ctx.drawImage(background, 0, BACKGROUND_HEIGHT-canvas.height, BACKGROUND_WIDTH, canvas.height, background_x+BACKGROUND_WIDTH, 0, BACKGROUND_WIDTH, canvas.height);
  ctx.drawImage(character, frame*IMAGE_SIZE, 0, IMAGE_SIZE, IMAGE_SIZE, char_x, char_y, IMAGE_SIZE/2, IMAGE_SIZE/2);

  //enemy logic
  for(var i = 0; i < enemyList.length; i++){
    enemyList[i].move();
    ctx.drawImage(enemyList[i].img, 0, 0, enemyList[i].img.width, enemyList[i].img.height, enemyList[i].x, enemyList[i].y, enemyList[i].img.width/2, enemyList[i].img.height/2);
  }

  // Bubble logic
  for(var i = 0; i < bubbleList.length; i++){
    bubbleList[i].move();
    ctx.drawImage(bubbleList[i].img, 0, 0, bubbleList[i].img.width,
        bubbleList[i].img.height, bubbleList[i].x, bubbleList[i].y,
        bubbleList[i].img.width/2, bubbleList[i].img.height/2);
  }

}

//start moving
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
    case 'e':
      bubbleList.push(new Bubble());
    default: break;
  }
});

//stop moving
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

//set the character animation to the next frame
function updateFrame(){
  frame+=1;
  if(frame>NUM_FRAMES-1)
    frame= 0;
}


/*this method shifts all background objects (background and enemies) in
  the opposite direction the character is moving, so that it appears the
  character continues to move when in fact the character remains in the
  same place on the screen */
function shiftBackgroundObjects(direction){
  switch (direction) {
    case "right":
      background_x+=speed*5;
      for(var i = 0; i < enemyList.length; i++){
        enemyList[i].x+=speed*5;
      }
      break;
    case "left":
      background_x-=speed*5;
      for(var i = 0; i < enemyList.length; i++){
        enemyList[i].x-=speed*5;
      }
      break;
    default: break;

  }
}

/* move functions */
function moveLeft() {
  if(x_distance<=0)
    return;
  if(char_x<canvas.width/3 && !(x_distance<=canvas.width/3)){
    shiftObjects("right");
  }
  else{
    char_x -=speed*5;
  }
  x_distance-=speed*5;
  updateFrame();
}

function moveRight() {
  if(char_x>2*canvas.width/3){
    shiftBackgroundObjects("left");
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
