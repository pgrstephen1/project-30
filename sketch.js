const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var box1, box2, box3, bo4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25;
var ground1, ground2;
var polygon;
var slingshot;

function setup() {
	createCanvas(800,500);
	
	engine = Engine.create();
	world = engine.world;

ground1 = new Ground(390,300,230,10);
ground2 = new Ground(600,225,160,10);

polygon = new Polygon(75,275,30,30);

slingshot = new Slingshot(this.polygon,{x:75, y:275});

box1 = new Box(300,275,30,40);
box2 = new Box(330,275,30,40);
box3 = new Box(360,275,30,40);
box4 = new Box(390,275,30,40);
box5 = new Box(410,275,30,40);
box6 = new Box(440,275,30,40);
box7 = new Box(470,275,30,40);
box8 = new Box(330,235,30,40);
box9 = new Box(360,235,30,40);
box10 = new Box(390,235,30,40);
box11 = new Box(450,235,30,40);
box12 = new Box(450,235,30,40);
box13 = new Box(360,195,30,40);
box14 = new Box(390,195,30,40);
box15 = new Box(420,195,30,40);
box16 = new Box(390,155,30,40);
box17 = new Box(600,200,30,40);
box18 = new Box(570,200,30,40);
box19 = new Box(540,200,30,40);
box20 = new Box(630,200,30,40);
box21 = new Box(660,200,30,40);
box22 = new Box(600,160,30,40);
box23 = new Box(570,160,30,40);
box24 = new Box(630,160,30,40);
box25 = new Box(600,120,30,40);

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("brown");

  drawSprites();

ground1.display();
ground2.display();

polygon.display();

slingshot.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	this.slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		this.slingshot.attach(polygon.body);
	}
}