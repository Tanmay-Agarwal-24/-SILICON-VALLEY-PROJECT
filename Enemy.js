

function createEnemy() {

    enemy1 = createSprite(windowWidth / 2 + 200, 50, 20, 20)
    enemy2 = createSprite(enemy1.x - 70, 50, 20, 20)
    enemy3 = createSprite(enemy2.x - 70, 50, 20, 20)
    enemy4 = createSprite(enemy3.x - 70, 50, 20, 20)
    enemy5 = createSprite(enemy4.x - 70, 50, 20, 20)
    enemy6 = createSprite(enemy5.x - 70, 50, 20, 20)
    enemy7 = createSprite(enemy6.x - 70, 50, 20, 20)
    enemy8 = createSprite(enemy7.x - 70, 50, 20, 20)


    enemy9 = createSprite(enemy2.x + 40, 150, 20, 20)
    enemy10 = createSprite(enemy9.x - 70, 150, 20, 20)
    enemy11 = createSprite(enemy10.x - 70, 150, 20, 20)
    enemy12 = createSprite(enemy11.x - 70, 150, 20, 20)
    enemy13 = createSprite(enemy12.x - 70, 150, 20, 20)
    enemy14 = createSprite(enemy13.x - 70, 150, 20, 20)
    enemy15 = createSprite(enemy14.x - 70, 150, 20, 20)

    enemy16 = createSprite(enemy10.x + 40, 250, 20, 20)
    enemy17 = createSprite(enemy16.x - 70, 250, 20, 20)
    enemy18 = createSprite(enemy17.x - 70, 250, 20, 20)
    enemy19 = createSprite(enemy18.x - 70, 250, 20, 20)
    enemy20 = createSprite(enemy19.x - 70, 250, 20, 20)
    enemy21 = createSprite(enemy20.x - 70, 250, 20, 20)

    enemys = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7,
        enemy8, enemy9, enemy10, enemy11, enemy13, enemy12, enemy14, enemy15,
        enemy16, enemy17, enemy18, enemy19, enemy20, enemy21
    ]



    enemy1.addImage(enemyimg)
    enemy1.scale = 0.35
    enemy2.addImage(enemyimg)
    enemy2.scale = 0.35
    enemy3.addImage(enemyimg)
    enemy3.scale = 0.35
    enemy4.addImage(enemyimg)
    enemy4.scale = 0.35
    enemy5.addImage(enemyimg)
    enemy5.scale = 0.35
    enemy6.addImage(enemyimg)
    enemy6.scale = 0.35
    enemy7.addImage(enemyimg)
    enemy7.scale = 0.35
    enemy8.addImage(enemyimg)
    enemy8.scale = 0.35

    enemy9.addImage(enemyimg)
    enemy9.scale = 0.35
    enemy10.addImage(enemyimg)
    enemy10.scale = 0.35
    enemy11.addImage(enemyimg)
    enemy11.scale = 0.35
    enemy12.addImage(enemyimg)
    enemy12.scale = 0.35
    enemy13.addImage(enemyimg)
    enemy13.scale = 0.35
    enemy14.addImage(enemyimg)
    enemy14.scale = 0.35
    enemy15.addImage(enemyimg)
    enemy15.scale = 0.35

    enemy16.addImage(enemyimg)
    enemy16.scale = 0.35
    enemy17.addImage(enemyimg)
    enemy17.scale = 0.35
    enemy18.addImage(enemyimg)
    enemy18.scale = 0.35
    enemy19.addImage(enemyimg)
    enemy19.scale = 0.35
    enemy20.addImage(enemyimg)
    enemy20.scale = 0.35
    enemy21.addImage(enemyimg)
    enemy21.scale = 0.35

}

function enemyAttack() {
   
    if (Time < 145 && Time > 143) {
        enemys[0].velocityY = 20
    }
    if (Time < 140 && Time > 138) {
        enemys[3].velocityY = 21
    }
    if (Time < 136 && Time > 134) {
        enemys[12].velocityY = 21
        enemys[1].velocityY = 20
    }
    if (Time < 130 && Time > 128) {
        enemys[6].velocityY = 20
        enemys[15].velocityY = 20
        enemys[0].velocityY = 20

    }
    if (Time < 120 && Time > 118) {
        enemys[3].velocityY = 25
    }
    if (Time < 110 && Time > 108) {
        enemys[4].velocityY = 30
        enemys[9].velocityY = 18
        enemys[16].velocityY = 25
    }
    if (Time < 101 && Time > 99) {
        enemys[12].velocityY = 28
    }
    if (Time < 95 && Time > 93) {
        enemys[8].velocityY = 28

    }
    if (Time < 92 && Time > 90) {
        enemys[4].velocityY = 28
        enemys[13].velocityY = 28
    }
    if (Time < 82 && Time > 80) {
        enemys[4].velocityY = 30
        enemys[9].velocityY = 18
        enemys[16].velocityY = 25

    }
    if (Time < 72 && Time > 70) {
        enemys[4].velocityY = 35
        enemys[13].velocityY = 30
    }

    if (Time < 65 && Time > 63) {
        enemys[13].velocityY = 35
        enemys[4].velocityY = 30
    }

    if (Time < 52 && Time > 50) {
        enemys[6].velocityY = 35
        enemys[16].velocityY = 30
        enemys[12].velocityY = 30
    }

    if (Time < 48 && Time > 46) {
        enemys[6].velocityY = 35
        enemys[14].velocityY = 30
    }

    if (Time < 42 && Time > 40) {
        enemys[4].velocityY = 35
        enemys[13].velocityY = 30
        enemys[7].velocityY = 30
        enemys[15].velocityY = 30
    }

    if (Time < 20 && Time > 5) {
        enemys[4].velocityY = 35
        enemys[13].velocityY = 35
        enemys[7].velocityY = 35
        enemys[15].velocityY = 35
        enemys[1].velocityY = 35
    }

    if (Time < 0) {
        gameState = endGame
    }



}







