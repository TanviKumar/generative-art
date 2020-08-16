var rad = 150
var steps = 10

function setup() {
  createCanvas(1000, 1000)
  rectMode(CENTER)
  angleMode(RADIANS)
  //angleMode(DEGREES)
  blendMode(BLEND)
  noLoop()
}

function draw() {
  background("black")
  translate(width/2, height/2)
  noStroke()
  for (let j = 150; j < 400; j+=25) {
    rad = j
    for (let i = 0; i < 360; i+=steps) {
      var c = color(random(200)+20, random(20)+ 20, random(200)+20)
      c.setAlpha(75)
      fill(c)
      rect(rad*cos(i), rad*sin(i), random(30) + 25, random(30) + 25)
    }
    if (steps > 1)
      steps--
  }
  c = color("white")
  c.setAlpha(60)
  fill(c)
  circle(-100, -120, 150)
  circle(120, 120, 40)
}
