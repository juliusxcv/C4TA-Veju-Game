// class_Game_Logic

class GameLogic {
    constructor(balls) {
        this.balls = balls
}

 logic() {
    // Draw lines between the centers of the balls in the order they appear in the array
    strokeWeight(1)
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
        balls[i].move() //Zeichnet die Kreise und gibt den Kreisen ihre Gescwindigkeit
    }
    }
} 
