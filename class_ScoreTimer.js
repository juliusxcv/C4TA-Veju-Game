// class_ScoreTimer

function scoreTimer() {
    timeElapsed = millis()/100
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

    text("Number of Hits: " + NumberOfHits, 30, 60)
    text("Level: " + NumberOfLevels, 30, 90)

}