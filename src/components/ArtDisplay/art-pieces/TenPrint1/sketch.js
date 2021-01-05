export default function sketch(p) {
  // Padding around the canvas.
  let padding = 15;

  // Number of squares per row/column
  let row = 24;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 30;
  let gridSize = cellSize * row + padding * 2;

  // Probability of drawing an inner rectangle.
  let chance = 0.6;

  // Gap between squares
  let gap = 10;

  // Extent the square can shift from center
  let shiftLimit = 1;

  let shades = ["#FEDC97", "#B5B682", "#28666E", "#7C9885"];

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    //noLoop()
    p.frameRate(3);
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
    p.fill(shades[0]);
    p.noStroke();
    p.rect(0, 0, cellSize, cellSize);
    p.stroke(0);
    let pp;
    if (p.random() > 0.5) {
      p.line(-cellSize / 2, -cellSize / 2, cellSize / 2, cellSize / 2);
      p.noStroke();
      pp = p.random();
      if (pp < 0.2) {
        p.fill(shades[p.floor(p.random(3) + 1)]);
        p.triangle(
          cellSize / 2,
          -cellSize / 2,
          cellSize / 2,
          cellSize / 2,
          -cellSize / 2,
          -cellSize / 2
        );
      } else if (pp < 0.35) {
        p.fill(shades[p.floor(p.random(3) + 1)]);
        p.triangle(
          -cellSize / 2,
          cellSize / 2,
          cellSize / 2,
          cellSize / 2,
          -cellSize / 2,
          -cellSize / 2
        );
      }
    } else {
      p.line(cellSize / 2, -cellSize / 2, -cellSize / 2, cellSize / 2);
      p.noStroke();
      pp = p.random();
      if (pp < 0.2) {
        p.fill(shades[p.floor(p.random(3) + 1)]);
        p.triangle(
          cellSize / 2,
          -cellSize / 2,
          -cellSize / 2,
          cellSize / 2,
          -cellSize / 2,
          -cellSize / 2
        );
      } else if (pp < 0.35) {
        p.fill(shades[p.floor(p.random(3) + 1)]);
        p.triangle(
          -cellSize / 2,
          cellSize / 2,
          cellSize / 2,
          cellSize / 2,
          cellSize / 2,
          -cellSize / 2
        );
      }
    }
    p.pop();
  }
}
