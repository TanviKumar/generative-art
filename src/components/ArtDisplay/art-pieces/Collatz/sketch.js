import * as dat from "dat.gui";
export default function sketch(p) {
  let stackSizeLimit = 50000;
  let centX = [5, 2.5, 3, 1.48];
  let centY = [1.9, 2.1, 1.9, 1.65];
  let compressRatios = [0.18e+7, 0.5e+7, 1.6e+7, 2.6e+7];

  p.setup = function () {
    p.createCanvas(1000, 900);
    p.angleMode(p.DEGREES);
    p.background(uiBg.getValue());
    p.strokeWeight(1);
    p.noLoop();
  };

  p.draw = function () {
    setCenter();
    p.push();
    collatzIterative();
    p.pop();
  };

  function setCenter() {
    let i = (uiLimit.getValue() / 10000) - 1;
    let posX = p.width / centX[i];
    let posY = p.height / centY[i];
    p.translate(posX, posY);
  }

  function setStroke(seed) {
    let red = uiRed.getValue() * p.noise(seed);
    let green = uiGreen.getValue() * (1 - p.noise(seed));
    let blue = uiBlue.getValue() * p.noise(seed);
    p.stroke(red, green, blue);
  }

  function collatzIterative() {
    let nodeStack = [{
      "num": 1,
      "diff": 0,
      "index": 0
    }];
    let visitedSet = new Set();
    let indexCounter = 1;

    while ((nodeStack.length > 0) && (nodeStack.length <= stackSizeLimit)) {
      let node = nodeStack.pop();

      if (visitedSet.has(node.index)) {
        p.pop();
        visitedSet.delete(node.index);
        continue;
      } else {
        visitedSet.add(node.index);
      }

      nodeStack.push(node);

      let rot_angle = node.diff * 10;
      p.rotate(rot_angle);
      setStroke(node.diff);

      let i = (uiLimit.getValue() / 10000) - 1;
      let Ratio = uiLimit.getValue() / compressRatios[i];
      let len = node.diff * Ratio;
      p.line(0, 0, 0, len);
      p.translate(0, len);
      p.push();

      let nextNum = 0;
      let nextDiff = 0;

      if ((node.num > 1) && (node.num % 3 === 1)) {
        nextNum = (node.num - 1) / 3;
        nextDiff = -((node.num * 2) + 1) / 3;
        nodeStack.push({
          "num": nextNum,
          "diff": nextDiff,
          "index": indexCounter
        });
        indexCounter ++;
      }

      if (node.num * 2 <= uiLimit.getValue()) {
        nextNum = node.num * 2;
        nextDiff = node.num;
        nodeStack.push({
          "num": nextNum,
          "diff": nextDiff,
          "index": indexCounter
        });
        indexCounter ++;
      }
    }
  }

  class Collatz {
    constructor() {
      this.Limit = 1e+4;
      this.Red = 255;
      this.Green = 255;
      this.Blue = 255;
      this.Background = "#000";
    }
  }

  const collatz = new Collatz();
  const gui = new dat.GUI();
  const uiLimit = gui.add(collatz, "Limit", 1e+4, 4e+4, 1e+4);
  const uiRed = gui.add(collatz, "Red", 0, 255, 1);
  const uiGreen = gui.add(collatz, "Green", 0, 255, 1);
  const uiBlue = gui.add(collatz, "Blue", 0, 255, 1);
  const uiBg = gui.addColor(collatz, "Background");
  uiLimit.onChange(() => {
    p.setup();
    p.draw();
  });
  uiRed.onChange(() => {
    p.setup();
    p.draw();
  });
  uiGreen.onChange(() => {
    p.setup();
    p.draw();
  });
  uiBlue.onChange(() => {
    p.setup();
    p.draw();
  });
  uiBg.onChange(p.setup);
  gui.close();
  window.onpopstate = function (e) {
    gui.destroy();
  };
}
