/// Anzeige millis
function draw() { 
    background(255); 
    let s = millis(); // Ziel format 00:00:00 (second();)
    textSize(20); 
    // textAlign(CENTER);
    fill(0);   
    text("GameTime : " + s, 30, 50); 
}