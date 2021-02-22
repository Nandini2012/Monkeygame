

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 monkeyfall = 
   loadImage("sprite_1.png");
}



function setup() {
  
  monkey = createSprite(100,313,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground  = createSprite(100,348,700,15);
   ground.x = ground.width /2;
  console.log(ground.x);
  
score = 0;
  
  obstacleGroup = new Group();
  fruitGroup = new Group();
  
 
}


function draw() {
  background("white");
    monkey.collide(ground);
 
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time:"+score,150,30);
  
 
  obstacle();
  fruit();
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  if(fruitGroup.isTouching(monkey)){
    fruitGroup.destroyEach();
    score = score + 1;
  }
    
    if(obstacleGroup.isTouching(monkey)){
        fruitGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
      ground.velocityX = 0;
    
  
    }
  
  
  
 
  
 
  
  
  
  drawSprites();
  
  
}

function obstacle(){
    if(frameCount % 300 === 0) {
    var obstacle = createSprite(230,323,10,40);
    //obstacle.debug = true;
      //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      case 2: obstacle.addImage(obstacleImage);
              break;
      case 3: obstacle.addImage(obstacleImage);
              break;
      case 4: obstacle.addImage(obstacleImage);
              break;
      case 5: obstacle.addImage(obstacleImage);
              break;
      case 6: obstacle.addImage(obstacleImage);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
     
  
      obstacle.setLifetime = -1;
      obstacle.velocityX = -4;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}

function fruit(){
     if(frameCount % 80 === 0) {
    var fruit = createSprite(300,180,10,40);
    //obstacle.debug = true;
      //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: fruit.addImage(bananaImage);
              break;
      case 2: fruit.addImage(bananaImage);
              break;
      case 3: fruit.addImage(bananaImage);
              break;
      case 4: fruit.addImage(bananaImage);
              break;
      case 5: fruit.addImage(bananaImage);
              break;
      case 6: fruit.addImage(bananaImage);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    fruit.scale = 0.1;
       
   
       fruit.setLifetime = -1;
       fruit.velocityX = -4;
    //add each obstacle to the group
    fruitGroup.add(fruit);
  }
}



