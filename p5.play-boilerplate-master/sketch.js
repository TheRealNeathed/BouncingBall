var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  fixedRect.velocityY = -3
  movingRect = createSprite(400,200,80,30);
  movingRect.velocityY = 3
  movingRect.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);    
  
  if (IsTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
  
}



