import * as dat from "dat.gui";
export default function sketch(p) {
  // Padding around the canvas.
  let padding = 15;

  // Number of squares per row/column
  let row = 12;

  // Size of grid cells (cellSize x cellSize).
  let cellSize;
  let gridSize;

  // let shades = ["#FEDC97", "#B5B682", "#28666E", "#7C9885"];

  p.setup = function () {
    cellSize = uiCellSize.getValue();
    gridSize = cellSize * row + padding * 2;
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(3);
    //noLoop()
    p.frameRate(2);
  };

  p.draw = function () {
    cellSize = uiCellSize.getValue();
    p.background(255);
    for (let y = padding; y < p.height - 2 * padding; y += cellSize) {
      for (let x = padding; x < p.width - 2 * padding; x += cellSize) {
        drawCell(x + cellSize / 2, y + cellSize / 2);
      }
    }
  };

  function drawCell(x, y) {
    cellSize = uiCellSize.getValue();
    p.push();
    p.translate(x, y);
    p.fill(uiBg.getValue());
    p.noStroke();
    p.rect(0, 0, cellSize, cellSize);
    p.stroke(uiStroke.getValue());
    if (p.random() > 0.5) {
      p.arc(-cellSize / 2, -cellSize / 2, cellSize, cellSize, 0, 90);
      p.arc(cellSize / 2, cellSize / 2, cellSize, cellSize, 180, 270);
    } else {
      p.arc(cellSize / 2, -cellSize / 2, cellSize, cellSize, 90, 180);
      p.arc(-cellSize / 2, cellSize / 2, cellSize, cellSize, 270, 0);
    }
    p.pop();
  }
  class Squiggles {
    constructor() {
      this.Background = "#FEDC97";
      this.Stroke = "#000";
      this.CellSize = 50;
    }
  }
  const squiggles = new Squiggles();
  const gui = new dat.GUI();
  const uiBg = gui.addColor(squiggles, "Background");
  const uiStroke = gui.addColor(squiggles, "Stroke");
  const uiCellSize = gui.add(squiggles, "CellSize", 20, 80, 1);
  uiBg.onChange(() => {
    p.setup();
    p.draw();
  });
  uiStroke.onChange(() => {
    p.setup();
    p.draw();
  });
  uiCellSize.onChange(() => {
    p.setup();
    p.draw();
  });
  gui.close();
  window.onpopstate = function (e) {
    gui.destroy();
  };
}
