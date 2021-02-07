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
    p.strokeWeight(4);
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
    p.fill(uiBg.getValue());
    p.noStroke();
    p.rectMode(p.CENTER);
    p.rect(0, 0, cellSize, cellSize);
    p.stroke(uiStroke.getValue());
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
  class Waves {
    constructor() {
      this.Background = "#28666E";
      this.Stroke = "#FEDC97";
      this.Row = 8;
    }
  }
  const waves = new Waves();
  const gui = new dat.GUI();
  const uiStroke = gui.addColor(waves, "Stroke");
  const uiBg = gui.addColor(waves, "Background");
  const uiRow = gui.add(waves, "Row", 1, 12, 1);
  uiRow.onChange(() => {
    p.setup();
    p.draw();
  });
  uiStroke.onChange(() => {
    p.setup();
    p.draw();
  });
  uiBg.onChange(() => {
    p.setup();
    p.draw();
  });
  gui.close();
  window.onpopstate = function (e) {
    gui.destroy();
  };
}
