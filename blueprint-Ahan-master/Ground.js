class Ground{
    constructor(x,y,w,h){
        var option = {
        isStatic: true 

        }
        this.body = Bodies.rectangle(x,y,w,h,option)
        World.add(world,this.body)
        this.width = w;
        this.height= h;
    }
    display(){
        var position = this.body.position;
        fill("white")
        rectMode(CENTER)
        rect(position.x,position.y,this.width,this.height)
    }





}