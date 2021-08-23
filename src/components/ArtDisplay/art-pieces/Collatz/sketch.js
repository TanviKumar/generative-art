import * as dat from "dat.gui";
export default function sketch(p) {
  p.setup = function () {
    p.createCanvas(1300, 1100);
    p.angleMode(p.DEGREES);
    p.background(uiBg.getValue());
    p.strokeWeight(1.1);
  };

  p.draw = function () {
    p.translate(p.width / 4, p.height / 1.9);
    p.push();
    collatzRecursive(1, 0);
    //collatzIterative();
    p.pop();
  };

  function setStroke(seed) {
    let red = uiRed.getValue() * p.noise(seed);
    let green = uiGreen.getValue() * (1 - p.noise(seed));
    let blue = uiBlue.getValue() * p.noise(seed);
    p.stroke(red, green, blue);
  }

  function collatzRecursive(number, diff) {
    if (number < 1) {
      return;
    }

    if (number > uiLimit.getValue()) {
      return;
    }

    let rot_angle = diff * 10;
    p.rotate(rot_angle);
    setStroke(diff);

    let compressRatio = uiLimit.getValue() / 50;
    diff = diff / compressRatio;
    p.line(0, 0, 0, diff);
    p.translate(0, diff);
    p.push();

    let nextNum = number * 2;
    let nextDiff = number;
    collatzRecursive(nextNum, nextDiff);

    if (number % 3 === 1) {
      nextNum = (number - 1) / 3;
      nextDiff = -(number * 2 - 1) / 3;
      collatzRecursive(nextNum, nextDiff);
    }
    
    p.pop();
  }

  function collatzIterative() {
    let numStack = [{
      "num": 1,
      "diff": 0,
      "index": 0,
    }];
    let stateMap = new Map();
    let visited = new Map();
    let counter = 1;

    while (numStack.length > 0) {
      let obj = numStack.pop();
      let num = obj["num"];
      let diff = obj["diff"];
      let index = obj["index"];
      let willProceed = false;

      // pop any previously pushed states
      for (let i = index + 1; i < counter; i++) {
        if (typeof stateMap.get(i) == "boolean") {
          p.pop();
          stateMap.delete(i);
        } else {
          break;
        }
      }

      let rot_angle = diff * 10;
      p.rotate(rot_angle);
      setStroke(diff);

      let compressRatio = uiLimit.getValue() / 25;
      diff = diff / compressRatio;
      p.line(0, 0, 0, diff);
      p.translate(0, diff);
      p.push();

      // work your way up the collatz tree
      if (num * 2 < uiLimit.getValue()) {
        let nextNum = num * 2;
        if (typeof visited.get(nextNum) == "undefined") {
          visited.set(nextNum, true);
          let nextDiff = num;
          numStack.push({
            "num": nextNum,
            "diff": nextDiff,
            "index": counter
          });
          counter += 1;
          willProceed = true;
        }
      }

      // work your way up the collatz tree
      if (num % 3 === 1) {
        let nextNum = (num - 1) / 3;
        if (nextNum > 0) {
          if (typeof visited.get(nextNum) == "undefined") {
            visited.set(nextNum, true);
            let nextDiff = -(num * 2 + 1) / 3;
            numStack.push({
              "num": nextNum,
              "diff": nextDiff,
              "index": counter
            });
            counter += 1;
            willProceed = true;
          }
        }
      }

      if (willProceed) {
        stateMap.set(index, true);
      } else {
        p.pop();
      }
    }
  }

  class Collatz {
    constructor() {
      this.Limit = 8000;
      this.Red = 255;
      this.Green = 255;
      this.Blue = 255;
      this.Background = "#000";
    }
  }

  const collatz = new Collatz();
  const gui = new dat.GUI();
  const uiLimit = gui.add(collatz, "Limit", 1000, 100000, 100);
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
