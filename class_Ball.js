// class_Ball

class Ball { //Erstellt Ball Klasse
    constructor(index) {
        //this.index gibt den Kreisen ihren eigenen Wert (Position in Array Liste) um sie vergleichen zukönnen, zum einfärben zum Beispiel
        this.index = index
        this.radius = random(20,50)
        //this.pos Gibt den Kreisen eine zufällige Startposition mit createVector(enthält x und y Wert) und verteilt sie so, dass sie nicht aus dem Canvas lampen
        this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius)) 
        //this.vel erstellt die Richtung mithilfe Vektoren. this.vel gibt x und y wert aus
        this.vel = p5.Vector.random2D().mult(2)
        this.isBallMoving = true
    }

    collide() { 
        //Da die Kreise durch this.index ihre eigene indexnummer haben
        //können sie erkennen ob sie sich mit den Positionen von anderen Kreisen
        //überlappen und mit "if" Bedingung für Farbwechsel wenn sie es tun.

        for (let i = 0; i < balls.length; i++) {
            let d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y)

            if (this.index !== i && d < this.radius + balls[i].radius) {
                this.vel = this.vel.mult(-1)
                fill(255)
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

    move() { 
        //NEW NEW NEW
        //Die if Schlaufe gibt den Bällen die Geschwindigkeit
        //mit "this.pos.add(this.vel)"

        //Die else if Schleife hört zu ob das Statement "this.freezed = true" ist,
        //falls das Statement nicht false ist setzt sie die Geschwindigkeit auf 0 "this.vel.set(0)"
        if (this.isBallMoving == true) {
           
            strokeWeight(1)
            fill(0)
            ellipse(this.pos.x, this.pos.y, this.radius*2)
            fill(255)
            textSize(this.radius)
            textAlign(CENTER, CENTER)
            text(this.index, this.pos.x, this.pos.y)

            this.pos.add(this.vel)
        } else {
           
            strokeWeight(0)
            fill(255)
            ellipse(this.pos.x, this.pos.y, this.radius*2)
            fill(0)
            textSize(this.radius)
            textAlign(CENTER, CENTER)
            text(this.index, this.pos.x, this.pos.y)
            
            this.vel.set(0)
        }
    }
}






