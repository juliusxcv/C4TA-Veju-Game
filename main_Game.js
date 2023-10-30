// main_Game


var balls = [] //Leerer Array der mit Kreisen befüllt wird
let ballCount = 3 //Anzahl der Kreise
let ScoreTimer
let nextClickableBallIndex = 0

//Spiellogik
let gameState = 0
let gameDuration = 5
let fontSize = 70
let hasGameStarted = false

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
    if(gameState == 0){
        // START
        startGame()
        startCountdown()


    } else if (gameState == 1) {
        //SPIELEN
        background(0)
        logic_Game()
        scoreTimer()

        

        
    } else if (gameState == 2) {
        //GAME OVER
        GameOver()
    

    } else if (gameState == 3) {
        //GAME WIN
        GameWin()
    }

    
}



function startGame() { //STARTSCREEN
    background(0)
    textSize(fontSize)
    textAlign(CENTER,CENTER)
    text("PLAY", width/2, height/2)
}


function GameOver() {
    background(255,0,0)
    textAlign(CENTER,CENTER)
    textSize(fontSize)
    text("GAME OVER", width/2, height/2)

    
}

function GameWin() {
    background(0,255,0)
    textAlign(CENTER,CENTER)
    textSize(fontSize)
    text("GAME WIN", width/2, height/2)

}


function keyPressed() {
    if(gameState == 0){ //START
        gameState = 1  //PLAY
        gameStartTime = millis()/10
        hasGameStarted = true
    } else if (gameState == 2) { //OVER
        gameState = 0 //START
    }
}
