class Timer {
    constructor() {
    this.time = 4 // Wert
    this.pos = 10, 10 // Position
}

show() { 
    //Bildet die Zeichen ab
    //textAlign(CENTER, CENTER);
    textSize(70);
    text(this.time);
    fill(0, 255, 0); // Textfarbe

    if (frameCount % 60 == 0 && this.time > 0 ) {
        this.time--;
    }

    if (this.time == 0) {
    textSize(70);
    text("GAME OVER TEST", this.pos)
    }
}
}

