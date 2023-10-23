var balls = [] //Leerer Array der mit Kreisen befüllt wird

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    //Loop der die Kreise macht
    for(let i = 0; i < 10; i++){
        let b = new Ball(i)
        balls.push(b)
    }
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
}


class Ball { //Erstellt Ball Klasse
    constructor(index) {
        //this.index gibt den Kreisen ihren eigenen Wert um sie vergleichen zukönnen, zum einfärben zum Beispiel
        this.index = index
        this.radius = 50
        //this.pos Gibt den Kreisen eine zufällige Startposition mit createVector(enthält x und y Wert) und verteilt sie so, dass sie nicht aus dem Canvas lampen
        this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius)) 
        //this.vel erstellt die Richtung mithilfe Vektoren. this.vel gibt x und y wert aus
        this.vel = p5.Vector.random2D().mult(2)
      console.log(this.vel)
    }

    collide() { 
        //Da die Kreise durch this.index ihre eigene indexnummer haben
        //können sie erkennen ob sie sich mit den Positionen von anderen Kreisen
        //überlappen und mit "if" Bedingung für Farbwechsel wenn sie es tun.
        //ACHTUNG: Wenn sich die Kreise überlappen so checken sie 1*mal pro Frame ob
        //sie dies tun, so lange sie es tun. 
        for (let i = 0; i < balls.length; i++) {
            let d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y)

            if (d < this.radius + balls[i].radius && this.index !== i) {
                fill(255,0,0)
                break
            } else {
                fill(255)
            }
        }
    }

    edges() { 
        //Erstellt die Grenzen und kehrt den Vektor um wenn die Grenzen erreicht werden
        if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
            this.vel.x *= -1
        }
        if (this.pos.y < this.radius || this.pos.y > height - this.radius) {
            this.vel.y *= -1
        }
    }

    move() { //Bewegt die Kreise
        this.pos.add(this.vel)
    }

    show() { //Zeichnet die Kreise
        noStroke()
        ellipse(this.pos.x, this.pos.y, this.radius*2)
        fill(0)
        textSize(100)
        textAlign(CENTER, CENTER)
        text(this.index, this.pos.x, this.pos.y)
    }
}