var plant;
var waterPlantImage,mokaImage, mediumImage, treeImage;
var waterPlant, moka, medium, tree;

var score=0;

var player1,player2,player3;
var player1Animation,player2Animation,player3Animation;
var sun,sunImage;
var coinImage,coin,coinsGroup;

var groundImage,ground;
var gameState;

function preload(){
  waterPlantImage= loadImage("s.jpg");
  mokaImage = loadImage("s1.jpg");
  mediumImage = loadImage("s2.jpg");
  treeImage = loadImage("s3.jpg");

  sunImage = loadImage("sun.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

  coinImage = loadImage("coins.png");

  player1Animation = loadAnimation("player1.png", "player2.png");
  player2Animation = loadAnimation("player3.png", "player4.png");

  player3Animation = loadAnimation("alien1.png", "alien2.png");

  groundImage = loadImage("ground.png");
}
function setup(){
  createCanvas(1400, 650);

  sun = createSprite(200, 20, 20, 20);
  sun.addImage("sun", sunImage)
  sun.scale = 0.1;

  player1 = createSprite(750, 180, 20, 20);
  player1.addAnimation("player1", player1Animation);
  player1.scale = 0.5;

  player1.setCollider("rectangle",0,0,player1.width,player1.height);

  player2 = createSprite(750, 380, 20, 20);
  player2.addAnimation("player1", player2Animation);
  player2.scale = 0.5;

  player3 = createSprite(750, 550, 20, 20);
  player3.addAnimation("aeghi", player3Animation)
  player3.scale = 0.5;



  invisibleGround = createSprite(950, 215, 500, 20);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(950, 415, 500, 20);
  invisibleGround2.visible = false;

  invisibleGround3= createSprite(950, 585, 500, 20);
  invisibleGround3.visible = false;
  obstaclesGroup = createGroup();
  coinsGroup = new Group();
  
}
function draw(){
  background(255, 255, 255);
  text("Score: " + score, 500, 50);
  /*text("First Level", 750, 50);
  text("Second Level", 750, 280);
  text("Third Level", 750, 480);*/
  line(700, 0, 700, 600);
  line(700, 400, 1400, 400);
  line(700, 580, 1400, 580);
if(coinsGroup.isTouching(player1) ||coinsGroup.isTouching(player2) ||coinsGroup.isTouching(player3)){
  score= score+1;
}
if(score>=0 ){
  gameState=level1();
  player1.visible = true;
  player2.visible = false;
  player3.visible = false;
  waterPlant();
 
}
  if (score >= 5) {
    gameState = level2();
    player2.visible = true;
    player1.visible = false;
    player3.visible = false;
    waterPlant();

  }


if(score>=10 || score===25){
  gameState=level3();
  player1.visible = false;
  player2.visible = false;
  player3.visible = true;
  medium();
}
if(score===25){
  tree();
}

  drawSprites();
}
function waterPlant(){
  var waterPlant = createSprite(100, 400, 20, 20)
  waterPlant.addImage("s.jpg", waterPlantImage);
}
function moka() {
  var moka = createSprite(100, 400, 20, 20)
  moka.addImage("s1.jpg", mokaImage);
}
function medium() {
  var medium = createSprite(100, 400, 20, 20)
  medium.addImage("s2.jpg", mediumImage);
}
function tree() {
  var tree = createSprite(100, 400, 20, 20)
  tree.addImage("s3.jpg", treeImage);
}
function level1() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(1400, 185, 10, 40);

    obstacle.velocityX = -6;

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
      case 3: obstacle.addImage(obstacle3);
        break;
      case 4: obstacle.addImage(obstacle4);
        break;
      case 5: obstacle.addImage(obstacle5);
        break;
      case 6: obstacle.addImage(obstacle6);
        break;
      default: break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 118;
    obstaclesGroup.add(obstacle);

  }
 /* if(obstaclesGroup.isTouching(player1)){
    score = score +2
  }*/
  
  text("First Level", 750, 50);
  text("Second Level has been locked", 750, 280);
  text("Third Level has been locked", 750, 480);
  ground1 = createSprite(1055, 225, 20, 20);
  ground1.addImage("ground1", groundImage);
  ground1.scale = 0.28;
