let targetPositionX
let targetPositionY
let targetSize = 50
let playerSize = 100
let distance

function setup() {
    createCanvas(windowWidth, windowHeight)
    targetPositionX = width/2
    targetPositionY = height/2
}

function draw() {
    background(255)
    noStroke()
    fill(0)

    distance = dist(targetPositionX, targetPositionY, mouseX, mouseY)

    ellipse(targetPositionX, targetPositionY, targetSize, targetSize)
    
    if (distance < (playerSize/2 + targetSize/2)) {
        fill(255,0,0)
    }

    ellipse(mouseX, mouseY, playerSize, playerSize)

}