// Padding around the canvas.
var padding = 50

// Number of squares per row/column
var row = 4

// Size of grid cells (cellSize x cellSize).
var cellSize = 100
var gridSize = (cellSize * row) + (padding * (row + 1))

// Probabiity of drawing an inner rectangle.
var chance = 0.6

// Gap between squares
var gap = 10

// Extent the square can shift from center
var shiftLimit = 15

var shades = ['#FEDC97', '#B5B682', '#28666E', '#7C9885']
var shades = ['#ffe5fa', '#ffb2ff', '#e500ff', '#c402e2']
var shades = ['#e1ff00', '#ecf79b', '#f6ff7c', '#fff600']
var shades = ['#ffaabb', '#ff7799', '#ffbbcc', '#ff3344']

function setup() {
  createCanvas(gridSize, gridSize)
  rectMode(CENTER)
  angleMode(DEGREES)
  noLoop()
  frameRate(2)
}

function draw() {
  background(255)
  for (var y = padding, i = 0; y < gridSize; y += cellSize + padding, i++) {
    for (var x = padding, j = 0; x < gridSize; x += cellSize + padding, j++) {
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
  
  rect(0, 0, cellSize, cellSize)
  fill(shades[0])
  triangle(xShift, yShift, cellSize/2, cellSize/2, cellSize/2, -cellSize/2)
  fill(shades[1])
  triangle(xShift, yShift, -cellSize/2, cellSize/2, -cellSize/2, -cellSize/2)
  fill(shades[2])
  triangle(xShift, yShift, cellSize/2, cellSize/2, -cellSize/2, cellSize/2)
  fill(shades[3])
  triangle(xShift, yShift, cellSize/2, -cellSize/2, -cellSize/2, -cellSize/2)
  push()
  translate(xShift, yShift)
  //fill('white')
  //circle(0, 0, 7)
  pop()
  pop()
}