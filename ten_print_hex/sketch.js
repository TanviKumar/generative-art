// Padding around the canvas.
var padding = 15

// Number of squares per row/column
var row = 6

// Size of grid cells (cellSize x cellSize).
var hSize = 80
var radii3 = hSize / 2
var radii4 = hSize / 3
var radii2 = hSize * 2 / 3
var radii5 = hSize / 6
var radii1 = hSize * 5 / 6
var vSize
var gridSize = 600 + (padding * 3)

// Probability of drawing an inner rectangle.
var chance = 0.6

// Gap between squares
var gap = 10

// Extent the square can shift from center
var shiftLimit = 1

var shades = ['#D1BCE3', '#585481', '#C49BBB','#B5B682', '#FEDC97', '#B5B682', '#28666E', '#7C9885']

function setup() {
  createCanvas(gridSize, gridSize)
  rectMode(CENTER)
  angleMode(DEGREES)
  strokeWeight(3)
  noLoop()
  frameRate(2)
  vSize = hSize / 2 * sqrt(3)
}

function draw() {
  background(shades[0])
  stroke(0)
  var i = 1
  for (var y = padding + vSize / 2; y < height - padding; y += vSize / 2, i++) {
    for (var x = padding + hSize / 2; x < width - padding; x += hSize * 3 / 2) {
      if (i % 2)
        drawCell(x, y)
      else
        drawCell(x + hSize * 3 / 4, y)
    }
  }
  
  drawBorder()
}

function drawBorder() {
  fill(shades[0])
  var border = 50
  noStroke()
  rect(border/2, gridSize/2, border, gridSize)
  rect(gridSize - border/2, gridSize/2, border, gridSize)
  rect(gridSize/2, border/2, gridSize, border)
  rect(gridSize/2, gridSize - border/2, gridSize, border)
}

function drawCell(x, y) {
  push()
  translate(x, y)
  noFill()
  /*line(-hSize / 2, 0, -hSize / 4, -vSize / 2)
  line(-hSize / 2, 0, -hSize / 4, vSize / 2)
  line(hSize / 2, 0, hSize / 4, -vSize / 2)
  line(hSize / 2, 0, hSize / 4, vSize / 2)
  line(hSize / 4, vSize / 2, -hSize / 4, vSize / 2)
  line(hSize / 4, -vSize / 2, -hSize / 4, -vSize / 2)*/
  if (random() > 0.5) {
    fill(shades[1])
    drawArc1(radii1)
    fill(shades[3])
    drawArc1(radii2)
    fill(shades[1])
    drawArc1(radii3)
    fill(shades[3])
    drawArc1(radii4)
    fill(shades[0])
    drawArc1(radii5)
  } else {
    fill(shades[3])
    drawArc2(radii1)
    fill(shades[1])
    drawArc2(radii2)
    fill(shades[3])
    drawArc2(radii3)
    fill(shades[1])
    drawArc2(radii4)
    fill(shades[0])
    drawArc2(radii5)
  }
  pop()
}

function drawArc1(radi) {
  arc(hSize / 2, 0, radi, radi, 120, 240)
  arc(-hSize / 4, vSize / 2, radi, radi, 240, 0)
  arc(-hSize / 4, -vSize / 2, radi, radi, 0, 120)
}

function drawArc2(radii1) {
  arc(-hSize / 2, 0, radii1, radii1, 300, 60)
  arc(hSize / 4, vSize / 2, radii1, radii1, 180, 300)
  arc(hSize / 4, -vSize / 2, radii1, radii1, 60, 180)
}