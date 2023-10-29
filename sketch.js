var balls = [] //Leerer Array der mit Kreisen befüllt wird
let ballCount = 30
let timer  // Timer Wert
let gameTimer
let nextClickableBallIndex = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    timer = new Timer()
    gameTimer = new GameTimer()

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
    background(0,0,0)
    
    background(0)
    
    // Draw lines between the centers of the balls in the order they appear in the array
    stroke(255);
    for (let i = 1; i < balls.length; i++) {
        let ballA = balls[i - 1];
        let ballB = balls[i];
        line(ballA.pos.x, ballA.pos.y, ballB.pos.x, ballB.pos.y);
    }

    //Loop der alle Methoden der Balls Klasse aufruft
    for (let i = 0; i < balls.length; i++){
        balls[i].collide() //Vergleicht die Position des Kreises mit den anderen
        balls[i].edges() //Erstellt die Canvasgrenzen
        balls[i].move() //Gibt den Kreisen ihre Gescwindigkeit
        balls[i].show() //Zeichnet die Kreise, die Zahlen sind ihre indexnummern. Die brauchen die Kreise um sich selber zu kennen 
    }


    
    // // Draw the balls after drawing the lines
    // for (let i = 0; i < balls.length; i++) {
    //     let ball = balls[i];
    //     ellipse(ball.pos.x, ball.pos.y, ball.radius * 2);
    // }

    

  timer.show()
  gameTimer.show()
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