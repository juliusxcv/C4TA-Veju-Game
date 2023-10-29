// link: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-

class Timer {
    constructor() {
    this.time = 8 // Wert
    this.pos = 100, 100 // Position
}

show() { 
    //Bildet die Zeichen ab
    //textAlign(CENTER, CENTER);
    textSize(600);
    text(this.time, width/2, height/2);
    fill(255); // Textfarbe

    if (frameCount % 60 == 0 && this.time > 0 ) {
        this.time--;
    }

    if (this.time == 0) {
        textSize(100)
    text("GAME OVER", width/2, height/2)
    }
}
}
    


