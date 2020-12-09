export default function sketch(p) {
  // Padding around the canvas.
  let padding = 45;

  // Number of squares per row/column
  let row = 12;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 50;
  let gridSize = cellSize * row + padding * 2;

  // Probability of drawing an inner rectangle.
  let chance = 0.6;

  // Gap between squares
  let gap = 10;

  // Extent the square can shift from center
  let shiftLimit = 1;

  let shades = ["#FC766A", "#B5B682", "#ebc1f2", "#7C9885"];

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(3);
    p.noLoop();
    p.frameRate(2);
  };

  p.draw = function () {
    p.background(p.color("gray"));
    for (let y = padding; y < p.height - 2 * padding; y += cellSize) {
      for (let x = padding; x < p.width - 2 * padding; x += cellSize) {
        drawCell(x + cellSize / 2, y + cellSize / 2);
      }
    }

    for (let i = 0; i < 5; i++) {
      drawRounds(
        p.floor(p.random(row - 2) + 1),
        p.floor(p.random(row - 2) + 1)
      );
    }
  };

  function drawRounds(x, y) {
    p.push();
    p.translate(padding + x * cellSize, padding + y * cellSize);
    p.fill(shades[2]);
    p.noStroke();
    p.rect(0, 0, cellSize, cellSize);
    p.stroke(0);
    p.fill(shades[0]);
    p.arc(cellSize / 2, cellSize / 2, cellSize * 2, cellSize * 2, 180, 270);
    p.translate(cellSize, 0);
    p.arc(-cellSize / 2, cellSize / 2, cellSize * 2, cellSize * 2, 270, 0);
    p.translate(0, cellSize);
    p.arc(-cellSize / 2, -cellSize / 2, cellSize * 2, cellSize * 2, 0, 90);
    p.translate(-cellSize, 0);
    p.arc(cellSize / 2, -cellSize / 2, cellSize * 2, cellSize * 2, 90, 180);
    p.pop();
  }

  function drawCell(x, y) {
    p.push();
    p.translate(x, y);
    p.fill(shades[2]);
    p.noStroke();
    p.rect(0, 0, cellSize, cellSize);
    p.stroke(0);
    p.strokeWeight(4);
    let r = p.random();
    if (r < 0.25) {
      p.arc(-cellSize / 2, -cellSize / 2, cellSize * 2, cellSize * 2, 0, 90);
    } else if (r <= 0.5) {
      p.arc(cellSize / 2, cellSize / 2, cellSize * 2, cellSize * 2, 180, 270);
    } else if (r <= 0.75) {
      p.arc(cellSize / 2, -cellSize / 2, cellSize * 2, cellSize * 2, 90, 180);
    } else {
      p.arc(-cellSize / 2, cellSize / 2, cellSize * 2, cellSize * 2, 270, 0);
    }
    p.pop();
  }
}