function enemyAttackComeBack() {

    if (enemys[0].y > height) {
        enemys[0].y = enemys[1].y
        enemys[0].x = enemys[1].x + 70
        enemys[0].velocityY = 0

    }
    if (enemys[1].y > height) {
        enemys[1].y = enemys[0].y
        enemys[1].x = enemys[2].x + 70
        enemys[1].velocityY = 0

    }
    if (enemys[2].y > height) {
        enemys[2].y = enemys[0].y
        enemys[2].x = enemys[3].x + 70
        enemys[2].velocityY = 0

    }
    if (enemys[3].y > height) {
        enemys[3].y = enemys[0].y
        enemys[3].x = enemys[4].x + 70
        enemys[3].velocityY = 0

    }
    if (enemys[4].y > height) {
        enemys[4].y = enemys[0].y
        enemys[4].x = enemys[5].x + 70
        enemys[4].velocityY = 0

    }
    if (enemys[5].y > height) {
        enemys[5].y = enemys[0].y
        enemys[5].x = enemys[6].x + 70
        enemys[5].velocityY = 0

    }
    if (enemys[6].y > height) {
        enemys[6].y = enemys[0].y
        enemys[6].x = enemys[7].x + 70
        enemys[6].velocityY = 0

    }
    if (enemys[7].y > height) {
        enemys[7].y = enemys[0].y
        enemys[7].x = enemys[6].x - 70
        enemys[7].velocityY = 0

    }

    if (enemys[8].y > height) {
        enemys[8].y = enemys[9].y
        enemys[8].x = enemys[9].x + 70
        enemys[8].velocityY = 0

    }
    if (enemys[9].y > height) {
        enemys[9].y = enemys[8].y
        enemys[9].x = enemys[10].x + 70
        enemys[9].velocityY = 0

    }
    if (enemys[10].y > height) {
        enemys[10].y = enemys[9].y
        enemys[10].x = enemys[9].x - 70
        enemys[10].velocityY = 0

    }
    if (enemys[11].y > height) {
        enemys[11].y = enemys[9].y
        enemys[11].x = enemys[12].x - 70
        enemys[11].velocityY = 0

    }
    if (enemys[12].y > height) {
        enemys[12].y = enemys[9].y
        enemys[12].x = enemys[11].x + 70
        enemys[12].velocityY = 0

    }
    if (enemys[13].y > height) {
        enemys[13].y = enemys[9].y
        enemys[13].x = enemys[11].x - 70
        enemys[13].velocityY = 0

    }
    if (enemys[14].y > height) {
        enemys[14].y = enemys[9].y
        enemys[14].x = enemys[13].x - 70
        enemys[14].velocityY = 0

    }

    if (enemys[15].y > height) {
        enemys[15].y = enemys[20].y
        enemys[15].x = enemys[16].x + 70
        enemys[15].velocityY = 0

    }

    if (enemys[16].y > height) {
        enemys[16].y = enemys[20].y
        enemys[16].x = enemys[17].x + 70
        enemys[16].velocityY = 0

    }

}

function enemyTouch() {

    if (enemys[0].isTouching(player)) {
        gameState = endGame

    }

    if (enemys[1].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[2].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[3].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[4].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[5].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[6].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[7].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[8].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[9].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[10].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[11].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[12].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[13].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[14].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[15].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[16].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[17].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[18].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[19].isTouching(player)) {
        gameState = endGame

    }
    if (enemys[20].isTouching(player)) {
        gameState = endGame

    }

}

