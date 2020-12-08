
var car,wall;


function setup() {
  createCanvas(800,400);
  fix=createSprite(400, 100, 20, 25);
  fix.shapeColor="blue";
  move=createSprite(400,800,36,28);
  move.shapeColor="blue";
  car=createSprite(100,200,50,50)
  car.shapeColor="green"
  car.velocityX=3;
  wall=createSprite(800,200,50,100);
  wall.shapeColor="grey";
}

function draw() {
  background(255,255,255);  

  move.x=World.mouseX
  move.y=World.mouseY

  console.log(fix.x-move.x)
  if(isTouching(move,fix)){
    move.shapeColor="red"
    fix.shapeColor="red"
  }
  else{
    move.shapeColor="blue"
    fix.shapeColor="blue"
  }
  bounceOff(car,wall);
  drawSprites();

}

