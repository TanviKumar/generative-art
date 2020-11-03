export default function sketch(p) {
  var sec_count = 0;

  var skin = ["#8d5524", "#C68642", "#e0ac69", "#f1c27d", "#ffdbac"];

  var body1 = 0;
  var body2 = 150;
  var bodyy = 0;

  var time1 = 3;
  var time2 = 3;

  p.setup = function () {
    p.createCanvas(300, 300);
    p.rectMode(p.CENTER);
    p.frameRate(1);
    p.strokeWeight(2);
  };

  p.draw = function () {
    p.fill("#DEFDE0");
    p.square(150, 150, 300);
    if (sec_count < time1) {
      drawGirl(body1, bodyy);
      drawBoy(body2, body1);
    } else if (sec_count < time2 + time1) {
      drawGirl(body1, bodyy);
      drawGirl(body2, bodyy);
    } else if (sec_count < time1 + 2 * time2) {
      drawBoy(body1, bodyy);
      drawBoy(body2, bodyy);
    } else {
      drawPerson(body1, bodyy);
      drawPerson(body2, bodyy);
    }
    sec_count++;
  };

  function basicParts() {
    var c = skin[p.floor(p.random(5))];
    p.fill(c);
    p.circle(75, 50, 50);
    p.rect(65, 220, 20, 75);
    p.rect(87, 220, 20, 75);
  }

  function drawGirl(a, b, c) {
    p.push();
    p.translate(a, b);
    basicParts();
    p.fill("#EFCF20");
    p.triangle(40, 75, 110, 75, 75, 125);
    p.triangle(40, 180, 110, 180, 75, 125);
    p.pop();
  }

  function drawBoy(a, b) {
    p.push();
    p.translate(a, b);
    basicParts();
    p.fill("#A083D5");
    p.rect(75, 100, 70, 52);
    p.rect(75, 155, 70, 52);
    p.pop();
  }

  function drawPerson(a, b) {
    p.push();
    p.translate(a, b);
    basicParts();
    if (p.random() > 0.5) {
      p.fill("#EFCF20");
      p.triangle(40, 75, 110, 75, 75, 125);
    } else {
      p.fill("#A083D5");
      p.rect(75, 100, 70, 52);
    }

    if (p.random() > 0.5) {
      p.fill("#EFCF20");
      p.triangle(40, 180, 110, 180, 75, 125);
    } else {
      p.fill("#A083D5");
      p.rect(75, 155, 70, 52);
    }
    p.pop();
  }
}
