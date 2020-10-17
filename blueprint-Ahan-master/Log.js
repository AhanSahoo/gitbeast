class Log{

 constructor(x,y,h,angle){

    var options={

            restitution: 0,
           
            density: 1
    }
        this.body=Bodies.rectangle(x,y,20,h,options)
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
        this.width= 20
        this.height= h

        
 }
        display(){
            var position=this.body.position;
            var angle=this.body.angle
            push()
            translate(position.x,position.y)
            rotate(angle)
            rectMode(CENTER);
            rect(0,0,this.width,this.height)
            pop()
        }
 



}