// Time is running


let s = millis(); 
  
function draw() { 
    background(255); 
    let s = millis(); // Ziel format 00:00:00 (second();)
    textSize(70); 
    // textAlign(CENTER);
    fill(255);   
    text("GameTime : " + s, 30, 50); 
} 