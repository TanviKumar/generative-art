export default function sketch(p) {
  //Definition of the lsystem class.
  class lsys {
    constructor() {
      this.angle = p.radians(4);
      this.axiom = "F";
      this.sentence = this.axiom;
      this.len = 550;
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
      this.colors = ["#996e0c", "#c18c0f"];
      this.colors = ["#347f38", "#779635"];
    }
    //Generates the next sentence. It applies the rules to the current
    //sentence to do so.
    generate() {
      this.len *= 0.5; //So the tree becomes denser instead of larger.
      this.branchValue += 1; //To ensure increased thickness of trunk.
      let nextSentence = "";
      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence.charAt(i);
        if (current == current.toLowerCase()) {
          current = current.toUpperCase();
        }
        let found = false;

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
    }
    //The drawing of the lsystem
    draw() {
      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence.charAt(i);

        if (current == "F" || current == "f") {
          if (p.random() < 0.9) {
            // All the designing happens here!
            let lineColor = p.lerpColor(
              p.color(this.colors[0]),
              p.color(this.colors[1]),
              i / this.sentence.length
            );
            lineColor.setAlpha(150);
            p.stroke(lineColor);
            //strokeWeight(3 + abs((sin((i+timer)/this.sentence.length*PI) * 15)))
            p.strokeWeight(this.branchValue + 1);
            p.line(0, 0, 0, -this.len);
            p.translate(0, -this.len);
            if (i / this.sentence.length > 0.95) {
              if (p.random() > 0.92) {
                flower();
              }
            } else if (this.branchValue < 3) {
              if (p.random() > 0.97) {
                flower();
              } else if (p.random() > 0.9) {
                spot();
              } else if (p.random() > 0.8) {
                p.circle(0, 0, 6, 6);
              }
            }
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
    }
  }

  function plantgen() {
    let plant = new lsys();

    plant.angle = p.radians(p.ceil(p.random(1) + 3));
    plant.axiom = "+" + p.floor(p.random(20)).toString() + "F";
    let num = p.floor(p.random(4) + 4);
    plant.rules1.becomes =
      "F-1F-" + num.toString() + "[XY]+" + num.toString() + "[XY]";
    return plant;
  }

  //Runs on loading.
  p.setup = function () {
    // Set background and canvas
    p.createCanvas(1200, 780);
    p.angleMode(p.RADIANS);
    let colorValue = p.color("#ffdedd");
    setGradient(p.color(226, 181, 223), p.color(219, 255, 252));

    p.resetMatrix();

    let plant = plantgen();
    let plant1 = plantgen();
    let plant2 = plantgen();
    let num = p.floor(p.random(4) + 4);
    plant2.rules1.becomes =
      "F+1F-" + num.toString() + "[XY]+" + num.toString() + "[XY]";
    plant2.axiom = "-" + p.floor(p.random(20)).toString() + "F";
    for (let i = 0; i < 4; ++i) {
      plant.generate();
      plant1.generate();
      plant2.generate();
    }

    p.push();
    p.translate(p.width - 20, p.height);
    plant.draw();
    p.pop();
    p.push();
    p.translate(p.width - 30, p.height);
    //plant1.draw()
    p.pop();
    p.push();
    p.translate(0, p.height + 10);
    plant2.draw();
    p.pop();
  };

  function setGradient(c1, c2) {
    // noprotect
    p.noFill();
    for (let y = 0; y < p.height; y++) {
      let c = p.lerpColor(c1, c2, y / (p.height * 1.2));
      p.stroke(c);
      p.line(0, y, p.width, y);
    }
  }

  function flower() {
    let n = 5;
    let d = 3;
    let scl = p.floor(p.random(15) + 35);
    let c = p.color("red");
    c.setAlpha(180);
    p.fill(c);
    p.noStroke();
    let a = 0;
    for (let i = 1; i <= d; ++i) {
      c.setAlpha(p.random(100) + 25);
      p.fill(c);
      p.beginShape();
      for (; a < p.TWO_PI * i; a += 0.01) {
        p.vertex(
          p.cos((n / d) * a) * scl * p.cos(a),
          p.cos((n / d) * a) * scl * p.sin(a)
        );
      }
      p.endShape(p.CLOSE);
    }
  }

  function spot() {
    let n = 5;
    let d = 3;
    let scl = p.floor(p.random(15) + 15);
    let c = p.color("red");
    p.noStroke();
    let a = 0;
    for (let i = 1; i <= d; ++i) {
      c.setAlpha(p.random(100) + 25);
      p.fill(c);
      p.beginShape();
      for (; a < p.TWO_PI * i; a += 0.01) {
        p.vertex(
          p.cos((n / d) * a) * scl * p.cos(a),
          p.cos((n / d) * a) * scl * p.sin(a)
        );
      }
      p.endShape(p.CLOSE);
    }
  }
}
