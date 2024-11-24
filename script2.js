let canvas
let ctx
let ballX = 75
let ballY = 75
let ballSpeedX = 5
let ballSpeedY = 5

const moveAll = () => {
// function moveAll() {
  ballX += ballSpeedX
  ballY += ballSpeedY

  if (ballX < 0) ballSpeedX *= -1
  if (ballX > canvas.width) ballSpeedX *= -1
  if (ballY < 0) ballSpeedY *= -1
  if (ballY > canvas.height) ballSpeedY *= -1
}

const drawAll = () => {
// function drawAll() {
  ctx.fillStyle = '#ff4500'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2, true)
  ctx.fill()
}

const updateAll = () => {
// function updateAll() {
  moveAll()
  drawAll()
}

window.onload = () => {
  canvas = document.getElementById('game-canvas')
  ctx = canvas.getContext('2d')
  const fps = 30
  setInterval(updateAll, 1000 / fps) 
}
