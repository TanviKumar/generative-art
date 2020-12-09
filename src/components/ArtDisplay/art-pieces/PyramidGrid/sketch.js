export default function sketch(p) {
  // Padding around the canvas.
  let padding = 50;

  // Number of squares per row/column
  let row = 4;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 100;
  let gridSize = cellSize * row + padding * (row + 1);

  // Probabiity of drawing an inner rectangle.
  let chance = 0.6;

  // Gap between squares
  let gap = 10;

  // Extent the square can shift from center
  let shiftLimit = 15;

  let shades = ["#FEDC97", "#B5B682", "#28666E", "#7C9885"];
  shades = ["#ffe5fa", "#ffb2ff", "#e500ff", "#c402e2"];
  shades = ["#e1ff00", "#ecf79b", "#f6ff7c", "#fff600"];
  shades = ["#ffaabb", "#ff7799", "#ffbbcc", "#ff3344"];

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.noLoop();
    p.frameRate(2);
  };

  p.draw = function () {
    p.background(255);
    for (let y = padding, i = 0; y < gridSize; y += cellSize + padding, i++) {
      for (let x = padding, j = 0; x < gridSize; x += cellSize + padding, j++) {
        drawCell(x + cellSize / 2, y + cellSize / 2, i, j);
      }
    }
  };

  function drawCell(x, y, a, b) {
    p.push();
    p.translate(x, y);
    let xShift = p.ceil(p.random(shiftLimit));
    let yShift = p.ceil(p.random(shiftLimit));
    if (p.random() > 0.5) {
      xShift = -xShift;
    }
    if (p.random() > 0.5) {
      yShift = -yShift;
    }

    p.rect(0, 0, cellSize, cellSize);
    p.fill(shades[0]);
    p.triangle(
      xShift,
      yShift,
      cellSize / 2,
      cellSize / 2,
      cellSize / 2,
      -cellSize / 2
    );
    p.fill(shades[1]);
    p.triangle(
      xShift,
      yShift,
      -cellSize / 2,
      cellSize / 2,
      -cellSize / 2,
      -cellSize / 2
    );
    p.fill(shades[2]);
    p.triangle(
      xShift,
      yShift,
      cellSize / 2,
      cellSize / 2,
      -cellSize / 2,
      cellSize / 2
    );
    p.fill(shades[3]);
    p.triangle(
      xShift,
      yShift,
      cellSize / 2,
      -cellSize / 2,
      -cellSize / 2,
      -cellSize / 2
    );
    p.push();
    p.translate(xShift, yShift);
    //fill('white')
    //circle(0, 0, 7)
    p.pop();
    p.pop();
  }
}
