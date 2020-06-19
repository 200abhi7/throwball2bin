class PaperBall {
    constructor(x,y,r){
var options ={
    isStatic : false,
    restitution:0.3,
    friction:0.5,
    density:0.5,
}

this.image = loadImage("paper.png")
    

this.body = Matter.Bodies.circle(x, y, r, options);
this.r = r;
this.x = x;
this.y = y;



World.add(world,this.body)


}
display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y)

   
    imageMode(CENTER);
    image(this.image,0,0,this.r)
 
   
    
    pop();
}
}

