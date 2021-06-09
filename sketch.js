var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var i = 0; i <=width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for(var j = 75; j<=width; j=j+50) {
  plinkos.push(new Plinko(j,275))
  }
  //create 4th row of plinko objects
   for(var j = 50; j<=width; j=j+50){
   plinkos.push(new Plinko(j,375))
   }

  //create particle objects
  
    ball1 = new Particle(200,200,10);
    ball2 = new Particle(200,210,10);
    ball3 = new Particle(200,220,10);
    ball4 = new Particle(200,230,10);
    ball5 = new Particle(200,240,10);
    ball6 = new Particle(200,250,10);
   
   // for ()

   Engine.run(engine);


}
 


function draw() {
  background("black");
  textSize(20)
  rectMode(CENTER)
  
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();   
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
    

   
  //display the divisions
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  } 

  ground.display()
  
}