let gameState = 0
let gameStartTime = 0 
let gameDuration = 1000
let fontSize = 70
let hasGameStarted = false
let timeElapsed = 0
 
function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    if(gameState == 0){
        // START
        startGame()


    } else if (gameState == 1) {
        //SPIELEN
        playGame()

        
    } else if (gameState == 2) {
        //GAME OVER
        finishGame()
    }
    drawTime()
}

function startGame() { //STARTSCREEN
    background(0,255,0)
    textSize(fontSize)
    textAlign(CENTER,CENTER)
    text("START", width/2, height/2)
}

function playGame() {
    background(255,255,0)
    textAlign(CENTER,CENTER)
    textSize(fontSize)
    text("GO!!", width/2, height/2)

    //SPIELLOGIK
    
}

function finishGame() {
    background(255,0,0)
    textAlign(CENTER,CENTER)
    textSize(fontSize)
    text("GAME OVER", width/2, height/2)

    
}

function drawTime() {
    timeElapsed = millis()/10
    textSize(70);
    if(hasGameStarted) {
        let gameTimeElapsed = round(gameDuration - (timeElapsed -gameStartTime))
        text("Time is running out ..." + gameTimeElapsed, width/2, height/2)

    }
    if(timeElapsed - gameStartTime >= gameDuration){
        gameStartTime = NaN
        hasGameStarted = false
        gameState = 2
    }

}

function keyPressed() {
    if(gameState == 0){
        gameState = 1
        gameStartTime = millis()/10
        hasGameStarted = true
    } else if (gameState == 2) {
        gameState = 0
    }
}