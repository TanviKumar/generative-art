import * as dat from "dat.gui";
export default function sketch(p) {
  // Padding around the canvas.
  let padding = 15;

  // Size of grid cells (cellSize x cellSize).
  let hSize = 100;
  let radii3 = hSize / 2;
  // let radii4 = hSize / 3;
  // let radii2 = (hSize * 2) / 3;
  // let radii5 = hSize / 6;
  // let radii1 = (hSize * 5) / 6;
  let vSize;
  let gridSize = 600 + padding * 3;

  let shades = [
    "#D1BCE3",
    "#585481",
    "#C49BBB",
    "#B5B682",
    "#FEDC97",
    "#B5B682",
    "#28666E",
    "#7C9885",
  ];
  shades = ["#fff26d", "#B5B682", "#28666E"];
  //let shades = ['#f91543', '#f780dd', '#fcbdfa']

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(3);
    p.noLoop();
    p.frameRate(2);
    vSize = (hSize / 2) * p.sqrt(3);
  };

  p.draw = function () {
    p.background(uiBg.getValue());
    p.stroke(0);
    let i = 1;
    for (
      let y = padding + vSize / 2;
      y < p.height - padding;
      y += vSize / 2, i++
    ) {
      for (
        let x = padding + hSize / 2;
        x < p.width - padding;
        x += (hSize * 3) / 2
      ) {
        if (i % 2) drawCell(x, y);
        else drawCell(x + (hSize * 3) / 4, y);
      }
    }

    drawBorder();
  };

  function drawBorder() {
    p.fill(uiBg.getValue());
    let border = 50;
    p.noStroke();
    p.rect(border / 2, gridSize / 2, border, gridSize);
    p.rect(gridSize - border / 2, gridSize / 2, border, gridSize);
    p.rect(gridSize / 2, border / 2, gridSize, border);
    p.rect(gridSize / 2, gridSize - border / 2, gridSize, border);
  }

  function drawCell(x, y) {
    p.push();
    p.translate(x, y);
    p.fill(p.color(255, 255, 255, 170));
    //circle(0, 0, 20, 20)
    //noFill()
    p.noStroke();
    p.fill(p.color(255, 255, 255, 50));
    p.beginShape();
    p.vertex(-hSize / 2, 0);
    p.vertex(hSize / 4, vSize / 2);
    p.vertex(-hSize / 4, -vSize / 2);
    p.endShape(p.CLOSE);
    /*line(-hSize / 2, 0, -hSize / 4, -vSize / 2)
  line(-hSize / 2, 0, -hSize / 4, vSize / 2)
  line(hSize / 2, 0, hSize / 4, -vSize / 2)
  line(hSize / 2, 0, hSize / 4, vSize / 2)
  line(hSize / 4, vSize / 2, -hSize / 4, vSize / 2)
  line(hSize / 4, -vSize / 2, -hSize / 4, -vSize / 2)*/
    if (p.random() > 0.5) {
      /*fill(shades[3])
    drawArc1(radii1)
    fill(shades[2])
    drawArc1(radii2)*/
      //fill(shades[1])
      drawArc1(radii3);
      /*fill(shades[2])
    drawArc1(radii4)
    fill(shades[0])
    drawArc1(radii5)*/
    } else {
      /*fill(shades[2])
    drawArc2(radii1)
    fill(shades[3])
    drawArc2(radii2)*/
      //fill(shades[1])
      drawArc2(radii3);
      /*fill(shades[3])
    drawArc2(radii4)
    fill(shades[0])
    drawArc2(radii5)*/
    }
    p.pop();
  }

  function drawArc1(radi) {
    p.strokeWeight(30);
    let c = p.color(shades[p.floor(p.random(3)) + 0]);
    c.setAlpha(uiAlpha.getValue());
    p.stroke(c);
    p.arc(hSize / 2, 0, radi, radi, 120, 240);
    p.arc(-hSize / 4, vSize / 2, radi, radi, 240, 0);
    p.arc(-hSize / 4, -vSize / 2, radi, radi, 0, 120);
  }

  function drawArc2(radii1) {
    p.strokeWeight(30);
    let c = p.color(shades[p.floor(p.random(3)) + 0]);
    c.setAlpha(uiAlpha.getValue());
    p.stroke(c);
    p.arc(-hSize / 2, 0, radii1, radii1, 300, 60);
    p.arc(hSize / 4, vSize / 2, radii1, radii1, 180, 300);
    p.arc(hSize / 4, -vSize / 2, radii1, radii1, 60, 180);
  }
  class ThickHexTenPrint {
    constructor() {
      this.Alpha = 150;
      this.Background = "#000";
    }
  }
  const thickHexTenPrint = new ThickHexTenPrint();
  const gui = new dat.GUI();
  const uiAlpha = gui.add(thickHexTenPrint, "Alpha", 1, 200);
  const uiBg = gui.addColor(thickHexTenPrint, "Background");
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
