//Project set up
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') //specifying that this is in 2D

// 16:9 screen ratio
canvas.width = 1024 //64 * 16
canvas.height = 576 //64 * 9

//Create player
const player = new Player()

//Animation loop
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.draw()
    player.update()
}
animate()