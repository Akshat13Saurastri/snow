class Snow{
    constructor(x,y,r){
    
        var options={
        friction:0.5,
        density:0.8

        }
this.snowImg=loadImage('snow5.webp')
    this.body=Bodies.circle(x,y,r,options)
    this.x=x;
    this.y=y;
    this.r=r;
    World .add(world,this.body)
    }

    display(){
    var pos=this.body.position
    var rand=Math.round(random(100,1100))
    pos.x=rand;
    //translate (pos.x,pos.y);
    //image (this.snowImg,0,0,5,5)
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5,5);
    
    }
}