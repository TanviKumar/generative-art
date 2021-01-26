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
    p.strokeWeight(3);
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
    let c2 = p.color(uiColor.getValue());
    let c3 = p.color(shades[2]);
    c1.setAlpha(uiAlpha1.getValue());
    c2.setAlpha(uiAlpha2.getValue());
    c3.setAlpha(uiAlpha2.getValue());
    p.fill(c1);
    //noStroke()
    p.rectMode(p.CENTER);
    //noFill()
    p.rect(0, 0, cellSize, cellSize);
    p.rectMode(p.CORNER);

    p.strokeWeight(uiStrokeWeight.getValue());
    p.stroke("red");
    p.noStroke();

    let t, r, b, l;
    t = 0;
    r = 0;
    b = 0;
    l = 0;

    /*if(random() > 0.5) {
    fill(c2)
  } else {
    fill(c3)
  }*/
    // Left one
    p.fill(c2);
    if (p.random() > 0.5) {
      //line(0, 0, cellSize/2, cellSize/2)
      if (p.random() > 0.5) {
        p.line(0, 0, 0, -cellSize / 2);
        t = 1;
        p.arc(cellSize / 2, 0, cellSize, cellSize, 90, 180);
        p.rect(0, 0, cellSize / 2, -cellSize / 2);
      } else {
        p.line(0, 0, -cellSize / 2, 0);
        l = 1;
        p.arc(0, cellSize / 2, cellSize, cellSize, 270, 360);
        p.rect(0, 0, -cellSize / 2, cellSize / 2);
      }
    } else {
      //line(0, 0, -cellSize/2, -cellSize/2)
      if (p.random() > 0.5) {
        p.line(0, 0, 0, cellSize / 2);
        b = 1;
        p.arc(-cellSize / 2, 0, cellSize, cellSize, 270, 360);
        p.rect(0, 0, -cellSize / 2, cellSize / 2);
      } else {
        p.line(0, 0, cellSize / 2, 0);
        r = 1;
        p.arc(0, -cellSize / 2, cellSize, cellSize, 90, 180);
        p.rect(0, 0, cellSize / 2, -cellSize / 2);
      }
    }

    /*if(random() > 0.5) {
    fill(c2)
  } else {
    fill(c3)
  }*/

    // Right one
    p.fill(c3);
    if (p.random() > 0.5) {
      //line(0, 0, cellSize/2, -cellSize/2)
      if (b !== 1) {
        p.line(0, 0, 0, cellSize / 2);
        p.arc(cellSize / 2, 0, cellSize, cellSize, 180, 270);
        p.rect(0, 0, cellSize / 2, cellSize / 2);
      } else if (l !== 1) {
        p.line(0, 0, -cellSize / 2, 0);
        p.arc(0, -cellSize / 2, cellSize, cellSize, 0, 90);
        p.rect(0, 0, -cellSize / 2, -cellSize / 2);
      }
    } else {
      //line(0, 0, -cellSize/2, cellSize/2)
      if (t !== 1) {
        p.line(0, 0, 0, -cellSize / 2);
        p.arc(-cellSize / 2, 0, cellSize, cellSize, 0, 90);
        p.rect(0, 0, -cellSize / 2, -cellSize / 2);
      } else if (r !== 1) {
        p.line(0, 0, cellSize / 2, 0);
        p.arc(0, cellSize / 2, cellSize, cellSize, 180, 270);
        p.rect(0, 0, cellSize / 2, cellSize / 2);
      }
    }

    p.pop();
  }
  class Tuls5 {
    constructor() {
      this.Color = "#FF0000";
      this.Alpha1 = 50;
      this.Alpha2 = 100;
      this.Background = "#FFF";
      this.StrokeWeight = 2;
      this.Row = 8;
    }
  }
  const tuls5 = new Tuls5();
  const gui = new dat.GUI();
  const uiColor = gui.addColor(tuls5, "Color");
  const uiBg = gui.addColor(tuls5, "Background");
  const uiAlpha1 = gui.add(tuls5, "Alpha1", 1, 200, 1);
  const uiAlpha2 = gui.add(tuls5, "Alpha2", 1, 200, 1);
  const uiStrokeWeight = gui.add(tuls5, "StrokeWeight", 1, 10, 1);
  const uiRow = gui.add(tuls5, "Row", 5, 15, 1);
  uiRow.onChange(() => {
    p.setup();
    p.draw();
  });
  uiColor.onChange(() => {
    p.setup();
    p.draw();
  });
  uiBg.onChange(() => {
    p.setup();
    p.draw();
  });
  uiAlpha1.onChange(() => {
    p.setup();
    p.draw();
  });
  uiAlpha2.onChange(() => {
    p.setup();
    p.draw();
  });
  uiStrokeWeight.onChange(() => {
    p.setup();
    p.draw();
  });
  gui.close();
  window.onpopstate = function (e) {
    gui.destroy();
  };
}
