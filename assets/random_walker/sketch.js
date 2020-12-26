
const p = noise;
p.seed(Math.random());
const branches = [];

function setup () {
  createCanvas(1500, windowHeight);
  background("black");
  branches.push(new Branch());
  noFill();
  stroke(0, 0, 0, 20);
  smooth();
  colorMode(HSB);
  strokeCap(SQUARE);
  blendMode(SCREEN);
  strokeWeight(uiWeight.getValue());
}

function reset () {
  resizeCanvas(1500, windowHeight);
  background("black");
  branches.length = 0;
  p.seed(Math.random());
  strokeWeight(uiWeight.getValue());
  for (let i=0; i<uiAmount.getValue(); i++) {
      branches.push(new Branch());
  }
  clear();
}

function mouseClicked () {
  p.seed(Math.random());
  for (let i=0; i<uiAmount.getValue(); i++) {
      branches.push(new Branch());
  }
}

function windowResized () {
  reset();
}

function draw () {
  branches.forEach(branch => branch.update());
}

class Branch {
  constructor () {
    this.v = [];
    this.x = mouseX;
    this.y = mouseY;
    this.prevx = mouseX;
    this.prevy = mouseY;
    this.color = color(random(uiColor.getValue(), uiColor.getValue() + 50), uiSaturation.getValue(), 100, uiOpacity.getValue());
    this.v.push({x: this.x, y: this.y });
    this.moving = true;
    this.direction = {
      x: random(-2, 2),
      y: random(-5, 5)
    };
  }
  draw () {
    stroke(this.color);
    line(this.prevx, this.prevy, this.x, this.y);
  }
  update () {
    if (this.moving) {
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.moving = false;
      }
      this.move();
      this.draw();
      this.prevx = this.x;
      this.prevy = this.y;
    }
  }
  move () {
    this.direction.x += (p.simplex3(this.x * 0.03 * uiRandom.getValue(), this.y * 0.03 * uiRandom.getValue(), millis() * 0.0001));
    this.direction.y += abs((p.simplex3(this.y * 0.01, this.x * 0.01, millis() * 0.0001))) * 0.2;
    this.x += this.direction.x;
    this.y += this.direction.y;
    this.v.push({x: this.x, y: this.y });
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
const uiColor = gui.add(walkers, 'Color', 0, 250, 10);
const uiSaturation = gui.add(walkers, 'Saturation', 0, 250, 10);
const uiOpacity = gui.add(walkers, 'Opacity', 0, 1, 0.01);
const uiWeight = gui.add(walkers, 'Weight', 1, 10, 1);
const uiAmount = gui.add(walkers, 'Amount', 10, 3000, 100);
const uiRandom = gui.add(walkers, 'Random', 0, 5, 0.05);
uiColor.onChange(setup);
uiSaturation.onChange(setup);
uiOpacity.onChange(setup);
uiWeight.onChange(setup);
uiAmount.onChange(setup);
uiRandom.onChange(setup);
gui.close();
