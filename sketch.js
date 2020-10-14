const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300;
var vParticle, particle;
var turn;
var gameState= "start"

var score=0
var turn=0


function setup() {
  createCanvas(645,800);
  engine= Engine.create()
  world=engine.world

 

  for(var j=30; j<=width;j=j+50){
    var p= new Plinko(j,75)
    plinkos.push(p)
  }
  
  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,170))
  }

  for(var j=30; j<=width;j=j+50){
    plinkos.push(new Plinko(j,270))
  }

  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,370))
  }

  
  
  for(var k=0; k<=width; k=k+80){
   divisions.push(new Division (k,800-divisionHeight/2,10,divisionHeight))
  }

  ground= new Ground(320,790,640,20)
}

// setup over

function draw() {
  background("black"); 
  Engine.update(engine) 

  textSize(30)
  text("SCORE:"+ score, 20,50)
  text("100",15,520)
  text("200",15+80,520)
  text("300",15+160,520)
  text("500",15+240,520)
  text("300",15+320,520)
  text("200",15+400,520)
  text("100",15+480,520)
  text("500",15+560,520)


  ground.display()
  for(var i=0; i<divisions.length; i++){
    divisions[i].display()
  }
  for( var h=0; h<plinkos.length; h++){
    plinkos[h].display()
  }

  // for(var j=0; j < particles.length;j++){
  //   particles[j].display()
  // }
  // if(frameCount%60===0){
  //   particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  // }

  if(particle){
    particle.display()

    particle!=null

    if(particle.body.position.y>760){
      console.log("760y")

      if(particle.body.position.x<80 && particle.body.position.x>0){
        score=score+100;
        console.log("100")
        particle= null
        if(turn>= 5) gameState="end"
        
      }
    }
  }  
    

  if(particle){
    particle.display()

    particle!=null
    if(particle.body.position.y>760){
      if(particle.body.position.x<160 && particle.body.position.x>80 ){
        score=score+200;
        console.log("200")
        particle= null
        if(turn>= 5) gameState="end"
      } 
    }
  }

  if(particle){
    particle.display()

    particle!=null
    if(particle.body.position.y>760){
      if(particle.body.position.x<240 && particle.body.position.x>160 ){
        score=score+300;
        console.log("300")
        particle= null
        if(turn>= 5) gameState="end"
      } 
    }
  }

  if(particle){
    particle.display()

    particle!=null
    if(particle.body.position.y>760){
      if(particle.body.position.x<320 && particle.body.position.x>240 ){
        score=score+500;
        console.log("500")
        particle= null
        if(turn>= 5) gameState="end"
      } 
    }
  }

  if(particle){
    particle.display()

    particle!=null
    if(particle.body.position.y>760){
      if(particle.body.position.x<400 && particle.body.position.x>320 ){
        score=score+300;
        console.log("300.1")
        particle= null
        if(turn>= 5) gameState="end"
      } 
    }
  }

  if(particle){
    particle.display()

    particle!=null
    if(particle.body.position.y>760){
      if(particle.body.position.x<480 && particle.body.position.x>400 ){
        score=score+200;
        console.log("200.1")
        particle= null
        if(turn>= 5) gameState="end"
      } 
    }
  }

  if(particle){
    particle.display()

    particle!=null
    if(particle.body.position.y>760){
      if(particle.body.position.x<560 && particle.body.position.x>480 ){
        score=score+100;
        console.log("100.1")
        particle= null
        if(turn>= 5) gameState="end"
      } 
    }
  }

  if(particle){
    particle.display()

    particle!=null
    if(particle.body.position.y>760){
      if(particle.body.position.x<640 && particle.body.position.x>560 ){
        score=score+500;
        console.log("500.1")
        particle= null
        if(turn>= 5) gameState="end"
      } 
    }
  }

  if(gameState==="end"){
    text("GAME OVER !", 200,230)
    text("Your score is :" + score, 180,330)
    console.log("over")
  }

}
// draw function over

function mouseReleased(){
  if(gameState=="start"){
    turn= turn+1
    particle= new Particle (mouseX,10,10,10)
  }

}