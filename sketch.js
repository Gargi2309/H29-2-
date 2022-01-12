const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var stand,stand2;
var ground;
var polygon,slingshot;
var polygon_image

function preload() {
    
polygon_image = loadImage("polygon.png");



}


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  polygon = Bodies.circle(50,200,20) ; 
  

World.add(world,polygon);

slingshot = new SlingShot(this.polygon,{x:100,y:200});

stand= new Ground(300,300,150,20);
stand2 = new Ground(600,200,150,20);

box1 = new Block(245,275,30,30);
box2 = new Block(275,275,30,30);
box3 = new Block(305,275,30,30);
box4 = new Block(335,275,30,30);

box5 = new Block(250,245,30,30);
box6 = new Block(280,245,30,30);
box7 = new Block(310,245,30,30);

box8 = new Block(260,215,30,30);
box9 = new Block(290,215,30,30);

box10 = new Block(280,185,30,30);


box11 = new Block(550,175,30,30);
box12 = new Block(580,175,30,30);
box13 = new Block(610,175,30,30);
box14 = new Block(640,175,30,30);1

box15 = new Block(565,145,30,30);
box16 = new Block(595,145,30,30);
box17 = new Block(625,145,30,30);

box18 = new Block(580,115,30,30);
box19 = new Block(610,115,30,30);

box20 = new Block(595,85,30,30);

ground = new Ground(400,380,800,20);


}

function draw(){
    background("pink");
    Engine.update(engine);
 
imageMode(CENTER);
image(polygon_image,polygon.position.x,polygon.position.y,40,40);



stand.display();
stand2.display();

fill("blue");
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

fill("green")
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

ground.display();
slingshot.display();


}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
