export default function sketch(p) {
  // Padding around the canvas.
  let padding = 15;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 70;

  // Probabiity of drawing an inner rectangle.
  let chance = 0.6;

  // Gap between squares
  let gap = 10;

  p.setup = function () {
    p.createCanvas(800, 800);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.noLoop();
    //frameRate(3)
  };

  p.draw = function () {
    p.background(255);

    for (let y = padding; y < p.height - 2 * padding; y += cellSize) {
      for (let x = padding; x < p.width - 2 * padding; x += cellSize) {
        drawCell(x + cellSize / 2, y + cellSize / 2);
      }
    }
  };

  function drawCell(x, y) {
    p.push();
    p.translate(x, y);
    for (let size = cellSize - gap; size >= gap; size -= gap) {
      if (p.random() < chance) {
        let c1Val = p.random(250);
        let c2Val = p.random(250);
        let c3Val = p.random(250);
        let rotateBy = p.random(5);
        if (p.random() > 0.5) {
          rotateBy = -rotateBy;
        }
        p.rotate(rotateBy);
        p.fill(c1Val, c1Val, c2Val);
        if (p.random() > 0.5) p.rect(0, 0, size - gap, size - gap);
        else p.circle(0, 0, size);
        p.rotate(-rotateBy);
      }
    }
    p.pop();
  }
}
