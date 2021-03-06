import * as dat from "dat.gui";
export default function sketch(p) {
  // Padding around the canvas.
  let padding = 35;

  // Number of squares per row/column
  let row;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 80;
  let gridSize;

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
    row = uiRow.getValue();
    gridSize = cellSize * row + padding * 2;
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CORNER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(2);
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
    let c1 = p.color(shades[0]);
    // let c2 = p.color(shades[1]);
    // let c3 = p.color(shades[2]);
    c1.setAlpha(uiAlpha.getValue());
    p.fill(c1);
    //noStroke()
    p.rectMode(p.CENTER);
    //noFill()
    p.rect(0, 0, cellSize, cellSize);
    p.stroke(shades[1]);
    p.rectMode(p.CORNER);

    p.strokeWeight(2);
    p.line(-cellSize / 2, -cellSize / 2, -cellSize / 2, cellSize / 2);
    p.line(-cellSize / 2, -cellSize / 2, cellSize / 2, -cellSize / 2);
    p.line(-cellSize / 2, cellSize / 2, cellSize / 2, cellSize / 2);
    p.line(cellSize / 2, -cellSize / 2, cellSize / 2, cellSize / 2);
    p.strokeWeight(2);
    p.stroke(uiStroke.getValue());

    let t, r, b, l;
    t = 0;
    r = 0;
    b = 0;
    l = 0;
    // Left one
    if (p.random() > 0.5) {
      //line(0, 0, cellSize/2, cellSize/2)
      if (p.random() > 0.5) {
        p.line(0, 0, 0, -cellSize / 2);
        t = 1;
        p.arc(cellSize / 2, 0, cellSize, cellSize, 90, 180);
      } else {
        p.line(0, 0, -cellSize / 2, 0);
        l = 1;
        p.arc(0, cellSize / 2, cellSize, cellSize, 270, 360);
      }
    } else {
      //line(0, 0, -cellSize/2, -cellSize/2)
      if (p.random() > 0.5) {
        p.line(0, 0, 0, cellSize / 2);
        b = 1;
        p.arc(-cellSize / 2, 0, cellSize, cellSize, 270, 360);
      } else {
        p.line(0, 0, cellSize / 2, 0);
        r = 1;
        p.arc(0, -cellSize / 2, cellSize, cellSize, 90, 180);
      }
    }

    // Right one
    if (p.random() > 0.5) {
      //line(0, 0, cellSize/2, -cellSize/2)
      if (b !== 1) {
        p.line(0, 0, 0, cellSize / 2);
        p.arc(cellSize / 2, 0, cellSize, cellSize, 180, 270);
      } else if (l !== 1) {
        p.line(0, 0, -cellSize / 2, 0);
        p.arc(0, -cellSize / 2, cellSize, cellSize, 0, 90);
      }
    } else {
      //line(0, 0, -cellSize/2, cellSize/2)
      if (t !== 1) {
        p.line(0, 0, 0, -cellSize / 2);
        p.arc(-cellSize / 2, 0, cellSize, cellSize, 0, 90);
      } else if (r !== 1) {
        p.line(0, 0, cellSize / 2, 0);
        p.arc(0, cellSize / 2, cellSize, cellSize, 180, 270);
      }
    }

    p.pop();
  }
  class Tuls3 {
    constructor() {
      this.Stroke = "#FF0000";
      this.Alpha = 50;
      this.Background = "#000";
      this.Row = 8;
    }
  }
  const tuls3 = new Tuls3();
  const gui = new dat.GUI();
  const uiStroke = gui.addColor(tuls3, "Stroke");
  const uiAlpha = gui.add(tuls3, "Alpha", 1, 200, 1);
  const uiBg = gui.addColor(tuls3, "Background");
  const uiRow = gui.add(tuls3, "Row", 5, 15, 1);
  uiRow.onChange(() => {
    p.setup();
    p.draw();
  });
  uiStroke.onChange(() => {
    p.setup();
    p.draw();
  });
  uiAlpha.onChange(() => {
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
