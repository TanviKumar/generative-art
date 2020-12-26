export default function sketch(p) {
  // Padding around the canvas.
  let padding = 15;

  // Number of squares per row/column
  let row = 2;
  let gap = 20;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 200;
  let gridSize = cellSize * row + padding * 2 + gap * (row - 1);

  // Probability of drawing an inner rectangle.
  let chance = 0.6;

  // Number of inner rectangles
  let c = 10;

  // Extent the square can shift from center
  let shiftLimit = 1;

  let shades = ["#FEDC97", "#98777B", "#FFC1CC", "#65000B"];

  p.setup = () => {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CORNER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(2);
    p.noLoop();
    p.frameRate(2);
  };

  p.draw = () => {
    p.background(255);
    for (let y = padding; y < p.height - 2 * padding; y += cellSize + gap) {
      for (let x = padding; x < p.width - 2 * padding; x += cellSize + gap) {
        drawCell(x, y);
      }
    }
  };

  function drawCell(x, y) {
    p.push();
    p.translate(x, y);
    p.noFill();
    p.rect(0, 0, cellSize, cellSize);
    for (let i = 0; i < 6; ++i) {
      let col = p.color(shades[p.floor(p.random(3)) + 0]);
      col.setAlpha(90);
      p.fill(col);
      let rx = p.floor(p.random(120)) + 30;
      rx = rx - (rx % 20);
      let ry = p.floor(p.random(100)) + 30;
      ry = ry - (ry % 20);
      if (i % 4 == 0) p.rect(0, rx, ry, cellSize - rx);
      if (i % 4 == 1) p.rect(cellSize - rx, 0, rx, ry);
      if (i % 4 == 2) p.rect(0, 0, ry, rx);
      if (i % 4 == 3) p.rect(cellSize - rx, cellSize - ry, rx, ry);
    }
    p.pop();
  }
}
