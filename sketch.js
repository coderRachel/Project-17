var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //create monkey sprite
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  //create ground sprite
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  //create groups
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
  
}

function draw() {
  background("white");
  
  //making the ground move
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  //making the monkey jump
  if(keyDown("space") && monkey.y>=200){
    monkey.velocityY=-12;
  }
  
  //giving gravity
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
  
  //display survival time
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+score, 100,50);
  
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(400,150,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.100;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-8;
    banana.setLifetime=100;
    
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.setLifetime=200;
    obstacle.scale=0.100;
    
    obstacleGroup.add(obstacle);
  }
}


