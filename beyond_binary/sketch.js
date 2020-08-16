var sec_count = 0

var skin = ['#8d5524', '#C68642', '#e0ac69', '#f1c27d', '#ffdbac']

var body1 = 0
var body2 = 150
var bodyy = 0

var time1 = 3
var time2 = 3

function setup() {
  createCanvas(300, 300);
  rectMode(CENTER)
  frameRate(1)
  strokeWeight(2)
}

function draw() {
  fill('#DEFDE0');
  square(150, 150, 300)
  if (sec_count < time1) {
    drawGirl(body1, bodyy)
    drawBoy(body2, body1)
  } else if (sec_count < time2 + time1) {
    drawGirl(body1, bodyy)
    drawGirl(body2, bodyy)
  } else if (sec_count < time1 + 2 * time2) {
    drawBoy(body1, bodyy)
    drawBoy(body2, bodyy)
  } else {
    drawPerson(body1, bodyy)
    drawPerson(body2, bodyy)
  } 
  sec_count++;
}

function basicParts() {
  var c = skin[floor(random(5))]
  fill(c)
  circle(75, 50, 50)
  rect(65, 220, 20, 75)
  rect(87, 220, 20, 75)
}

function drawGirl(a, b, c) {
  push()
  translate(a, b)
  basicParts()
  fill('#EFCF20')
  triangle(40, 75, 110, 75, 75, 125)
  triangle(40, 180, 110, 180, 75, 125)
  pop()
}

function drawBoy(a, b) {
  push()
  translate(a, b)
  basicParts()
  fill('#A083D5')
  rect(75, 100, 70, 52)
  rect(75, 155, 70, 52)
  pop()
}

function drawPerson(a, b) {
  push()
  translate(a, b)
  basicParts()
  if (random() > 0.5) {
    fill('#EFCF20')
    triangle(40, 75, 110, 75, 75, 125)
  } else {
    fill('#A083D5')
    rect(75, 100, 70, 52)
  }

  if (random() > 0.5) {
    fill('#EFCF20')
    triangle(40, 180, 110, 180, 75, 125)
  } else {
    fill('#A083D5')
    rect(75, 155, 70, 52)
  }
  pop()
}