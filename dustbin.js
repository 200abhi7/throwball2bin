class Dustbin{
    constructor(x,y,width,height){
    var options = {
        isStatic : true

        }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.x = x
    this.y = y
    this.width = width
    this.height = height;
    this.image = loadImage("dustbingreen.png")
    /*this.leftBody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.dustbinheight)
    this.rightBody = Bodies.rectangle(this.dustbinwidth,this.dustbinheight)
    this.bottomBody = Bodies.rectangle(this.dustbinwidth,this.dustbinheight);*/


 //   this.leftBody.velocityX = 0

    World.add(world,this.body)
   /*World.add(world,this.bottomBody)
    World.add(world,this.rightBody)*/

    }
   
      
        display(){
            var pos = this.body.position
            push();
            translate(pos.x,pos.y)
            
          angleMode(RADIANS)
         // rotate(this.angle);

          imageMode (CENTER)
           image(this.image,0,0,this.width,this.height);

           
           
            
            
            pop();
        }
        
      }
















