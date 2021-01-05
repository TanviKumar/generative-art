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
  strokeWeight(2)
  noLoop()
  frameRate(2)
}

function draw() {
  background('black')
  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize/2, y + cellSize/2)
    }
  }
}

function drawCell(x, y) {
  push()
  translate(x, y)
  //fill('white')
  //noStroke()
  rectMode(CENTER)
  noFill()
  //rect(0, 0, cellSize, cellSize)
  stroke(shades[1])
  rectMode(CORNER)
  var c1 = shades[0]
  var c2 = shades[1]
  var c3 = shades[2]
  /*strokeWeight(2)
  line(-cellSize/2, -cellSize/2, -cellSize/2, cellSize/2)
  line(-cellSize/2, -cellSize/2, cellSize/2, -cellSize/2)
  line(-cellSize/2, cellSize/2, cellSize/2, cellSize/2)
  line(cellSize/2, -cellSize/2, cellSize/2, cellSize/2)
  strokeWeight(2)*/
  stroke('red')
  
  var t, r, b, l
  t = 0
  r = 0
  b = 0
  l = 0
  // Left one
  if (random() > 0.5) {
    //line(0, 0, cellSize/2, cellSize/2)
    if (random() > 0.5) {
      line(0, 0, 0, -cellSize/2)
      t = 1
      arc(cellSize/2, 0, cellSize, cellSize, 90, 180)
    } else {
      line(0, 0, -cellSize/2, 0)
      l = 1
      arc(0, cellSize/2, cellSize, cellSize, 270, 360)
    }
  } else {
    //line(0, 0, -cellSize/2, -cellSize/2)
    if (random() > 0.5) {
      line(0, 0, 0, cellSize/2)
      b = 1
      arc(-cellSize/2, 0, cellSize, cellSize, 270, 360)
    } else {
      line(0, 0, cellSize/2, 0)
      r = 1
      arc(0, -cellSize/2, cellSize, cellSize, 90, 180)
    }
  }
  
  // Right one
  if (random() > 0.5) {
    //line(0, 0, cellSize/2, -cellSize/2)
    if (b != 1) {
      line(0, 0, 0, cellSize/2)
      arc(cellSize/2, 0, cellSize, cellSize, 180, 270)
    } else if (l != 1){
      line(0, 0, -cellSize/2, 0)
      arc(0, -cellSize/2, cellSize, cellSize, 0, 90)
    }
  } else {
    //line(0, 0, -cellSize/2, cellSize/2)
    if (t != 1) {
      line(0, 0, 0, -cellSize/2)
      arc(-cellSize/2, 0, cellSize, cellSize, 0, 90)
    } else if (r != 1){
      line(0, 0, cellSize/2, 0)
      arc(0, cellSize/2, cellSize, cellSize, 180, 270)
    }
  }
  
  pop()
}