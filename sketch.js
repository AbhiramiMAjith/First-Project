var ball

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20)
  ball.shapeColor = "red"
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyDown("left")){
    ball.x -= 5
  }
  if (keyDown("right")){
    ball.x += 5
  }  
  if (keyDown("up")){
    ball.y -= 5
  }
  if (keyDown("down")){
    ball.y += 5
  }
}




