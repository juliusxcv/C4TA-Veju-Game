// Start Countdown


class GameTimer {
    constructor() {
    this.gameTime = 3 // Wert
}

show() { // Bildet die Zeichen ab
    textAlign(CENTER, CENTER)
    textSize(70)
    fill(255) // Textfarbe
    text(this.gameTime, width/2, height/2)

 // = muss noch ausgeblendet werden
    if(frameCount % 60 == 0 && this.gameTime > 0 ) {
    this.gameTime--
    }

}
}
    


