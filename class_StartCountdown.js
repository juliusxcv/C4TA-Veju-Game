// class_StartCountdown
 

function startCountdown(){
    startTime = 0 // startTime = StartCountdown
    textAlign(CENTER, CENTER)
    textSize(70)
    noStroke()
    fill(255)
    text(startTime, width/2, height+70) // Rausgemogelt

    if(frameCount % 60 == 0 && startTime > 0 ) {
        startTime--
    }

    
}
