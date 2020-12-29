
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	

	roof = new Roof(width/2,height/4,width/7,20);
bobdiameter=40;

startbobpositionX=width/2;
startbobpositionY=height/4+ 500;

	bob1 = new bob(startbobpositionX-bobdiameter*2,startbobpositionY ,bobdiameter);
	bob2 = new bob(startbobpositionX-bobdiameter,startbobpositionY ,bobdiameter);
	bob3 = new bob(startbobpositionX,startbobpositionY ,bobdiameter);
	bob4 = new bob(startbobpositionX+bobdiameter,startbobpositionY ,bobdiameter);
	bob5 = new bob(startbobpositionX+bobdiameter*2,startbobpositionY ,bobdiameter);

	r1 = new Rope(bob1.body,roof.body,-bobdiameter*2,0)
	r2 = new Rope(bob2.body,roof.body,-bobdiameter*1,0)
	r3 = new Rope(bob3.body,roof.body,-bobdiameter*0,0)
	r4 = new Rope(bob4.body,roof.body,bobdiameter*1,0)
	r5 = new Rope(bob5.body,roof.body,bobdiameter*2,0)

	constraint1 = {
		bodyA : bob1.body,
		bodyB : roof.body,
		pointB : {x: -bobdiameter*2,y:0}
	}

	constraint2 = {
		bodyA : bob2.body,
		bodyB : roof.body,
		pointB : {x: -bobdiameter,y:0}
	}

	constraint3 = {
		bodyA : bob3.body,
		bodyB : roof.body,
		pointB : {x:0,y:0}
	}

	constraint4 = {
		bodyA : bob4.body,
		bodyB : roof.body,
		pointB : {x: bobdiameter,y:0}
	}

	constraint5 = {
		bodyA : bob5.body,
		bodyB : roof.body,
		pointB : {x: bobdiameter*2,y:0}
	}

	
	var p1 = Constraint.create(constraint1);
	var p2 = Constraint.create(constraint2);
	var p3 = Constraint.create(constraint3);
	var p4 = Constraint.create(constraint4);
	var p5 = Constraint.create(constraint5);

	World.add(world,p1);
	World.add(world,p2);
	World.add(world,p3);
	World.add(world,p4);
	World.add(world,p5);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(168,226,162);

  

 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 r1.display();
 r2.display();
 r3.display();
 r4.display();
 r5.display();

 



  
  
  drawSprites();
 
}

function keypressed(){
if (keycode === 32){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})




}




}

function drawLine (constraint){
bobBodyPosition = contraint.bodyA.position;
roofBodyPosition = constraint.bodyB.position;
roofBodyOffset = constraint.pointB;
roofBodyX = roofBodyPosition.x+roofBodyOffset.x;
roofBodyY = roofBodyPosition.y + roofBodyOffset.y;
line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);



}




