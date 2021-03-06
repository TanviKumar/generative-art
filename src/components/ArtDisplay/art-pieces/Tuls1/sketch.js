import * as dat from "dat.gui";
export default function sketch(p) {
  // Padding around the canvas.
  let padding = 35;

  // Number of squares per row/column
  let row;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 80;
  let gridSize;

  // let shades = [
  //   "#FEDC97",
  //   "#B5B682",
  //   "#28666E",
  //   "#7C9885",
  //   "#bfb9ba",
  //   "#0059b2",
  //   "#197fe5",
  // ];

  p.setup = function () {
    row = uiRow.getValue();
    gridSize = cellSize * row + padding * 2;
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CORNER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(12);
    p.noLoop();
    p.frameRate(2);
  };

  p.draw = function () {
    p.background(uiBg.getValue());
    for (let y = padding; y < p.height - 2 * padding; y += cellSize) {
      for (let x = padding; x < p.width - 2 * padding; x += cellSize) {
        drawCell(x + cellSize / 2, y + cellSize / 2);
      }
    }
  };

  function drawCell(x, y) {
    p.push();
    p.translate(x, y);
    p.fill("white");
    p.noStroke();
    p.rectMode(p.CENTER);
    //rect(0, 0, cellSize, cellSize)
    p.stroke(uiShade.getValue());
    let v1, v2, v3, v4;

    // Top side
    if (p.random() > 0.5) {
      v1 = 0;
    } else {
      v1 = cellSize / 2;
    }

    // Right side
    if (p.random() > 0.5) {
      v2 = 0;
    } else {
      v2 = cellSize / 2;
    }

    // Bottom side
    if (p.random() > 0.5) {
      v3 = 0;
    } else {
      v3 = -cellSize / 2;
    }

    // Left side
    if (p.random() > 0.5) {
      v4 = 0;
    } else {
      v4 = -cellSize / 2;
    }

    p.line(0, 0, v1, -cellSize / 2);
    p.line(0, 0, cellSize / 2, v2);
    p.line(0, 0, v3, cellSize / 2);
    p.line(0, 0, -cellSize / 2, v4);

    p.pop();
  }
  class Tuls1 {
    constructor() {
      this.Shade = "#B5B682";
      this.Background = "#28666E";
      this.Row = 8;
    }
  }
  const tuls1 = new Tuls1();
  const gui = new dat.GUI();
  const uiShade = gui.addColor(tuls1, "Shade");
  const uiBg = gui.addColor(tuls1, "Background");
  const uiRow = gui.add(tuls1, "Row", 5, 15, 1);
  uiShade.onChange(() => {
    p.setup();
    p.draw();
  });
  uiBg.onChange(() => {
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
