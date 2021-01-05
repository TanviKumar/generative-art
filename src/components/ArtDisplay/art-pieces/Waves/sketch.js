export default function sketch(p) {
  // Padding around the canvas.
  let padding = 35;

  // Number of squares per row/column
  let row = 8;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 80;
  let gridSize = cellSize * row + padding * 2;

  // Probability of drawing an inner rectangle.
  let chance = 0.6;

  // Gap between squares
  let gap = 10;

  // Extent the square can shift from center
  let shiftLimit = 1;

  let shades = [
    "#FEDC97",
    "#B5B682",
    "#28666E",
    "#7C9885",
    "#bfb9ba",
    "#0059b2",
    "#197fe5",
  ];

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CORNER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(4);
    p.noLoop();
    p.frameRate(2);
  };

  p.draw = function () {
    p.background(shades[2]);
    for (let y = padding; y < p.height - 2 * padding; y += cellSize) {
      for (let x = padding; x < p.width - 2 * padding; x += cellSize) {
        drawCell(x + cellSize / 2, y + cellSize / 2);
      }
    }
  };

  function drawCell(x, y) {
    p.push();
    p.translate(x, y);
    p.fill(shades[2]);
    p.noStroke();
    p.rectMode(p.CENTER);
    p.rect(0, 0, cellSize, cellSize);
    p.stroke(shades[0]);
    p.rectMode(p.CORNER);
    if (p.random() > 0.5) {
      // side 1
      p.arc(
        -cellSize / 2,
        -cellSize / 2,
        cellSize * 1.8,
        cellSize * 1.8,
        0,
        90
      );
      p.arc(
        -cellSize / 2,
        -cellSize / 2,
        cellSize * 1.4,
        cellSize * 1.4,
        0,
        90
      );
      p.arc(-cellSize / 2, -cellSize / 2, cellSize, cellSize, 0, 90);
      p.arc(
        -cellSize / 2,
        -cellSize / 2,
        cellSize * 0.6,
        cellSize * 0.6,
        0,
        90
      );
      p.arc(
        -cellSize / 2,
        -cellSize / 2,
        cellSize * 0.2,
        cellSize * 0.2,
        0,
        90
      );

      /*line(-cellSize/2, -cellSize/2, 0, 0)
    rect(-cellSize/2, -cellSize/2, )
    rect(-cellSize/2, -cellSize/2, )
    rect(-cellSize/2, -cellSize/2, )
    rect(-cellSize/2, -cellSize/2, )*/
      // side 3
      p.arc(
        cellSize / 2,
        cellSize / 2,
        cellSize * 1.8,
        cellSize * 1.8,
        180,
        270
      );
      p.arc(
        cellSize / 2,
        cellSize / 2,
        cellSize * 1.4,
        cellSize * 1.4,
        180,
        270
      );
      p.arc(cellSize / 2, cellSize / 2, cellSize, cellSize, 180, 270);
      p.arc(
        cellSize / 2,
        cellSize / 2,
        cellSize * 0.6,
        cellSize * 0.6,
        180,
        270
      );
      p.arc(
        cellSize / 2,
        cellSize / 2,
        cellSize * 0.2,
        cellSize * 0.2,
        180,
        270
      );
    } else {
      // side 2
      p.arc(
        cellSize / 2,
        -cellSize / 2,
        cellSize * 1.8,
        cellSize * 1.8,
        90,
        180
      );
      p.arc(
        cellSize / 2,
        -cellSize / 2,
        cellSize * 1.4,
        cellSize * 1.4,
        90,
        180
      );
      p.arc(cellSize / 2, -cellSize / 2, cellSize, cellSize, 90, 180);
      p.arc(
        cellSize / 2,
        -cellSize / 2,
        cellSize * 0.6,
        cellSize * 0.6,
        90,
        180
      );
      p.arc(
        cellSize / 2,
        -cellSize / 2,
        cellSize * 0.2,
        cellSize * 0.2,
        90,
        180
      );
      // side 4
      p.arc(
        -cellSize / 2,
        cellSize / 2,
        cellSize * 1.8,
        cellSize * 1.8,
        270,
        0
      );
      p.arc(
        -cellSize / 2,
        cellSize / 2,
        cellSize * 1.4,
        cellSize * 1.4,
        270,
        0
      );
      p.arc(-cellSize / 2, cellSize / 2, cellSize, cellSize, 270, 0);
      p.arc(
        -cellSize / 2,
        cellSize / 2,
        cellSize * 0.6,
        cellSize * 0.6,
        270,
        0
      );
      p.arc(
        -cellSize / 2,
        cellSize / 2,
        cellSize * 0.2,
        cellSize * 0.2,
        270,
        0
      );
    }
    p.pop();
  }
}
