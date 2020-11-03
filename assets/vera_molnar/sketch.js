// Padding around the canvas.
var padding = 15

// Size of grid cells (cellSize x cellSize).
var cellSize = 70

// Probabiity of drawing an inner rectangle.
var chance = 0.6

// Gap between squares
var gap = 10

function setup() {
  createCanvas(800, 800)
  rectMode(CENTER)
  angleMode(DEGREES)
  noLoop()
  //frameRate(3)
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
  for (var size = cellSize - gap; size >= gap; size -= gap) {
    if (random() < chance) {
      var c1Val = random(250);
      var c2Val = random(250);
      var c3Val = random(250);
      var rotateBy = random(5);
      if (random() > 0.5) {
        rotateBy = -rotateBy
      }
      rotate(rotateBy)
      fill(c1Val, c1Val, c2Val)
      if (random() > 0.5)
        rect(0, 0, size - gap, size - gap) 
      else
        circle(0, 0, size)
      rotate(-rotateBy)
    }
  }
  pop()
}