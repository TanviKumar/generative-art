export default function sketch(p) {
  //Definition of the lsystem class.
  class lsys {
    constructor() {
      this.angle = p.radians(36);
      this.axiom = "F++F++F++F++F";
      this.sentence = this.axiom;
      this.len = 360;
      this.branchValue = 1;
      this.alphabet = ["F", "f", "X", "x", "[", "]", "+", "-"];
      this.rules = {
        letter: "F",
        becomes: "F++F++F+++++F-F++F",
      };
      this.colors = ["#ff7777", "#ff00ff"];
    }
    //Generates the next sentence. It applies the rules to the current
    //sentence to do so.
    generate() {
      this.len *= 0.4; //So the tree becomes denser instead of larger.
      this.branchValue += 1; //To ensure increased thickness of trunk.
      let nextSentence = "";
      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence.charAt(i);
        if (current == current.toLowerCase()) {
          current = current.toUpperCase();
        }
        let found = false;

        if (current == this.rules.letter) {
          found = true;
          nextSentence += this.rules.becomes;
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
          // All the designing happens here!
          let lineColor = p.lerpColor(
            p.color(this.colors[0]),
            p.color(this.colors[1]),
            i / this.sentence.length
          );
          lineColor.setAlpha(35);
          p.stroke(lineColor);
          p.strokeWeight(
            10 + p.abs(p.sin(((i + timer) / this.sentence.length) * p.PI) * 20)
          );
          //strokeWeight(30)
          p.point(0, 0);
          //point(0, -this.len)
          p.translate(0, -this.len);
        } else if (current == "+") {
          p.rotate(this.angle);
        } else if (current == "-") {
          p.rotate(-this.angle);
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

  let timer = 0;

  //Runs on loading.
  p.draw = function () {
    let lsysObject = new lsys(); //creates object of the class tree.
    timer += 30;
    // Set background and canvas
    p.createCanvas(740, 740);
    p.angleMode(p.RADIANS);
    p.background(10);
    let colorValue = p.color("#000000");
    p.fill(colorValue);
    p.rect(0, 0, p.width, p.height);
    p.resetMatrix();
    p.push();
    p.translate(40, (p.height * 5) / 6 - 20);

    // Set basics of lsystem
    for (let i = 0; i < 3; ++i) {
      lsysObject.generate();
    }
    lsysObject.draw();
    //frameRate()
    //noLoop()
    p.pop();
  };
}
