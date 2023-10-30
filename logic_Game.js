// logic_Game


function logic_Game() {
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