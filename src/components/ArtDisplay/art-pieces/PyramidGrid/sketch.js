import * as dat from "dat.gui";
export default function sketch(p) {
  // Padding around the canvas.
  let padding = 50;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 100;
  let gridSize;

  let shades = ["#FEDC97", "#B5B682", "#28666E", "#7C9885"];
  shades = ["#ffe5fa", "#ffb2ff", "#e500ff", "#c402e2"];
  shades = ["#e1ff00", "#ecf79b", "#f6ff7c", "#fff600"];
  shades = ["#ffaabb", "#ff7799", "#ffbbcc", "#ff3344"];

  p.setup = function () {
    // uiRow -  Number of squares per row/column
    gridSize = cellSize * uiRow.getValue() + padding * (uiRow.getValue() + 1);
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.noLoop();
    p.frameRate(uiFrameRate.getValue());
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
    let xShift = p.ceil(p.random(uiShiftLimit.getValue()));
    let yShift = p.ceil(p.random(uiShiftLimit.getValue()));
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
    p.fill(uiShade.getValue());
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
  class PyramidGrid {
    constructor() {
      this.shiftLimit = 15;
      this.frameRate = 2;
      this.Shade = "#ffbbcc";
      this.row = 4;
    }
  }
  const pyramidGrid = new PyramidGrid();
  const gui = new dat.GUI();
  const uiShiftLimit = gui.add(pyramidGrid, "shiftLimit", 1, 50, 1);
  const uiFrameRate = gui.add(pyramidGrid, "frameRate", 1, 60, 1);
  const uiShade = gui.addColor(pyramidGrid, "Shade");
  const uiRow = gui.add(pyramidGrid, "row", 1, 6, 1);
  uiShiftLimit.onChange(() => {
    p.setup();
    p.draw();
  });
  uiFrameRate.onChange(() => {
    p.setup();
    p.draw();
  });
  uiShade.onChange(() => {
    p.setup();
    p.draw();
  });
  uiRow.onChange(() => {
    p.setup();
    p.draw();
  });
  gui.close();
  window.onpopstate = function (e) {
    gui.destroy();
  };
}
