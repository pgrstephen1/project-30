class Box{
    constructor(x,y,width,height){
        var options = {
            restitution : 1,
            density : 1,
            friction : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
       console.log(this.body.speed);
        if(this.body.speed < 3){
            var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeigth(4);
        stroke("black")
        fill("lightblue");
        pop();
    }

    else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
    }
}
}
