
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
 
  monkey = createSprite(30,360,40,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  
  
  
  ground=createSprite(380,390,800,10);
  ground.velocityX=-2;
 
  survivalTime = 0;
}


function draw() {
  background("white");
  
  text("SURVIVAL TIME: "+ survivalTime,100,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= survivalTime+Math.round(getFrameRate()/60);

  if(ground.x<0){
    ground.x=ground.width/2;
  }
   
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY= monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  
  
 
 
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
  
}

function spawnBananas(){
   if(frameCount%80 === 0){
     banana=createSprite(600,130,40,10);
     banana.addImage(bananaImage);
     banana.velocityX=-3;
     banana.scale=0.1;
     banana.lifetime=210;
     
   banana.y=Math.round(random(120,200));  
   }
  
   
}

function spawnObstacles(){
  if(frameCount%280 === 0){
    obstacle=createSprite(600,370,40,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.scale=0.1;
    
     

  
  monkey.depth=obstacle.depth;
  monkey.depth=monkey.depth+1;
 }
}


