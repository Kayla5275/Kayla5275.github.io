//Adding a player class
class Player{
    constructor(){
        this.position = {
            x:100,
            y:100,
        }
        this.velocity = {
            x:0,
            y:0,
        }
        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height,
            top: this.position.y - this.height,

        } 
    }
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    moveleft(){
        this.position.x -= this.velocity.x
        this.velocity.x += 1
    }
    moveright(){
        this.position.x += 5
    }
    moveup(){
        this.position.y -= this.velocity.y
        this.sides.top = this.position.y - this.height
        if(this.sides.top - this.velocity.y < canvas.height){
            this.velocity.y = 5
        }else this.velocity.y = 0
    }
    movedown(){
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height
        if(this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y = 5
        }else this.velocity.y = 0
    }
}

//General sprite class
class Sprite{
    constructor({position, imageSRC}){
        this.position = position
        this.image = new Image()
        this.image.src = imageSRC

    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}