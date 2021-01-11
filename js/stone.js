class Stone
{
    constructor(x,y,r)
    {
        var options = {
            isStatic : false,
            friction:1,
            density : 1.2,
            'restitution':0

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("Images/stone.png");
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);


    }
    display()
    {
        var stonepos = this.body.position;

        push()
        translate(stonepos.x, stonepos.y);
     
        imageMode(CENTER);
        ellipseMode(CENTER);
        
        fill(255,0,255)
        image(this.image,0,0,this.r*2, this.r*2);
        
        pop()
    }
}
