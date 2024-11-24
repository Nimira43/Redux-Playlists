const paddleWidth = 100
const paddleHeight = 10
let paddleX = 400

let canvas
let ctx

let ballX = 75
let ballY = 75
let ballSpeedX = 5
let ballSpeedY = 5

function updateMousePos(e) {
  let rect = canvas.getBoundingClientRect()
  let mouseX = e.clientX - rect.left - document.documentElement.scrollLeft
  paddleX = mouseX - paddleWidth / 2
}

window.onload = () => {
  canvas = document.getElementById('game-canvas')
  ctx = canvas.getContext('2d')
  const fps = 30
  setInterval(updateAll, 1000 / fps) 
  canvas.addEventListener('mousemove', updateMousePos)
}

const updateAll = () => {
  moveAll()
  drawAll()
}

const moveAll = () => {
  ballX += ballSpeedX
  ballY += ballSpeedY

  if (ballX < 0 || ballX > canvas.width) ballSpeedX *= -1
  if (ballY < 0 || ballY > canvas.height) ballSpeedY *= -1
}

const drawAll = () =>  {
  colourRect(0, 0, canvas.width, canvas.height, '#ff4500')
  colourCircle(ballX, ballY, 10, '#fff')
  colourRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight, '#111')
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