const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

let bolas = []

for(let i = 0; i < 5; i++){
    bolas.push(new Bola(canvas.width/2, canvas.height/2))
}

function animar() {

    bolas.forEach(bola => {
        bola.dibujar()
        bola.mover()
    })
    

    requestAnimationFrame(animar)
}

animar()