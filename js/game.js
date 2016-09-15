//periodically call the "draw" function every MILLISECONDS_PER_FRAME
setInterval(draw, MILLISECONDS_PER_FRAME);

class Enemy {
  constructor(){
    //randomly pick either an octopus or enemyfish with 50% probability (Math.random() returns float between 0 and 1)
    this.img = document.getElementById(Math.random() < 0.5 ? "octopus" : "enemyfish");
    this.scale = 0.5;
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.x_vel = (Math.random() < 0.5 ? 1 : -1);
    this.y_vel = (Math.random() < 0.5 ? 1 : -1);
    }
    move () { // This looks creepy af let's fix it okay GO
      this.x_vel = Math.random() < 0.01 ? -1*this.x_vel : this.x_vel;
      this.y_vel = Math.random() < 0.01 ? -1*this.y_vel : this.y_vel;
      if(this.x<0)
        this.x_vel=1;
      /*if(this.x>canvas.width-img.width)
        this.x_vel=-1;*/
      if(this.y<0)
        this.y_vel=1;
      if(this.y>canvas.height-this.img.height)
        this.y_vel=-1;

      this.x+=this.x_vel;
      this.y+=this.y_vel;
    }
}

class Bubble {
  constructor() {
    // Bubble is shot from character's position
    this.x = char_x + (CHARACTER_SIZE/2);
    this.y = char_y + (CHARACTER_SIZE/2-10);
    this.dir = dir;
    this.img = document.getElementById("bubble");
  }

  move () {
    if(this.dir=="right")
      this.x += 10;
    if(this.dir=="left")
      this.x -= 10;
  }
}

//called periodically every MILLISECONDS_PER_FRAME milliseconds
function draw() {

  // Continue gameplay
  if( !gamePaused && numLives > 0) {

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

    score.innerHTML = "Score: " + enemiesKilled*10;
    lives.innerHTML = "Lives: " + numLives;

    /* rotating background implemented by drawing 2 background images back to back, and rotating them forward or backward as you move */

    //drawImage(img, imageX, imageY, width, height, canvasX, canvasY, canvasWidth, canvasHeight);
    ctx.drawImage(background, 0, BACKGROUND_HEIGHT-canvas.height, BACKGROUND_WIDTH, canvas.height, background_x, 0, BACKGROUND_WIDTH, canvas.height);
    ctx.drawImage(background, 0, BACKGROUND_HEIGHT-canvas.height, BACKGROUND_WIDTH, canvas.height, background_x+BACKGROUND_WIDTH, 0, BACKGROUND_WIDTH, canvas.height);

    //enemy logic
    for(var i = 0; i < enemyList.length; i++){
      enemyList[i].move();
      ctx.drawImage(enemyList[i].img, 0, 0, enemyList[i].img.width, enemyList[i].img.height,
          enemyList[i].x, enemyList[i].y, enemyList[i].img.width*enemyList[i].scale,
          enemyList[i].img.height*enemyList[i].scale);
    }

    // Bubble logic
    for(var i = 0; i < bubbleList.length; i++){
      bubbleList[i].move();
      ctx.drawImage(bubbleList[i].img, 0, 0, bubbleList[i].img.width,
          bubbleList[i].img.height, bubbleList[i].x, bubbleList[i].y,
          bubbleList[i].img.width/2, bubbleList[i].img.height/2);
    }

    //collision bubbles and enemies
    for(var i = 0; i < bubbleList.length; i++){
      for(var j = 0; j < enemyList.length; j++){
        if(bubbleList[i].x>enemyList[j].x&&bubbleList[i].x<enemyList[j].x+enemyList[j].img.width*enemyList[j].scale
            && bubbleList[i].y>enemyList[j].y&&bubbleList[i].y<enemyList[j].y+enemyList[j].img.height*enemyList[j].scale){
          bubbleList.splice(i, 1);
          enemyList.splice(j,1);
          i--;
          j--;
          enemiesKilled++;
        }
      }
    }

    //collision enemy and character
    for(var i = 0; i < enemyList.length; i++){
      if(enemyList[i].x<char_x+CHARACTER_SIZE && enemyList[i].x+enemyList[i].img.width*enemyList[i].scale>char_x
          &&enemyList[i].y<char_y+CHARACTER_SIZE && enemyList[i].y+enemyList[i].img.height*enemyList[i].scale>char_y){
        numLives--;
        enemyList.splice(i,1);
        i--;
      }
    }

    //draw character last so it's on top
    ctx.drawImage(character, frame*character.width/NUM_FRAMES, 0,
        character.width/NUM_FRAMES, character.height, char_x, char_y, CHARACTER_SIZE, CHARACTER_SIZE);

    // Game is paused
  } else if( gamePaused ) {
    ctx.fillStyle = "white";
    ctx.font = "bold 50px Arial";
    ctx.fillText("PAUSED", canvas.width/2 -100, canvas.height/2 + 25);
  }  

  // GAME OVER
  else{
    lives.innerHTML = "Lives: " + numLives;
    ctx.fillStyle = "white";
    ctx.font = "bold 50px Arial";
    ctx.fillText("GAME OVER", canvas.width/2-150, canvas.height/2 + 25);
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
      break;
    case 'p':
      gamePaused = !gamePaused;
      break;
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
  if(dir=="left"){
    frame+=1;
    if(frame>(NUM_FRAMES-1)/2)
      frame=0;
  }
  if(dir=="right"){
    frame+=1;
    if(frame>NUM_FRAMES-1)
      frame=2;
    }
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
  dir="left";
  if(x_distance<=0)
    return;
  if(char_x<canvas.width/3 && !(x_distance<=canvas.width/3)){
    shiftBackgroundObjects("right");
  }
  else{
    char_x -=speed*5;
  }
  x_distance-=speed*5;
  updateFrame();
}

function moveRight() {
  dir="right";
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
  if(char_y+CHARACTER_SIZE>canvas.height)
    return;
  char_y+=speed*5;
  updateFrame();
}
