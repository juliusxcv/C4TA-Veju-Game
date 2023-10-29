var balls = [] //Leerer Array der mit Kreisen befüllt wird
let timer  // Timer Wert
let gameTimer
let nextClickableBallIndex = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    //Loop der die Kreise macht
    for(let i = 0; i < 10; i++){
        let b = new Ball(i)
        balls.push(b)
    }
    timer = new Timer()
    gameTimer = new GameTimer()
    //player = new Player() // Neu PLAYER IS RETIRED
}


function draw() {
    background(0,0,0)
    
    //Loop der alle Methoden der Balls Klasse aufruft
    for (let i = 0; i < balls.length; i++){
        balls[i].collide() //Vergleicht die Position des Kreises mit den anderen
        balls[i].edges() //Erstellt die Canvasgrenzen
        balls[i].move() //Gibt den Kreisen ihre Gescwindigkeit
        balls[i].show() //Zeichnet die Kreise, die Zahlen sind ihre indexnummern. Die brauchen die Kreise um sich selber zu kennen 
    }  

  timer.show()
  gameTimer.show()
}

 //Start mit dem ersten Ball im Array

// NEU!!! Zusätzlich werden die Negativ Werte von X und Y auch geprüft.

function mousePressed() {
    if (nextClickableBallIndex < balls.length) {
        const ball = balls[nextClickableBallIndex]
        for (const ball of balls) {
            if (mouseIsPressed && mouseX <= ball.pos.x + ball.radius && mouseY <= ball.pos.y + ball.radius && mouseX >= ball.pos.x - ball.radius && mouseY >= ball.pos.y - ball.radius) {
            ball.freezed = true
            nextClickableBallIndex++
            }
        }
    }
}

/// WHOOP!! Mit der NextclickableBallIndex variabel können die Bälle jetzt nur noch in der richtigen Reihenfolge angeklickt werden.
function mousePressed() { 
    if (nextClickableBallIndex < balls.length) { 
        const ball = balls[nextClickableBallIndex]; 
        if (mouseIsPressed && mouseX <= ball.pos.x + ball.radius && mouseY <= ball.pos.y + ball.radius && mouseX >= ball.pos.x - ball.radius && mouseY >= ball.pos.y - ball.radius) { 
            ball.freezed = true; 
            nextClickableBallIndex++; 
        } 
    } 


}
 