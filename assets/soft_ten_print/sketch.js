// Padding around the canvas.
var padding = 45

// Number of squares per row/column
var row = 12

// Size of grid cells (cellSize x cellSize).
var cellSize = 50
var gridSize = (cellSize * row) + (padding * 2)

// Probability of drawing an inner rectangle.
var chance = 0.6

// Gap between squares
var gap = 10

// Extent the square can shift from center
var shiftLimit = 1

var shades = ['#FC766A', '#B5B682', '#ebc1f2', '#7C9885']

function setup() {
  createCanvas(gridSize, gridSize)
  rectMode(CENTER)
  angleMode(DEGREES)
  strokeWeight(3)
  noLoop()
  frameRate(2)
}

function draw() {
  background(color('gray'))
  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize/2, y + cellSize/2)
    }
  }
  
  for(let i = 0; i < 5; i++ ) {
    drawRounds(floor(random(row - 2) + 1), floor(random(row - 2) + 1))
  }
 
}

function drawRounds(x, y) {
  push()
  translate(padding + x*cellSize, padding + y*cellSize)
  fill(shades[2])
  noStroke()
  rect(0, 0, cellSize, cellSize)
  stroke(0)
  fill(shades[0])
  arc(cellSize/2, cellSize/2, cellSize*2, cellSize*2, 180, 270);
  translate(cellSize, 0)
  arc(-cellSize/2, cellSize/2, cellSize*2, cellSize*2, 270, 0);
  translate(0, cellSize)
  arc(-cellSize/2, -cellSize/2, cellSize*2, cellSize*2, 0, 90);
  translate(-cellSize, 0)
  arc(cellSize/2, -cellSize/2, cellSize*2, cellSize*2, 90, 180);
  pop()
}

function drawCell(x, y) {
  push()
  translate(x, y)
  fill(shades[2])
  noStroke()
  rect(0, 0, cellSize, cellSize)
  stroke(0)
  strokeWeight(4)
  let r = random()
  if (r < 0.25) {
    arc(-cellSize/2, -cellSize/2, cellSize*2, cellSize*2, 0, 90);
  } else if (r <= 0.5) {
    arc(cellSize/2, cellSize/2, cellSize*2, cellSize*2, 180, 270);
  } else if (r <= 0.75) {
    arc(cellSize/2, -cellSize/2, cellSize*2, cellSize*2, 90, 180);
  } else {
    arc(-cellSize/2, cellSize/2, cellSize*2, cellSize*2, 270, 0);
  }
  pop()
}