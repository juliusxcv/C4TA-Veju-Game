// class_StartCountdown


class StartCountdown {
    constructor() {
    this.startTime = 3 // startTime = StartCountdown
}

show() {
    textAlign(CENTER, CENTER)
    textSize(70)
    noStroke()
    fill(255,0,0)
    text(this.startTime, width/2, height-70)

    if(frameCount % 60 == 0 && this.startTime > 0 ) {
    this.startTime--
    }
}
}
    