function enemyMove() {


    if (enemy1.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy2.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }
    if (enemy3.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy4.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }

    if (enemy5.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy6.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }

    if (enemy7.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy8.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }
    if (enemy9.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy1.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }
    if (enemy10.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy11.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }
    if (enemy12.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy13.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }
    if (enemy14.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy15.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }
    if (enemy16.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy17.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }
    if (enemy18.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy19.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }
    if (enemy20.isTouching(IN1)) {
        enemyLeft = true
        enemyRight = false
    }
    if (enemy21.isTouching(IN2)) {
        enemyLeft = false
        enemyRight = true
    }


    if (frameCount % 30 === 0) {
        if (enemyRight === true) {
            enemys[0].x += 35
            enemys[1].x += 35
            enemys[2].x += 35
            enemys[3].x += 35
            enemys[4].x += 35
            enemys[5].x += 35
            enemys[6].x += 35
            enemys[7].x += 35
            enemys[8].x += 35
            enemys[9].x += 35
            enemys[10].x += 35
            enemys[11].x += 35
            enemys[12].x += 35
            enemys[13].x += 35
            enemys[14].x += 35
            enemys[15].x += 35
            enemys[16].x += 35
            enemys[17].x += 35
            enemys[18].x += 35
            enemys[19].x += 35
            enemys[20].x += 35

        }
        if (enemyRight === false) {
            enemys[0].x -= 35
            enemys[1].x -= 35
            enemys[2].x -= 35
            enemys[3].x -= 35
            enemys[4].x -= 35
            enemys[5].x -= 35
            enemys[6].x -= 35
            enemys[7].x -= 35
            enemys[8].x -= 35
            enemys[9].x -= 35
            enemys[10].x -= 35
            enemys[11].x -= 35
            enemys[12].x -= 35
            enemys[13].x -= 35
            enemys[14].x -= 35
            enemys[15].x -= 35
            enemys[16].x -= 35
            enemys[17].x -= 35
            enemys[18].x -= 35
            enemys[19].x -= 35
            enemys[20].x -= 35


        }

    }
}

function enenyVisibleFalse() {
    enemy1.visible = false
    enemy2.visible = false
    enemy3.visible = false
    enemy4.visible = false
    enemy5.visible = false
    enemy6.visible = false
    enemy7.visible = false
    enemy8.visible = false
    enemy9.visible = false
    enemy10.visible = false
    enemy11.visible = false
    enemy12.visible = false
    enemy13.visible = false
    enemy14.visible = false
    enemy15.visible = false
    enemy16.visible = false
    enemy17.visible = false
    enemy18.visible = false
    enemy19.visible = false
    enemy20.visible = false
    enemy21.visible = false

}

function enenyVisibleTrue() {
    enemy1.visible = true
    enemy2.visible = true
    enemy3.visible = true
    enemy4.visible = true
    enemy5.visible = true
    enemy6.visible = true
    enemy7.visible = true
    enemy8.visible = true
    enemy9.visible = true
    enemy10.visible = true
    enemy11.visible = true
    enemy12.visible = true
    enemy13.visible = true
    enemy14.visible = true
    enemy15.visible = true
    enemy16.visible = true
    enemy17.visible = true
    enemy18.visible = true
    enemy19.visible = true
    enemy20.visible = true
    enemy21.visible = true

}




function enemyKill() {
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[0])) {
            bulletGroupe.get(i).destroy();
            enemys[0].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[1])) {
            bulletGroupe.get(i).destroy();
            enemys[1].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[2])) {
            bulletGroupe.get(i).destroy();
            enemys[2].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[3])) {
            bulletGroupe.get(i).destroy();
            enemys[3].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[4])) {
            bulletGroupe.get(i).destroy();
            enemys[4].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[5])) {
            bulletGroupe.get(i).destroy();
            enemys[5].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[6])) {
            bulletGroupe.get(i).destroy();
            enemys[6].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[7])) {
            bulletGroupe.get(i).destroy();
            enemys[7].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[8])) {
            bulletGroupe.get(i).destroy();
            enemys[8].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[9])) {
            bulletGroupe.get(i).destroy();
            enemys[9].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[10])) {
            bulletGroupe.get(i).destroy();
            enemys[10].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[11])) {
            bulletGroupe.get(i).destroy();
            enemys[11].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[12])) {
            bulletGroupe.get(i).destroy();
            enemys[12].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[13])) {
            bulletGroupe.get(i).destroy();
            enemys[13].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[14])) {
            bulletGroupe.get(i).destroy();
            enemys[14].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[15])) {
            bulletGroupe.get(i).destroy();
            enemys[15].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[16])) {
            bulletGroupe.get(i).destroy();
            enemys[16].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[17])) {
            bulletGroupe.get(i).destroy();
            enemys[17].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[18])) {
            bulletGroupe.get(i).destroy();
            enemys[18].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[19])) {
            bulletGroupe.get(i).destroy();
            enemys[19].destroy()
            enemyleft -= 1

        }
    }
    for (var i = 0; i < bulletGroupe.length; i++) {
        if (bulletGroupe.get(i).isTouching(enemys[20])) {
            bulletGroupe.get(i).destroy();
            enemys[20].destroy()
            enemyleft -= 1

        }
    }

}




