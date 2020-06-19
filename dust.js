class dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 213;
        this.wallThickness = 20;
        this.image = loadImage("dustbingreen.png");
        this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
        this.leftwallbody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
        this.rightwallbody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
    World.add(world,this.bottombody)
    World.add(world,this.rightwallbody)
    World.add(world,this.leftwallbody)
    
    
    }
    display(){
        var posbottom = this.bottombody.position;
        var posleft = this.leftwallbody.position;
        var posright = this.rightwallbody.position;
        rectMode(CENTER);
        stroke(230);
        fill(230);
        rect(posright.x,posright.y,this.wallThickness,this.dustbinHeight);

        rectMode(CENTER);
       fill(230);
        rect(posleft.x,posleft.y,this.wallThickness,this.dustbinHeight);

        rectMode(CENTER);
        fill(230);
       image(this.image,posbottom.x-100,posbottom.y-this.dustbinHeight/2-100,this.dustbinWidth,this.dustbinHeight);


    }

}