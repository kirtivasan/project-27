
var monkey , monkey_running
var banana ,bananaImage, bGroup, obstacle, obstacleImage, oGroup;
var FoodGroup, obstacleGroup;
var Banana_score;
var ground;
var PLAY=1,END=0,gamestate=1;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png",
                                 "sprite_1.png",
                                 "sprite_2.png",
                                 "sprite_3.png",
      "sprite_4.png",
    "sprite_5.png",
   "sprite_6.png",
 "sprite_7.png",
"sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(460,460);
  monkey=createSprite(70,400,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(230,435,500,10);

   Banana_score=0;
    
  bGroup = new Group();
  oGroup = new Group();
}


function draw() {
 background("white");
  
  if (gamestate===PLAY){
  if(keyDown("space")&& monkey.y>399){
    monkey.velocityY=-23;
  }
  
  if(monkey.isTouching(oGroup)){
     gamestate=END;
     }

  monkey.velocityY=monkey.velocityY+1;
  
  Banana();  
  Obstacles();
}else{
    Death();
}
  drawSprites();
  monkey.collide(ground);
  monkey.collide(ground);
  BananaScore();
}

function Banana(){
  if(frameCount%100===0){
      banana=createSprite(450,Math.round(random(170,250)),20,20);
      banana.velocityX=-3;
      banana.addImage(bananaImage);
      banana.lifetime=150;
      banana.scale=0.1;
      bGroup.add(banana);
     }
}
function Obstacles(){
   if(frameCount%200===0){
      obstacles=createSprite(Math.round(random(400,470)),410,40,40);
      obstacles.velocityX=-3;
      obstacles.addImage(obstacleImage);
      obstacles.lifetime=150;
      obstacles.scale=0.15;
      oGroup.add(obstacles);
      }
}
function BananaScore(){
  text("Score: "+ Banana_score, 230,50);
  if(monkey.isTouching(bGroup)){
      Banana_score=Banana_score+1;
      bGroup.destroyEach();
     }
}
function Death(){
    oGroup.setVelocityXEach(0);
    bGroup.setVelocityXEach(0);
    oGroup.setLifetimeEach(0);
    bGroup.setLifetimeEach(0);
    Banana_score=0;
  
}

