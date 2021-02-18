class Slingshot{
constructor(b1,pointB){
    var options={
        bodyA:b1,
        pointB:pointB,
        stiffness:0.05,
        Length:10
    
        }
        this.pointB=pointB;
   this.chain=Constraint.create(options);
    World.add(world, this.chain);

    
}

fly(){
this.chain.bodyA=null;
}
display(){
if (this.chain.bodyA){
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(5);
    line (pointA.x,pointA.y,pointB.x,pointB.y);
}


    
}
}