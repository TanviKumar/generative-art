// Padding around the canvas.
var padding = 15

// Number of squares per row/column
var row = 24

// Size of grid cells (cellSize x cellSize).
var cellSize = 30
var gridSize = (cellSize * row) + (padding * 2)

// Probability of drawing an inner rectangle.
var chance = 0.6

// Gap between squares
var gap = 10

// Extent the square can shift from center
var shiftLimit = 1

var shades = ['#FEDC97', '#B5B682', '#28666E', '#7C9885']

function setup() {
  createCanvas(gridSize, gridSize)
  rectMode(CENTER)
  angleMode(DEGREES)
  //noLoop()
  frameRate(3)
}

function draw() {
  background(255)
  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize/2, y + cellSize/2)
    }
  }
}

function drawCell(x, y) {
  push()
  translate(x, y)
  fill(shades[0])
  noStroke()
  rect(0, 0, cellSize, cellSize)
  stroke(0)
  if (random() > 0.5) {
    line(-cellSize/2, -cellSize/2, cellSize/2, cellSize/2)
    noStroke()
    let pp = random()
    if (pp < 0.2) {
      fill(shades[floor(random(3) + 1)])
      triangle(cellSize/2, -cellSize/2, cellSize/2, cellSize/2,-cellSize/2, -cellSize/2)
    } else if (pp < 0.35) {
      fill(shades[floor(random(3) + 1)])
      triangle(-cellSize/2, cellSize/2, cellSize/2, cellSize/2,-cellSize/2, -cellSize/2)
    }
  } else {
    line(cellSize/2, -cellSize/2, -cellSize/2, cellSize/2)
    noStroke()
    pp = random()
    if (pp < 0.2) {
      fill(shades[floor(random(3) + 1)])
      triangle(cellSize/2, -cellSize/2, -cellSize/2, cellSize/2,-cellSize/2, -cellSize/2)
    } else if (pp < 0.35) {
      fill(shades[floor(random(3) + 1)])
      triangle(-cellSize/2, cellSize/2, cellSize/2, cellSize/2, cellSize/2, -cellSize/2)
    } 
  }
  pop()
}