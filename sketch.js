var balls = [] //Leerer Array der mit Kreisen befüllt wird
let timer  // Timer Wert
let gameTimer

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
    background(0)
    
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

// NEU!!! Diese Funktion soll bei einem Mausklick den Status des "this.freezed" in der Ball Klasse auf TRUE setzen.
// Auf TRUE sollte die Bewegung stoppen und die Farbe auf Blau gesetzt werden. 
// Der Mausklick kommt durch nur wird der Boolean TRUE/FALSE nicht auf TRUE gesetzt leider. 
function mousePressed() {
    for (const ball of balls) {
        if (mouseIsPressed && mouseX <= ball.pos.x + ball.radius && mouseY <= ball.pos.y + ball.radius && mouseX >= ball.pos.x - ball.radius && mouseY >= ball.pos.y - ball.radius) {
        ball.freezed = true
        }
    }
}






