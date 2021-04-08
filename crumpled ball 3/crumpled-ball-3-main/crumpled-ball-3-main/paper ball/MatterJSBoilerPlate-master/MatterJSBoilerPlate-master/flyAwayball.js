class BallSlingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.04
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
       fly (){
          this.slingshot.bodyA = null;
    }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA;
            var pointB = this.slingshot.bodyB;

            Line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}