// main_Game
var balls = [] //Leerer Array der mit Kreisen befüllt wird
let ballCount = 3 //Anzahl der Kreise
let gameStartCountdown = 3;
let ScoreTimer
let nextClickableBallIndex = 0
let gameLogic = new GameLogic(balls)

//Spiellogik
let gameState = 0
let gameDuration = 60 // Defintion Spieldauer in Sekunden
let fontSize = 70
let hasGameStarted = false
let NumberOfHits = 0

function setup() {
    createCanvas(windowWidth, windowHeight)

    // Neuer Loop der die Kreise erstellt und dabei Überlappungen verhindert
    for (let i = 0; i < ballCount; i++) {
        let b;
        let overlapping = false;

        do {
            overlapping = false;
            b = new Ball(i);

            for (let j = 0; j < i; j++) {
                let other = balls[j];
                let d = dist(b.pos.x, b.pos.y, other.pos.x, other.pos.y);

                if (d < b.radius + other.radius) {
                    overlapping = true;
                    break;
                }
            }
        } while (overlapping);
        balls.push(b);
    }
}




function draw() {
    if(ballCount == NumberOfHits) {
        gameState = 3
    }
    
    if(gameState == 0){
        // START
        startGame()
        startCountdown()


    } else if (gameState == 1) {
        //SPIELEN
        background(0)
        gameLogic.logic()
        scoreTimer()

        
    } else if (gameState == 2) {
        //GAME OVER
        GameOver()
    

    } else if (gameState == 3) {
        //GAME WIN
        GameWin()
    }

    
}

/// WHOOP!! Mit der NextclickableBallIndex variabel können die Bälle jetzt nur noch in der richtigen Reihenfolge angeklickt werden.
function mousePressed() { 
    if (nextClickableBallIndex < balls.length) { 
        const ball = balls[nextClickableBallIndex]
        if (mouseIsPressed && mouseX <= ball.pos.x + ball.radius && mouseY <= ball.pos.y + ball.radius && mouseX >= ball.pos.x - ball.radius && mouseY >= ball.pos.y - ball.radius) { 
            ball.isBallMoving = false
            NumberOfHits++
            nextClickableBallIndex++
            gameDuration += 5 //adds 1 second to the gameDuration
        } 
    }
}


function startGame() { //STARTSCREEN
    background(0)
    textSize(fontSize)
    textAlign(CENTER,CENTER)
    text("PLAY", width/2, height/2)
}


function GameOver() {
    textAlign(CENTER,CENTER);
    textSize(fontSize);
    fill(255,0,0);
    text("GAME OVER", width/2, height/2);

    // Allow restarting the game on key press
    if (keyIsPressed) {
        restartGame(ballCount); // Reset the game with the original ball count
    }
}

function GameWin() {
    textAlign(CENTER,CENTER);
    textSize(fontSize);
    fill(0,255,0);
    text("GAME WIN", width/2, height/2);

    // Allow restarting the game with more balls and extra time on key press
    if (keyIsPressed) {
        const newBallCount = ballCount + 5; // Increase the ball count by 5
        const newGameDuration = gameDuration + 10; // Add 10 seconds to the game duration
        restartGame(newBallCount, newGameDuration);
    }
}

function restartGame(newBallCount, newGameDuration) {
    balls = [];
    ballCount = newBallCount;
    gameDuration = newGameDuration;
    nextClickableBallIndex = 0;
    gameState = 0;
    hasGameStarted = false;
    NumberOfHits = 0;

    for (let i = 0; i < ballCount; i++) {
        let b;
        let overlapping = false;

        do {
            overlapping = false;
            b = new Ball(i);

            for (let j = 0; j < i; j++) {
                let other = balls[j];
                let d = dist(b.pos.x, b.pos.y, other.pos.x, other.pos.y);

                if (d < b.radius + other.radius) {
                    overlapping = true;
                    break;
                }
            }
        } while (overlapping);
        balls.push(b);
    }
}


function keyPressed() {
    if(gameState == 0){ //START
        gameState = 1  //PLAY
        gameStartTime = millis()/1000 // Definition millis muss im Projekt immer gelich definiert sein z.B millis()/100
        hasGameStarted = true
    } else if (gameState == 2) { //OVER
        gameState = 0 //START
    }
}