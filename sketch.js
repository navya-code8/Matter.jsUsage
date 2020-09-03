const world = Matter.World;
const  engine = Matter.Engine;
const body = Matter.Bodies;

var abWorld, abEngine, abBody;

var ground;


function setup() {
  createCanvas(800,400);

  abEngine = engine.create();
  abWorld = abEngine.world;

  var abBody_option = {
    restitution: 2.5

  }

  abBody = body.circle(200,200,60, abBody_option);
  world.add(abWorld, abBody);

  var ground_options =  {
    isStatic: true
  }

  ground = body.rectangle(400,350, 400,10, ground_options);
  world.add( abWorld, ground);


  console.log(abBody);
}

function draw() {
  background("black");  

  engine.update(abEngine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800,10);
  
  ellipseMode(RADIUS)
  ellipse(abBody.position.x, abBody.position.y, 60, 60);


  drawSprites();
}