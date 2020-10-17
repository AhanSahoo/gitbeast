class Bird{

    constructor(x,y,w,h){

        var options = {
            restitution: 0,
            friction: 0,
            density: 1
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.width = w
        this.height = h
    }
    display(){
        var position= this.body.position
        var angle= this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)
        position.x= mouseX
        position.y= mouseY
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        pop()

    }







}