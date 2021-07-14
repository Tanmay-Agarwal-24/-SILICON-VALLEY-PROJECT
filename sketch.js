/*
for(var i = 0; i < fruitGroup.length; i++){
   if(fruitGroup.get(i).isTouching(players)){
       fruitGroup.get(i).destroy();
       
   }
}
*/



var win = false
var player, bullet;
bulletleft = 50, enemyleft = 21

var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6
var enemy7, enemy8, enemy9, enemy10, enemy11, enemy12
var enemy13, enemy14, enemy15, enemy16, enemy17, enemy18
var enemy21, enemy20, enemy19

var bulletimg, enemyimg, playerimg, backgroundimg;
var canvas, play, edges, bulletTime = 0;
var bulletGroupe, setting, settingimg
var endGame = 3
var settingGame = 2;
var startGame = 0;
var playGame = 1;
var gameState = startGame;
var enemys
var IN1, IN2
var enemyRight = true
var enemyLeft = false
var Time = 150
var sec = 0

function preload() {

   enemyimg = loadImage("images/enemy.png");
   playerimg = loadImage("images/player.png");
   playimg = loadImage("images/play.png");
   backgroundimg = loadImage("images/background.jpg");
   settingimg = loadImage("images/setting.png")
   backimg = loadImage("images/back.jpg")
   retryimg = loadImage("images/retry.jpg")


}


function setup() {
   // gamestate will be start and canvas
   canvas = createCanvas(windowWidth - 10, windowHeight - 10);
   play = createSprite(windowWidth / 2.2, windowHeight / 2.5);
   play.addImage(playimg);
   play.scale = 0.2;

   player = createSprite(windowWidth / 2.2, windowHeight - 50)
   player.addImage(playerimg);
   player.scale = 0.12;

   setting = createSprite(50, 50)
   setting.addImage(settingimg);
   setting.scale = 0.12;

   back = createSprite(width - 50, 50)
   back.addImage(backimg)
   back.scale = 0.3

   bulletGroupe = createGroup();

   createEnemy()

   IN1 = createSprite(enemy1.x + 100, width / 2, 2, width)
   IN2 = createSprite(enemy8.x - 100, width / 2, 2, width)

   retry = createSprite(play.x, play.y + 100, 20, 20)
   retry.addImage(retryimg)
   retry.scale = 0.12

}

function draw() {

   background(backgroundimg);

   edges = createEdgeSprites();

   IN1.visible = false
   IN2.visible = false

   player.velocityX = 0
   player.collide(edges)

   // when gameState will be start
   if (gameState === startGame) {

      setting.visible = true
      retry.visible = false
      play.visible = true;
      player.visible = false

      enenyVisibleFalse()
      stroke("red");
      strokeWeight(7)
      fill(random(1, 400))
      textSize(50);
      text("space Fight ", play.x - 110, height / 3.8);

      back.visible = false

      if (mousePressedOver(play)) {

         win = false
         gameState = playGame;
         play.visible = false;
         setting.visible = false;
         retry.visible = false
         bulletleft = 50
         enemyleft = 21
         enemyRight = true
         Time = 150
         sec = 0

      }

      if (mousePressedOver(setting)) {
         clear()
         setting.visible = false
         play.visible = false
         gameState = settingGame


      }


   }


   if (gameState === settingGame) {

      clear()
      background(backgroundimg);
      retry.visible = false

      fill("orange")
      textSize(30)
      text("1) How to play", 10, 25)
      fill("yellow")
      textSize(20)
      text("Gole of the game is kill all the enemy without touching ", 10, 70)
      text("also your bullet increase in every 10 to 15 sec and 150 sec to complete", 10, 100)
      text("also same time there is some enemy stop near you this is not a bug this is a part of game", 10, 130)
      fill("orange")
      textSize(30)
      text("2)Control of game ", 10, 200)
      fill("yellow")
      textSize(20)
      text("Press left , right arrow and A AND D keys to move ", 10, 230)
      text("Press space bar to shoot  ", 10, 260)

      fill("orange")
      textSize(30)
      text("3)About game developer ", 10, 320)
      fill("yellow")
      textSize(20)
      text(" made in javaScript", 10, 380)
      text(" game only for laptop ,PC,computer", 10, 350)
      text(" made by  Tanmay agarwal ", 10, 410)

      back.visible = true

      if (mousePressedOver(back)) {
         gameState = startGame
      }


   }



   if (gameState === playGame) {
      
      win = false
      
      retry.visible = false

      clear();
      sponeBullet()
      enemyKill()
      enemyMove()
      enemyTouch()
      enemyAttackComeBack()
      enemyAttack()
      
      background(backgroundimg);
      enenyVisibleTrue()
      fill("green")
      textSize(30)
      text("bullet:" + bulletleft, width - 150, 50)

      if (enemyleft === 0) {
         gameState = endGame
         win = true
      }
      play.visible = false;
      setting.visible = false
      player.visible = true;

      sec = sec + 10
      if (sec > 0 && sec % 100 === 0) {
         Time -= 1
      }
      text("Time:" + Time, width - 150, 100)


      if (keyDown(65) || keyDown(37)) {
         player.velocityX = -7.2;

      }
      if (keyDown(68) || keyDown(39)) {
         player.velocityX = 7.2;
      }

      if (frameCount % 250 === 0) {

         bulletleft += 1
      }



   }

   if (gameState === endGame) {

      clear()

      background(backgroundimg)
      retry.visible = true
      if (mousePressedOver(retry)) {
         reset()
      }
      fill(random(1, 400))
      textSize(50);
      if (win === false) {
         text("game Over", retry.x - 100, retry.y - 50)
      }
      if (win === true) {
         text(" You win ", retry.x - 75, retry.y - 70)
      }

   }

   drawSprites()
}

function sponeBullet() {

   if (keyDown(32) && bulletTime > -1 && bulletleft > 0) {
      bullet = createSprite(player.x, player.y - 70, 2, 20)
      bullet.velocityY = -8
      bulletTime = -12
      bulletGroupe.add(bullet)
      bulletleft -= 1
   }

   for (var i = 0; i < bulletGroupe.length; i++) {
      if (bulletGroupe.get(i).x > width) {
         bulletGroupe.get(i).destroy();

      }
   }



   if (bulletTime < 0) {

      bulletTime = bulletTime + 1
   }


}

function reset() {
   retry.visible = false
   gameState = startGame
   window.location.reload()


}