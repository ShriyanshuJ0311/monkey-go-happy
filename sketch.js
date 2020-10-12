
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var invisibleGround
var background,backgroundImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  backgroundImage=loadImage("Amazon-Rain-Forest.jpg")
 
}



function setup() {
  createCanvas(600,400)
  
  
  monkey=createSprite(60,300,20,20);
   monkey.addAnimation("running",monkey_running);
  monkey.scale=0.13
  //monkey.debug=true

  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  score=0

  
  invisibleGround=createSprite(0,360,300,20)
  invisibleGround.visible=false
}


function draw() {
  background(backgroundImage);
  

  
  if(keyDown("space")&&monkey.y>=200){
  monkey.y=monkey.y-25;   
     
  
  }
  monkey.y=monkey.y+5;
  monkey.collide(invisibleGround);
  
  if (monkey.isTouching(bananaGroup)){
score=score+2 
    bananaGroup.destroyEach();
  }
  
spawnBananas();
  
  
  fill("red")
  textSize(24)
  text("survival time : "+score,200,20)
  
spawnObstacles();
if (obstacleGroup.isTouching(monkey)){
obstacleGroup.setVelocityXEach(0);
bananaGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1);
  bananaGroup.setLifetimeEach(-1);
  monkey.setVelocityX=0;
  monkey.setVelocityY=0;
} 
  drawSprites();
}
function spawnBananas(){
if (frameCount%200===0){
  banana=createSprite(650,150,20,20)
  banana.addImage("banana",bananaImage)
  banana.velocityX=-3
  banana.scale=0.1
   banana.lifetime=(300)
  bananaGroup.add(banana);
}

}

function spawnObstacles(){
if (frameCount%120===0){
obstacle=createSprite(610,315,20,20)
  obstacle.addImage("obstacle",obstacleImage)
  obstacle.scale=0.15
  obstacle.velocityX=-3
  obstacle.lifetime=(300)
 obstacleGroup.add(obstacle);
}
  
}