if (keyDown("space")) {
    player1.velocityY = -12;
  }

  player1.velocityY = player1.velocityY + 0.9;
  player1.collide(invisibleGround);

  if (frameCount % 50 === 0) {
    var coin = createSprite(1400, 115, 20, 20);

    coin.velocityX = -7.5;
    coin.addImage(coinImage);
    coin.scale = 0.3;
    coin.lifetime = 95;
    coinsGroup.add(coin)
  }
  if(score>=11){
    obstaclesGroup.destroyEach();
    coinsGroup.destroyEach();
  }
 
}
function level2() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(1400, 385, 10, 40);
    player2.visible = true;
    player1.visible = false;
    player3.visible = false;
    obstacle.velocityX = -6;

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
      case 3: obstacle.addImage(obstacle3);
        break;
      case 4: obstacle.addImage(obstacle4);
        break;
      case 5: obstacle.addImage(obstacle5);
        break;
      case 6: obstacle.addImage(obstacle6);
        break;
      default: break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 118;
    obstaclesGroup.add(obstacle);
  }
 /* if (obstaclesGroup.isTouching(player2)) {
    score = score - 1
  }*/
  
 

  text("First Level = OVER", 750, 50);
  text("Second Level ", 750, 280);
  text("Third Level has been locked", 750, 480);

  ground1 = createSprite(1055, 225, 20, 20);
  ground1.addImage("ground1", groundImage);
  ground1.scale = 0.28;

  ground2 = createSprite(1055, 425, 20, 20);
  ground2.addImage("ground1", groundImage);
  ground2.scale = 0.28;

  player2.velocityY = player2.velocityY + 0.9;
  player2.collide(invisibleGround2);
  if (keyDown("space")) {
    player2.velocityY = -12;
  }
  if (frameCount % 200 === 0) {
    var coin = createSprite(1400, 315, 20, 20);

    coin.velocityX = -7.5;
    coin.addImage(coinImage);
    coin.scale = 0.3;
    coin.lifetime = 95;
    coinsGroup.add(coin)
  }
 
}
function level3() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(1400, 540, 10, 40);

    obstacle.velocityX = -6;

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
      case 3: obstacle.addImage(obstacle3);
        break;
      case 4: obstacle.addImage(obstacle4);
        break;
      case 5: obstacle.addImage(obstacle5);
        break;
      case 6: obstacle.addImage(obstacle6);
        break;
      default: break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 118;
    obstaclesGroup.add(obstacle);
  }
  if (obstaclesGroup.isTouching(player3)) {
    score = score - 1
  }
  

  text("First Level = Over", 750, 50);
  text("Second Level= Over ", 750, 280);
  text("Third Level ", 750, 480);

  ground1 = createSprite(1055, 225, 20, 20);
  ground1.addImage("ground1", groundImage);
  ground1.scale = 0.28;

  ground2 = createSprite(1055, 425, 20, 20);
  ground2.addImage("ground1", groundImage);
  ground2.scale = 0.28;

  ground3 = createSprite(1055, 590, 20, 20);
  ground3.addImage("ground1", groundImage);
  ground3.scale = 0.28;

  player3.velocityY = player3.velocityY + 0.9;
  player3.collide(invisibleGround3);
  if (keyDown("space")) {
    player3.velocityY = -12;
  }
  if (frameCount % 200 === 0) {
    var coin = createSprite(1400, 495, 20, 20);

    coin.velocityX = -7.5;
    coin.addImage(coinImage);
    coin.scale = 0.3;
    coin.lifetime = 95;
    coinsGroup.add(coin)
  }
  
}