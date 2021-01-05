// Padding around the canvas.
var padding = 15

// Number of squares per row/column
var row = 2
var gap = 20

// Size of grid cells (cellSize x cellSize).
var cellSize = 200
var gridSize = (cellSize * row) + (padding * 2) + (gap*(row - 1))

// Probability of drawing an inner rectangle.
var chance = 0.6

// Number of inner rectangles
var c = 10

// Extent the square can shift from center
var shiftLimit = 1

var shades = ['#FF0000', '#00FF00', '#0000FF', '#65000B']

function setup() {
  createCanvas(gridSize, gridSize)
  rectMode(CORNER)
  angleMode(DEGREES)
  strokeWeight(0)
  noLoop()
  frameRate(2)
}

function draw() {
  background(255)
  for (var y = padding; y < height - 2 * padding; y += cellSize + gap) {
    for (var x = padding; x < width - 2 * padding; x += cellSize + gap) {
      drawCell(x, y)
    }
  }
}

function drawCell(x, y) {
  push()
  translate(x, y)
  noFill()
  rect(0, 0, cellSize, cellSize)
  for (let i = 0; i < 2500; ++i) { 
    var col = color(shades[floor(random(3)) + 0])
    col.setAlpha(30)
    fill(col)
    var rx = (floor(random(120)) + 30)
    //rx = rx - (rx%20)
    var ry = (floor(random(100)) + 30)
    //ry = ry - (ry%20)
    if (i%4 == 0)
      rect(0, rx, ry, cellSize - rx)
    if (i%4 == 1)
      rect(cellSize - rx, 0, rx, ry)
    if (i%4 ==2)
      rect(0, 0, ry, rx)
    if (i%4 == 3)
      rect(cellSize - rx, cellSize - ry, rx, ry)
  }
  pop()
}