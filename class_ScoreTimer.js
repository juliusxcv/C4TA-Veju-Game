// class_ScoreTimer

function scoreTimer() {
    timeElapsed = millis()/1000
    strokeWeight(0)
    fill(255)
    textAlign(LEFT, TOP)
    textSize(20);
    if(hasGameStarted) {
        let gameTimeElapsed = round(gameDuration - (timeElapsed -gameStartTime))
        text("ScoreTimer: " + gameTimeElapsed, 30, 30)

    }
    if(timeElapsed - gameStartTime >= gameDuration){
        gameStartTime = NaN
        hasGameStarted = false
        gameState = 2
    }

}