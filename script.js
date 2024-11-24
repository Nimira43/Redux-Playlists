// Configuration constants 
const PADDLE_WIDTH = 100; 
const PADDLE_HEIGHT = 10; 
const PADDLE_OFFSET = 60
const BALL_RADIUS = 10; 
const BALL_SPEED_X = 5; 
const BALL_SPEED_Y = 7; 
const BACKGROUND_COLOUR = '#ff4500'; 
const BALL_COLOUR = '#fff'; 
const PADDLE_COLOUR = '#ffd700';

let paddleX = 400
let ballX = 75
let ballY = 75
let ballSpeedX = BALL_SPEED_X
let ballSpeedY = BALL_SPEED_Y

let canvas
let ctx

// Updates the paddle position based on mouse movements
function updateMousePos(e) {
  let rect = canvas.getBoundingClientRect()
  let mouseX = e.clientX - rect.left - document.documentElement.scrollLeft
  paddleX = mouseX - PADDLE_WIDTH / 2
}

// Initialises the game, setting up the canvas and event listeners
window.onload = () => {
  canvas = document.getElementById('game-canvas')
  ctx = canvas.getContext('2d')
  const fps = 30
  setInterval(updateAll, 1000 / fps) 
  canvas.addEventListener('mousemove', updateMousePos)
}

// Updates game state by moving objects and drawing the canvas
const updateAll = () => {
  moveAll()
  drawAll()
}

// Ball reset positiion
const ballReset = () => {
  ballX = canvas.width / 2
  ballY = canvas.height / 2
}

// Moves the ball, handles boundary collisions and resets the ball when it moves out of bounds at the bottom. 
const moveAll = () => {
  ballX += ballSpeedX
  ballY += ballSpeedY

  if (ballX < 0 || ballX > canvas.width) ballSpeedX *= -1
  if (ballY < 0) ballSpeedY *= -1
  if (ballY > canvas.height) ballReset()

  const paddleTop = canvas.height - PADDLE_OFFSET 
  const paddleBottom = paddleTop + PADDLE_HEIGHT 
  const paddleLeft = paddleX 
  const paddleRight = paddleLeft + PADDLE_WIDTH 

  if (ballY > paddleTop &&
      ballY < paddleBottom &&
      ballX > paddleLeft &&
      ballY < paddleRight) {
        ballSpeedY *= -1
      }
}

// Draws all game elements on the canvas
const drawAll = () =>  {
  colourRect(0, 0, canvas.width, canvas.height, BACKGROUND_COLOUR) // Clear screen
  colourCircle(ballX, ballY, BALL_RADIUS, BALL_COLOUR) // Draw ball
  colourRect(paddleX, canvas.height - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_COLOUR) // Draw paddle
}

// Draws a filled rectangle on the canvas
const colourRect = (topLeftX, topLeftY, boxWidth, boxHeight, fillColour) => {
  ctx.fillStyle = fillColour
  ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight)
}

// Draws a filled circle on the canvas
const colourCircle = (centreX, centreY, radius, fillColour) => {
  ctx.fillStyle = fillColour
  ctx.beginPath()
  ctx.arc(centreX, centreY, 10, 0, Math.PI * 2, true)
  ctx.fill()
}