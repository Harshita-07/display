const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  polygonImg = loadImage("hexagon.png")
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  stand1 = new Ground(width/2 +100, 300, 200, 20);

  polygon = Bodies.circle(50, 200, 20)
  World.add(world, polygon)
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40)
  slingshot = new SlingShot(this.polygon, {x:100, y:200});


}

function draw() {
  background('black'); 
  Engine.update(engine);

  ground.display();
  stand1.display();
  polygon.display();

  
  drawSprites();
}