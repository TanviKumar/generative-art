export default function sketch(p) {
  //Definition of the lsystem class.
  class lsys {
    constructor() {
      this.angle = p.radians(4);
      this.axiom = "F";
      this.sentence = this.axiom;
      this.len = 150;
      this.branchValue = 0;
      this.alphabet = ["F", "f", "X", "x", "[", "]", "+", "-"];
      this.rules1 = {
        letter: "F",
        becomes: "F+1F-5[XY]+5[XY]",
      };
      this.rules2 = {
        letter: "X",
        becomes: "+5F+1FY",
      };
      this.rules3 = {
        letter: "Y",
        becomes: "-5F-1FX",
      };
      this.colors = ["#013220", "#228B22"];
    }
  }

  //Generates the next sentence. It applies the rules to the current
  //sentence to do so.
  lsys.prototype.generate = function () {
    this.len *= 0.5; //So the tree becomes denser instead of larger.
    this.branchValue += 1; //To ensure increased thickness of trunk.
    var nextSentence = "";
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);
      if (current == current.toLowerCase()) {
        current = current.toUpperCase();
      }
      var found = false;

      if (current == this.rules1.letter) {
        found = true;
        nextSentence += this.rules1.becomes;
      } else if (current == this.rules2.letter) {
        found = true;
        nextSentence += this.rules2.becomes;
      } else if (current == this.rules3.letter) {
        found = true;
        nextSentence += this.rules3.becomes;
      }

      if (!found) {
        nextSentence += current;
      }
    }
    this.sentence = nextSentence;
  };

  //The drawing of the lsystem
  lsys.prototype.draw = function () {
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);

      if (current == "F" || current == "f") {
        if (p.random() < 0.8) {
          // All the designing happens here!

          let lineColor = p.lerpColor(
            p.color(this.colors[0]),
            p.color(this.colors[1]),
            i / this.sentence.length
          );
          lineColor.setAlpha(150);
          p.stroke(lineColor);
          //strokeWeight(3 + abs((sin((i+timer)/this.sentence.length*PI) * 15)))
          p.strokeWeight(this.branchValue);
          p.line(0, 0, 0, -this.len);
          p.translate(0, -this.len);
          if (i / this.sentence.length > 0.9) {
            if (p.random() > 0.2) {
              let flowerColor = p.color("red");
              flowerColor.setAlpha(150);
              p.fill(flowerColor);
              p.stroke(flowerColor);
              //triangle(0, 0, -2, -5, 2, -5)
              p.arc(0, 0, 10, 10, 180, 220);
            }
          } else if (this.branchValue <= 2) {
            if (p.random() > 0.7) {
              let flowerColor = p.color("#5B3739");
              flowerColor.setAlpha(150);
              p.fill(flowerColor);
              p.stroke(flowerColor);
              //triangle(0, 0, -2, -5, 2, -5)
              p.arc(0, 0, 10, 10, 180, 220);
            }
          }
          //point(0,0)
          //point(0, -this.len)
        }
      } else if (current == "+") {
        p.rotate(this.angle * parseInt(this.sentence.charAt(i + 1)));
        i++;
      } else if (current == "-") {
        p.rotate(-this.angle * parseInt(this.sentence.charAt(i + 1)));
        i++;
      } else if (current == "[") {
        this.branchValue -= 1;
        p.push();
      } else if (current == "]") {
        this.branchValue += 1;
        p.pop();
      }
    }
  };

  function plantgen() {
    var plant = new lsys();

    plant.angle = p.radians(p.ceil(p.random(3) + 1));
    if (p.random() < 0.33) {
      plant.axiom = "+" + p.floor(p.random(20)).toString() + "F";
      let num = p.floor(p.random(4) + 4);
      plant.rules1.becomes =
        "F-1F-" + num.toString() + "[XY]+" + num.toString() + "[XY]";
    } else if (p.random() < 0.66) {
      plant.axiom = "-" + p.floor(p.random(20)).toString() + "F";
      let num = p.floor(p.random(4) + 4);
      plant.rules1.becomes =
        "F+1F+" + num.toString() + "[XY]-" + num.toString() + "[XY]";
    } else {
      if (p.random() > 0.5)
        plant.axiom = "-" + p.floor(p.random(20)).toString() + "F";
      else plant.axiom = "-" + p.floor(p.random(20)).toString() + "F";
      let num = p.floor(p.random(4) + 4);
      plant.rules1.becomes =
        "FF-" + num.toString() + "[XY]+" + num.toString() + "[XY]";
    }
    return plant;
  }

  //Runs on loading.
  p.setup = function () {
    // Set background and canvas
    p.createCanvas(900, 740);
    p.angleMode(p.RADIANS);
    let colorValue = p.color("#ffdedd");
    p.setGradient(p.color(255, 204, 0), p.color(255));

    p.addSpots();

    p.resetMatrix();

    for (let bush = 0; bush < 3; bush++) {
      for (let n = 0; n < 10; n++) {
        var plant = plantgen();
        for (let i = 0; i < 4; ++i) {
          plant.generate();
        }
        p.push();
        p.translate(p.width / 3 + bush * 150, p.height);
        plant.draw();
        p.pop();
      }
    }
  };

  p.setGradient = function (c1, c2) {
    // noprotect
    p.noFill();
    for (var y = 0; y < p.height; y++) {
      var c = p.lerpColor(c1, c2, y / (p.height * 1.2));
      p.stroke(c);
      p.line(0, y, p.width, y);
    }
  };

  p.addSpots = function () {
    p.noFill();
    var c = p.color("white");
    c.setAlpha(100);
    p.stroke(c);
    let i = 0;
    while (i < 1000) {
      p.circle(p.random(p.width), p.random(p.height), 10, 10);
      i++;
    }
  };

  p.mouseDragged = function () {
    var c = p.color("#808080");
    c.setAlpha(150);
    p.stroke(c);
    p.noFill();
    if (p.mouseIsPressed) p.circle(p.mouseX, p.mouseY, 15, 15);
  };
}
