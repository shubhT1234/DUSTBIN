const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var world;
var garb,sw;
var box1, pig1;
var bin1,bin2,bin3,ground;
var backgroundImg;

function preload(){
sw=loadImage("bin.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bin1=new Bin(562,310,10,80);
    bin2=new Bin(570,385,80,10);
    bin3=new Bin(642,310,10,80);
    ground=new Ground(1,390,700,15)
    garb=new Ball(100,380,40,40);
}

function draw(){
    background("white");
    Engine.update(engine);
    bin1.display();
    bin1.visible=false

    bin2.display();
    bin3.display();
    
     ground.display();
     garb.display();
    image(sw,570,310,80,80)

     if(keyDown("up")){
         Matter.Body.applyForce(garb.body,garb.body.position,{x:8,y:-7})
     }
}