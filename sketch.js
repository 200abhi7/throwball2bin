//var left,right,bottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint

r = this.radius;

function setup() {
createCanvas(700,700);
engine = Engine.create();
world = engine.world;
ground = new Ground(width,700,2000,10);

dustbinObject = new Dustbin(660,630,200,200);

ball = new PaperBall(300,400,70);
//ball.collide = "ground";

launcher = new Launcher(ball.body,{x:300,y:400});


Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(100);
  ball.display();

  ground.display();

  dustbinObject.display();

  launcher.display();
  
 drawSprites();
  

}	
function mouseDragged (){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
launcher.fly()  
}




