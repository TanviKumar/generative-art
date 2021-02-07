import * as dat from "dat.gui";
export default function sketch(p) {
  // Padding around the canvas.
  let padding = 15;

  // Number of squares per row/column
  let gap = 20;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 200;
  let gridSize;

  let shades = ["#FEDC97", "#98777B", "#FFC1CC", "#65000B"];

  p.setup = () => {
    gridSize =
      cellSize * uiRow.getValue() +
      padding * 2 +
      uiGap.getValue() * (uiRow.getValue() - 1);
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
      col.setAlpha(uiAlpha.getValue());
      p.fill(col);
      let rx = p.floor(p.random(120)) + 30;
      rx = rx - (rx % 20);
      let ry = p.floor(p.random(100)) + 30;
      ry = ry - (ry % 20);
      if (i % 4 === 0) p.rect(0, rx, ry, cellSize - rx);
      if (i % 4 === 1) p.rect(cellSize - rx, 0, rx, ry);
      if (i % 4 === 2) p.rect(0, 0, ry, rx);
      if (i % 4 === 3) p.rect(cellSize - rx, cellSize - ry, rx, ry);
    }
    p.pop();
  }
  class DinnerLight {
    constructor() {
      this.alpha = 90;
      this.row = 2;
      this.gap = 20;
    }
  }
  const dinnerLight = new DinnerLight();
  const gui = new dat.GUI();
  const uiAlpha = gui.add(dinnerLight, "alpha", 0, 255, 1);
  const uiRow = gui.add(dinnerLight, "row", 1, 6, 1);
  const uiGap = gui.add(dinnerLight, "gap", 10, 30, 1);
  uiAlpha.onChange(() => {
    p.setup();
    p.draw();
  });
  uiRow.onChange(() => {
    p.setup();
    p.draw();
  });
  uiGap.onChange(() => {
    p.setup();
    p.draw();
  });
  gui.close();
  window.onpopstate = function (e) {
    gui.destroy();
  };
}
