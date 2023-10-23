
class GameTimer {
    constructor() {
    this.time = 8 // Wert
}

show() { // Bildet die Zeichen ab
    textAlign(CENTER, CENTER);
    textSize(70);
    fill(255,0,0); // Textfarbe
    text(this.time, width/2, height/2);

    
    
 // = muss noch ausgeblendet werden
    (frameCount % 60 == 0 && this.time > 0 ) {
    this.time--;
    }


}


}
    


