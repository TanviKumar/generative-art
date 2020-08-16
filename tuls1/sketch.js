// Padding around the canvas.
var padding = 35

// Number of squares per row/column
var row = 8

// Size of grid cells (cellSize x cellSize).
var cellSize = 80
var gridSize = (cellSize * row) + (padding * 2)

// Probability of drawing an inner rectangle.
var chance = 0.6

// Gap between squares
var gap = 10

// Extent the square can shift from center
var shiftLimit = 1

var shades = ['#FEDC97', '#B5B682', '#28666E', '#7C9885', '#bfb9ba', '#0059b2', '#197fe5']

function setup() {
  createCanvas(gridSize, gridSize)
  rectMode(CORNER)
  angleMode(DEGREES)
  strokeWeight(12)
  noLoop()
  frameRate(2)
}

function draw() {
  background(shades[2])
  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize/2, y + cellSize/2)
    }
  }
}

function drawCell(x, y) {
  push()
  translate(x, y)
  fill('white')
  noStroke()
  rectMode(CENTER)
  //rect(0, 0, cellSize, cellSize)
  stroke(shades[1])
  var v1, v2, v3, v4
  
  // Top side
  if (random() > 0.5) {
    v1 = 0
  } else {
    v1 = cellSize/2
  }
  
  // Right side
  if (random() > 0.5) {
    v2 = 0
  } else {
    v2 = cellSize/2
  }
  
  // Bottom side
  if (random() > 0.5) {
    v3 = 0
  } else {
    v3 = -cellSize/2
  }
  
  // Left side
  if (random() > 0.5) {
    v4 = 0
  } else {
    v4 = -cellSize/2
  }
  
  line(0, 0, v1, -cellSize/2)
  line(0, 0, cellSize/2, v2)
  line(0, 0, v3, cellSize/2)
  line(0, 0, -cellSize/2, v4)
  
  
  pop()
}