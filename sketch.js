const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
var backImg;
function preload(){
  backImg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  snow=new Snow(100,10,5);
}


function draw() {
  background(backImg); 
  Engine.update(engine); 
  snow.display();
  drawSprites();
}