// Padding around the canvas.
var padding = 15

// Number of squares per row/column
var row = 14

// Size of grid cells (cellSize x cellSize).
var cellSize = 50
var gridSize = (cellSize * row) + (padding * 2)

// Probabiity of drawing an inner rectangle.
var chance = 0.6

// Gap between squares
var gap = 10

// Extent the square can shift from center
var shiftLimit = 1

var shades = ['#FEDC97', '#B5B682', '#28666E', '#7C9885']

// Stores location of each center
var centers = new Array(14)

function setup() {
  createCanvas(gridSize, gridSize)
  rectMode(CENTER)
  angleMode(DEGREES)
  //noLoop()
  frameRate(10)
  for(var i = 0; i < row; i++) {
    centers[i] = new Array(14)
  }
  for (i = 0; i < row; ++i) {
    for (var j = 0; j < row; ++j) {
      centers[i][j] = {}
      centers[i][j].x = 0
      centers[i][j].y = 0
    }
  }
}

function draw() {
  background(255)
  for (var y = padding, i = 0; y < height - 2 * padding; y += cellSize, i++) {
    for (var x = padding, j = 0; x < width - 2 * padding; x += cellSize, j++) {
      drawCell(x + cellSize/2, y + cellSize/2, i, j)
    }
  }
}

function drawCell(x, y, a, b) {
  push()
  translate(x, y)
  var xShift = ceil(random(shiftLimit))
  var yShift = ceil(random(shiftLimit))
  if (random() > 0.5) {
    xShift = -xShift
  }
  if (random() > 0.5) {
    yShift = -yShift
  }
  centers[a][b].x += xShift
  centers[a][b].y += yShift
  
  // Check
  if (centers[a][b].x < -(cellSize / 3) || centers[a][b].x > cellSize / 3) {
    centers[a][b].x -= (2 * xShift)
  }
  if (centers[a][b].y < -(cellSize / 3) || centers[a][b].y > cellSize / 3) {
    centers[a][b].y -= (2 * yShift)
  }
  
  xShift = centers[a][b].x
  yShift = centers[a][b].y
  rect(0, 0, cellSize, cellSize)
  fill(shades[1])
  triangle(xShift, yShift, cellSize/2, cellSize/2, cellSize/2, -cellSize/2)
  fill(shades[1])
  triangle(xShift, yShift, -cellSize/2, cellSize/2, -cellSize/2, -cellSize/2)
  fill(shades[3])
  triangle(xShift, yShift, cellSize/2, cellSize/2, -cellSize/2, cellSize/2)
  fill(shades[0])
  triangle(xShift, yShift, cellSize/2, -cellSize/2, -cellSize/2, -cellSize/2)
  push()
  translate(xShift, yShift)
  fill('white')
  circle(0, 0, 7)
  pop()
  pop()
}