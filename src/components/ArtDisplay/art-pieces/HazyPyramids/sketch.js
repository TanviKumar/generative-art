export default function sketch(p) {
  // Padding around the canvas.
  let padding = 15;

  // Number of squares per row/column
  let row = 14;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 50;
  let gridSize = cellSize * row + padding * 2;

  // Probabiity of drawing an inner rectangle.
  let chance = 0.6;

  // Gap between squares
  let gap = 10;

  // Extent the square can shift from center
  let shiftLimit = 1;

  let shades = ["#FEDC97", "#B5B682", "#28666E", "#7C9885"];

  // Stores location of each center
  let centers = new Array(14);

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    //noLoop()
    p.frameRate(10);
    for (let i = 0; i < row; i++) {
      centers[i] = new Array(14);
    }
    for (let i = 0; i < row; ++i) {
      for (let j = 0; j < row; ++j) {
        centers[i][j] = {};
        centers[i][j].x = 0;
        centers[i][j].y = 0;
      }
    }
  };

  p.draw = function () {
    p.background(255);
    for (
      let y = padding, i = 0;
      y < p.height - 2 * padding;
      y += cellSize, i++
    ) {
      for (
        let x = padding, j = 0;
        x < p.width - 2 * padding;
        x += cellSize, j++
      ) {
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
    centers[a][b].x += xShift;
    centers[a][b].y += yShift;

    // Check
    if (centers[a][b].x < -(cellSize / 3) || centers[a][b].x > cellSize / 3) {
      centers[a][b].x -= 2 * xShift;
    }
    if (centers[a][b].y < -(cellSize / 3) || centers[a][b].y > cellSize / 3) {
      centers[a][b].y -= 2 * yShift;
    }

    xShift = centers[a][b].x;
    yShift = centers[a][b].y;
    p.rect(0, 0, cellSize, cellSize);
    p.fill(shades[1]);
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
    p.fill(shades[3]);
    p.triangle(
      xShift,
      yShift,
      cellSize / 2,
      cellSize / 2,
      -cellSize / 2,
      cellSize / 2
    );
    p.fill(shades[0]);
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
    p.fill("white");
    p.circle(0, 0, 7);
    p.pop();
    p.pop();
  }
}
