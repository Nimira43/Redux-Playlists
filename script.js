let canvas
let ctx
let ballX = 75
let ballY = 75
let ballSpeedX = 5
let ballSpeedY = 5

window.onload = () => {
  canvas = document.getElementById('game-canvas')
  ctx = canvas.getContext('2d')
  const fps = 30
  setInterval(updateAll, 1000 / fps) 
}

const updateAll = () => {
  moveAll()
  drawAll()
}

const moveAll = () => {
  ballX += ballSpeedX
  ballY += ballSpeedY

  if (ballX < 0) ballSpeedX *= -1
  if (ballX > canvas.width) ballSpeedX *= -1
  if (ballY < 0) ballSpeedY *= -1
  if (ballY > canvas.height) ballSpeedY *= -1
}

const drawAll = () =>  {
  colourRect(0, 0, canvas.width, canvas.height, '#ff4500')
  colourCircle(ballX, ballY, 10, '#fff')
}

const colourRect = (topLeftX, topLeftY, boxWidth, boxHeight, fillColour) => {
  ctx.fillStyle = fillColour
  ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight)
}

const colourCircle = (centreX, centreY, radius, fillColour) => {
  ctx.fillStyle = fillColour
  ctx.beginPath()
  ctx.arc(centreX, centreY, 10, 0, Math.PI * 2, true)
  ctx.fill()
}