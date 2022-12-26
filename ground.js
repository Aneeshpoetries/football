class Ground{
    constructor(x,y,w,h){
        this.x=x
        this.w=w
        this.h=h
        this.y=y
        var groundOptions={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,groundOptions)
        World.add(world,this.body)

    }
    display(){
        var pos= this.body.position;
        push()
        rectMode(CENTER)
        translate(pos.x,pos.y)
        noStroke()
        fill("yellow")
        rect(0,0,this.w,this.h)
        pop()
        }

}
