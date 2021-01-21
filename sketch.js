const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var world,engine;	
var bin1;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new bins(750,450,20,100);
	bin2 = new bins(1080,450,20,100);
	bin3 = new bins(950,450,350,20);


	ground = new ground(560,height,1500,20);
	World.add(world,ground);

	paperObject = new paper(150,550,40);

	Engine.run(engine);


}


function draw() {
  background(0);


 Engine.update(engine);
 keyPressed();

 
 bin1.display();
 bin2.display();
 bin3.display();
 ground.display();
 paperObject.display();

}
 function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:105,y:-105})
	}

	
}


