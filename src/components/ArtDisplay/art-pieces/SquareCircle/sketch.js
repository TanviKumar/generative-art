import * as dat from "dat.gui";
export default function sketch(p) {
  let rad = 150;
  let steps = 10;

  p.setup = function () {
    p.createCanvas(1000, 1000);
    p.rectMode(p.CENTER);
    p.angleMode(p.RADIANS);
    //angleMode(DEGREES)
    p.blendMode(p.BLEND);
    p.noLoop();
  };

  p.draw = function () {
    p.background(uiBg.getValue());
    p.translate(p.width / 2, p.height / 2);
    p.noStroke();
    let c;
    for (let j = 150; j < 400; j += 25) {
      rad = j;
      for (let i = 0; i < 360; i += steps) {
        c = p.color(
          p.random(200) + 20,
          p.random(uiShade.getValue()) + 20,
          p.random(200) + 20
        );
        c.setAlpha(75);
        p.fill(c);
        p.rect(
          rad * p.cos(i),
          rad * p.sin(i),
          p.random(30) + 25,
          p.random(30) + 25
        );
      }
      if (steps > 1) steps--;
    }
    c = p.color("white");
    c.setAlpha(uiAlpha.getValue());
    p.fill(c);
    p.circle(-100, -120, 150);
    p.circle(120, 120, 40);
  };
  class SquareCircle {
    constructor() {
      this.Background = "#000";
      this.Alpha = 60;
      this.Shade = 20;
    }
  }
  const squareCircle = new SquareCircle();
  const gui = new dat.GUI();
  const uiBg = gui.addColor(squareCircle, "Background");
  const uiAlpha = gui.add(squareCircle, "Alpha", 1, 200, 1);
  const uiShade = gui.add(squareCircle, "Shade", 1, 230, 1);
  uiBg.onChange(() => {
    p.setup();
    p.draw();
  });
  uiAlpha.onChange(() => {
    p.setup();
    p.draw();
  });
  uiShade.onChange(() => {
    p.setup();
    p.draw();
  });
  gui.close();
  window.onpopstate = function (e) {
    gui.destroy();
  };
}
