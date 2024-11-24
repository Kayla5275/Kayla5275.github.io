//Project set up
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') //specifying that this is in 2D

// 16:9 screen ratio
canvas.width = 1024 //64 * 16
canvas.height = 576 //64 * 9

//Adding background of level 1
const backgroundLevel1 = new Sprite({
    position:{
        x:0,
        y:0,
    },
    imageSRC: ''
})

//Create player
const player = new Player()

//Animation loop
function animate(){
    window.requestAnimationFrame(animate)
    backgroundLevel1.draw()
    player.draw()
}
animate()

// Setting up movement
window.addEventListener('keydown', e=>{
    if(e.code=="KeyD"){
        player.moveright()
    }
})
window.addEventListener('keydown', e=>{
    if(e.code=="KeyA"){
        player.moveleft()
    }
})
window.addEventListener('keydown', e=>{
    if(e.code=="KeyW"){
        player.moveup()
    }
})
window.addEventListener('keydown', e=>{
    if(e.code=="KeyS"){
        player.movedown()
    }
})