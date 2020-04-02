const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box1.shapeColour="blue"
    box2 = new Box(240,100,50,100);
    box2.shapeColour="pink"
    box3 = new Box(280,50,50,150);
    box4 = new Box(320,25,50,200);
    box5 = new Box(360,10,50,250);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    console.log(box3.body.position.x);
    console.log(box3.body.position.y);
    console.log(box3.body.angle);
    console.log(box4.body.position.x);
    console.log(box4.body.position.y);
    console.log(box4.body.angle);
    console.log(box5.body.position.x);
    console.log(box5.body.position.y);
    console.log(box5.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
}