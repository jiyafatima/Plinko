class Particle{
  constructor(x,y,n){

   var options ={
       restitution:0.4,
}

    this.n=n;
    this.body = Bodies.circle(x,y,this.n,options);
    this.color=color(random(0,225), random(0,225), random(0,225));
    World.add(world, this.body);


  }
 display(){
      
      var pos = this.body.position;
      var angle = this.body.angle;

      push()
      translate(pos.x,pos.y);
      rotate(angle)
      //imageMode(CENTER);
      noStroke();
      fill(this.color)
      ellipseMode(RADIUS)
      ellipse(0,0,this.n,this.n);
      pop()
   };


 }
