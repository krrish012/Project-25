const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pimg, dimg, dvar, pvar;

var ball,ground;
function preload() {
	dimg = loadImage("dustbin.png");
	pimg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	ball= Bodies.circle(200,100,20, {restitution: 0.3,friction:9,density:1.2});
	World.add(world,ball);
	
	pvar = createSprite(200, 100, 20,20);
	pvar.addImage(pimg);
	pvar.scale = 0.02;

	ground = Bodies.rectangle(width/2,height,1600,20,{isStatic:true});
	World.add(world,ground);
	
	//Create the Bodies Here.
	boxPosition=1200;
	boxY=640;

	dvar = createSprite(boxPosition+100, boxY+45-20, 200,20);
	dvar.addImage(dimg);
	dvar.scale = 0.5;

	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);
	boxleftSprite.visible = false;

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);
	boxBase.visible = false;

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);
	boxBottomBody.visible = false;

	boxLeftBody = Bodies.rectangle(boxBottomBody.x, boxBottomBody.y+100, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);
	boxLeftBody.visible = false;

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);
	boxleftSprite.visible = false;

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);
	boxRightBody.visible = false;

   Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  pvar.x = ball.position.x;
  pvar.y = ball.position.y;
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:100,y:-85});
  
	}
}
