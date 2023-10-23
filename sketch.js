var balls = [] //Leerer Array der mit Kreisen befüllt wird
let player // Muss hier definiert werden sonst ist es nicht sichbar

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    //Loop der die Kreise macht
    for(let i = 0; i < 10; i++){
        let b = new Ball(i)
        balls.push(b)
    }

    player = new Player() // Neu
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

    player.move()
    player.show() // Neu



}
