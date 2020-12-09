import * as dat from "dat.gui";
export default function sketch(p) {
  let Noise = require("noisejs");
  let n = new Noise.Noise(Math.random());
  const branches = [];

  p.setup = function () {
    p.createCanvas(1500, p.windowHeight);
    p.background("black");
    branches.push(new Branch());
    p.noFill();
    p.stroke(0, 0, 0, 20);
    p.smooth();
    p.colorMode(p.HSB);
    p.strokeCap(p.SQUARE);
    p.blendMode(p.SCREEN);
    p.strokeWeight(uiWeight.getValue());
  };

  function reset() {
    p.resizeCanvas(1500, p.windowHeight);
    p.background("black");
    branches.length = 0;
    n = new Noise.Noise(Math.random());
    p.strokeWeight(uiWeight.getValue());
    for (let i = 0; i < uiAmount.getValue(); i++) {
      branches.push(new Branch());
    }
    p.clear();
  }

  p.mouseClicked = function () {
    n.seed(Math.random());
    for (let i = 0; i < uiAmount.getValue(); i++) {
      branches.push(new Branch());
    }
  };

  p.windowResized = function () {
    reset();
  };

  p.draw = function () {
    branches.forEach((branch) => branch.update());
  };

  class Branch {
    constructor() {
      this.v = [];
      this.x = p.mouseX;
      this.y = p.mouseY;
      this.prevx = p.mouseX;
      this.prevy = p.mouseY;
      this.color = p.color(
        p.random(uiColor.getValue(), uiColor.getValue() + 50),
        uiSaturation.getValue(),
        100,
        uiOpacity.getValue()
      );
      this.v.push({ x: this.x, y: this.y });
      this.moving = true;
      this.direction = {
        x: p.random(-2, 2),
        y: p.random(-5, 5),
      };
    }
    draw() {
      p.stroke(this.color);
      p.line(this.prevx, this.prevy, this.x, this.y);
    }
    update() {
      if (this.moving) {
        if (this.x < 0 || this.x > p.width || this.y < 0 || this.y > p.height) {
          this.moving = false;
        }
        this.move();
        this.draw();
        this.prevx = this.x;
        this.prevy = this.y;
      }
    }
    move() {
      this.direction.x += n.simplex3(
        this.x * 0.03 * uiRandom.getValue(),
        this.y * 0.03 * uiRandom.getValue(),
        p.millis() * 0.0001
      );
      this.direction.y +=
        p.abs(n.simplex3(this.y * 0.01, this.x * 0.01, p.millis() * 0.0001)) *
        0.2;
      this.x += this.direction.x;
      this.y += this.direction.y;
      this.v.push({ x: this.x, y: this.y });
    }
  }

  const Walkers = function () {
    this.Color = 110;
    this.Saturation = 70;
    this.Opacity = 0.25;
    this.Weight = 1;
    this.Amount = window.innerWidth < 600 ? 400 : 800;
    this.Random = 0.2;
  };

  const walkers = new Walkers();
  const gui = new dat.GUI();
  const uiColor = gui.add(walkers, "Color", 0, 250, 10);
  const uiSaturation = gui.add(walkers, "Saturation", 0, 250, 10);
  const uiOpacity = gui.add(walkers, "Opacity", 0, 1, 0.01);
  const uiWeight = gui.add(walkers, "Weight", 1, 10, 1);
  const uiAmount = gui.add(walkers, "Amount", 10, 3000, 100);
  const uiRandom = gui.add(walkers, "Random", 0, 5, 0.05);
  uiColor.onChange(p.setup);
  uiSaturation.onChange(p.setup);
  uiOpacity.onChange(p.setup);
  uiWeight.onChange(p.setup);
  uiAmount.onChange(p.setup);
  uiRandom.onChange(p.setup);
  gui.close();
}
