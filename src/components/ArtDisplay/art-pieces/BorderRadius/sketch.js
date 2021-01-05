export default function sketch(p) {
  // Padding around the canvas.
  var padding = 25;

  // Number of squares per row/column
  var row = 10;

  // Size of grid cells (cellSize x cellSize).
  var cellSize = 50;
  var gridSize = cellSize * row + padding * (row + 3);

  // Probabiity of drawing an inner rectangle.
  var chance = 0.6;

  // Movement
  var m = 1;
  // Growth/reduction
  var g = 1;

  // Extent the square can shift from center
  var shiftLimit = 15;

  var shades = ["#FEDC97", "#B5B682", "#28666E", "#7C9885"];
  var shades = ["#ffe5fa", "#ffb2ff", "#e500ff", "#c402e2"];
  var shades1 = ["#e1ff00", "#ecf79b", "#f6ff7c", "#fff600"];
  var shades1 = ["#ffaabb", "#ff7799", "#ffbbcc", "#ff3344"];
  var shades = [
    "#becbd9",
    "#f4dada",
    "#f6ddc7",
    "#fee2b3",
    "#ffa299",
    "#ad6989",
  ];

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    //noLoop()
    p.frameRate(2);
    for (
      var y = padding * 2, i = 0;
      y < gridSize - 2 * padding;
      y += cellSize + padding, i++
    ) {
      for (
        var x = padding * 2, j = 0;
        x < gridSize - 2 * padding;
        x += cellSize + padding, j++
      ) {
        drawCell(x + cellSize / 2, y + cellSize / 2, i, j);
      }
    }
  };

  p.draw = function () {
    //background(255)
    if (g > 0) {
      m++;
    } else {
      m--;
    }
    if (m >= cellSize / 2) {
      g = -1;
    } else if (m <= 0) {
      g = 1;
    }

    p.stroke("white");
    p.strokeWeight(1);
    for (let i = 0; i < 100; ++i) {
      let dia = p.random(cellSize / 2) + cellSize / 2;
      dia = p.random(12) + 4;
      let cx = p.random(gridSize - 2 * padding) + padding;
      let cy = p.random(gridSize - 2 * padding) + padding;
      if (p.random() > 0.5) p.fill("white");
      else p.fill("white");
      p.circle(cx, cy, dia, dia);
    }
  };

  function drawCell(x, y, a, b) {
    p.push();
    p.translate(x, y);

    p.fill(shades[0]);
    p.noStroke();
    p.square(0, 0, cellSize, m, m, m, m);

    p.pop();
  }
}
