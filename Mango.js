class Mango{
    constructor(x, y){
        var qualities = {
            isStatic: true,
            restitution: 0,
            friction:0.5
        }
        this.bodies = Bodies.circle(x, y, 20, qualities)
        this.r =20;
        this.image = loadImage("mango.png")
        World.add(world, this.bodies)
    }
    display(){
        imageMode(CENTER)
        var pos = this.bodies.position
        image(this.image,pos.x, pos.y, this.r, this.r)
    }
}