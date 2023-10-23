// link: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-


class Timer {
    this.time = 8 // Wert
    this.pos = 100, 100 // Position
    

show() { //Bildet die Zeichen ab
    //textAlign(CENTER, CENTER);
    textSize(30);
    text(timer, width/2, height/2);
    fill(255); // Textfarbe

    if (frameCount % 60 == 0 && timer > 0 ) {
        timer--;
    }

    if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
    }
}


}
    


