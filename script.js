let canvas
let ctx
let ballX = 75

window.onload = () => {
  canvas = document.getElementById('game-canvas')
  ctx = canvas.getContext('2d')
  const fps = 30
  setInterval(updateAll, 1000 / fps)
  
}

function updateAll() {
  ballX += 5
  ctx.fillStyle = '#ff4500'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.arc(100, 100, 10, 0, Math.PI * 2, true)
  ctx.fill()
}