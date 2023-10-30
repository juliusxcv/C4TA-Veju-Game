// class_ScoreTimer

function scoreTimer() {
    timeElapsed = millis()/100
    textSize(70);
    if(hasGameStarted) {
        let gameTimeElapsed = round(gameDuration - (timeElapsed -gameStartTime))
        text("ScoreTimer: " + gameTimeElapsed, width/2, height/2)

    }
    if(timeElapsed - gameStartTime >= gameDuration){
        gameStartTime = NaN
        hasGameStarted = false
        gameState = 2
    }

}