// Definition classen 


class Player{
    constructor() {
        this.PlayerPosX = width/2
        this.PlayerPosY = height/2
        this.PlayerSize = 100
        // this.PlayerMove = 10
    }

    show() { //Zeichnet den Player
        fill(120,80,140) // Die Farbe muss zuerst angegeben werden 
        ellipse(this.PlayerPosX, this.PlayerPosY, this.PlayerSize)
        
    }
}






