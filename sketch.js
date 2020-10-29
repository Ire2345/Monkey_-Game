
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,20)
  monkey.scale=0.15
  monkey.addAnimation("running",monkey_running)
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
  console.log(ground.x)
}


function draw() {
background(220)
  
  
  if(keyDown("space")){
    monkey.velocityY=-15
     
    
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(ground)
  
  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+ survivalTime, 100,50);
  
  
  
  
  food();
  obstacles();
  
  drawSprites();
}

function food(){
   if (frameCount % 80 === 0) {
    banana=createSprite(90,200,10,10);
  banana.scale=0.2;
    banana.y=Math.round(random(120,200));
    banana.addImage("banana",bananaImage)
     banana.velocityX=-1
     banana.lifetime=134   
   }
  
  
  
  
  
  
}

function obstacles(){
  if (frameCount%300===0){
    obstacle=createSprite(250,315,20,20);
     obstacle.scale=0.2;
    obstacle.lifetime=200;
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-4
  }
  
  
  
  
  
}























































































































