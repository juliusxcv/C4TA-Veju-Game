// Definition classen 


class Player{
    constructor() {
        this.PlayerPosX = width/2
        this.PlayerPosY = height/2
        this.PlayerSize = 100
        this.PlayerRotation = 45
        this.PlayerMove = 10
    }

    PlayerBoundaries() { 
        //Erstellt die Grenzen und kehrt den Vektor um wenn die Grenzen erreicht werden
        if (this.PlayerPosX < this.PlayerSize/2 || this.PlayerPosX > width - this.PlayerSize/2) {
            this.PlayerMove *= -1
        }
        if (this.PlayerPosY < this.PlayerSize/2 || this.PlayerPosY > width - this.PlayerSize/2) {
            this.PlayerMove *= -1
        }
    }

    move() {
        //MOVE UP
        if(keyCode == UP_ARROW && keyIsPressed){
        this.PlayerPosY = this.PlayerPosY - this.PlayerMove
        }
        //MOVE DOWN
        if(keyCode == DOWN_ARROW && keyIsPressed){
        this.PlayerPosY = this.PlayerPosY + this.PlayerMove
        }
        //MOVE LEFT
        if(keyCode == LEFT_ARROW && keyIsPressed){
        this.PlayerPosX = this.PlayerPosX - this.PlayerMove
        }
        //MOVE RIGHT
        if(keyCode == RIGHT_ARROW && keyIsPressed){
        this.PlayerPosX = this.PlayerPosX + this.PlayerMove
        }
    }

    show() { //Zeichnet den Player
        rectMode(CENTER)
        fill(120,80,140) // Die Farbe muss zuerst angegeben werden 
        square(this.PlayerPosX, this.PlayerPosY, this.PlayerSize)
        

        
    }
}






