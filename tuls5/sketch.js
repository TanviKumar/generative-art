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
  strokeWeight(3)
  noLoop()
  frameRate(2)
}

function draw() {
  background('white')
  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize/2, y + cellSize/2)
    }
  }
}

function drawCell(x, y) {
  push()
  translate(x, y)
  var c1 = color(shades[0])
  var c2 = color('red')
  var c3 = color(shades[2])
  c1.setAlpha(50)
  c2.setAlpha(100)
  c3.setAlpha(100)
  fill(c1)
  //noStroke()
  rectMode(CENTER)
  //noFill()
  rect(0, 0, cellSize, cellSize)
  rectMode(CORNER)
  
  strokeWeight(2)
  stroke('red')
  noStroke()
  
  var t, r, b, l
  t = 0
  r = 0
  b = 0
  l = 0
  
  /*if(random() > 0.5) {
    fill(c2)
  } else {
    fill(c3)
  }*/
  // Left one
  fill(c2)
  if (random() > 0.5) {
    //line(0, 0, cellSize/2, cellSize/2)
    if (random() > 0.5) {
      line(0, 0, 0, -cellSize/2)
      t = 1
      arc(cellSize/2, 0, cellSize, cellSize, 90, 180)
      rect(0, 0, cellSize/2, -cellSize/2)
    } else {
      line(0, 0, -cellSize/2, 0)
      l = 1
      arc(0, cellSize/2, cellSize, cellSize, 270, 360)
      rect(0, 0, -cellSize/2, cellSize/2)
    }
  } else {
    //line(0, 0, -cellSize/2, -cellSize/2)
    if (random() > 0.5) {
      line(0, 0, 0, cellSize/2)
      b = 1
      arc(-cellSize/2, 0, cellSize, cellSize, 270, 360)
      rect(0, 0, -cellSize/2, cellSize/2)
    } else {
      line(0, 0, cellSize/2, 0)
      r = 1
      arc(0, -cellSize/2, cellSize, cellSize, 90, 180)
      rect(0, 0, cellSize/2, -cellSize/2)
    }
  }
  
  /*if(random() > 0.5) {
    fill(c2)
  } else {
    fill(c3)
  }*/
  
  // Right one
  fill(c3)
  if (random() > 0.5) {
    //line(0, 0, cellSize/2, -cellSize/2)
    if (b != 1) {
      line(0, 0, 0, cellSize/2)
      arc(cellSize/2, 0, cellSize, cellSize, 180, 270)
      rect(0, 0, cellSize/2, cellSize/2)
    } else if (l != 1){
      line(0, 0, -cellSize/2, 0)
      arc(0, -cellSize/2, cellSize, cellSize, 0, 90)
      rect(0, 0, -cellSize/2, -cellSize/2)
    }
  } else {
    //line(0, 0, -cellSize/2, cellSize/2)
    if (t != 1) {
      line(0, 0, 0, -cellSize/2)
      arc(-cellSize/2, 0, cellSize, cellSize, 0, 90)
      rect(0, 0, -cellSize/2, -cellSize/2)
    } else if (r != 1){
      line(0, 0, cellSize/2, 0)
      arc(0, cellSize/2, cellSize, cellSize, 180, 270)
      rect(0, 0, cellSize/2, cellSize/2)
    }
  }
  
  pop()
}