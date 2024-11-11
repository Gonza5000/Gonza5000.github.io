const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

let bola = new Bola(canvas.width/2, canvas.height/2)

function animar() {
    bola.dibujar()
    bola.mover()

    requestAnimationFrame(animar)
}

animar()