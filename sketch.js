const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,paper;

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;
  ground = new Ground(500,height,1000,20);
  paper = new Paper(200,350)

  wall1 = new Block(700,350,20,100);
  wall1.shapeColor="green";
  wall2 = new Block(800,height,200,20);
  wall2.shapeColor="green";
  wall3 = new Block(900,350,20,100);
  wall3.shapeColor="green";

	Engine.run(engine);
  
}

function draw() {
  background("black");
Engine.update(engine)
  rectMode(CENTER);
  wall3.display();
  wall2.display();
  wall1.display();
ground.display();
paper.display();
  drawSprites();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:180})
 }
}