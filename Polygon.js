class Polygon {
    constructor(x,y,r){
        this.body = Bodies.circle(50,200,20);
        this.r = 20;
        World.add(world,this.body);
        this.image = loadImage('polygon.png');
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 40, 40);
    }
}