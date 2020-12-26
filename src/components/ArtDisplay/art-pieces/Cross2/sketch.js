export default function sketch(p) {
  //Definition of the lsystem class.
  function lsys() {
    this.angle = p.radians(90);
    this.axiom = "F+F+F+F";
    this.sentence = this.axiom;
    this.len = 250;
    this.branchValue = 1;
    this.alphabet = ["F", "f", "X", "x", "[", "]", "+", "-"];
    this.rules = {
      letter: "F",
      becomes: "F+FF++F+F",
    };
    this.colors = ["#333333", "#bbbbbb"];
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

      if (current == this.rules.letter) {
        found = true;
        nextSentence += this.rules.becomes;
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
        // All the designing happens here!

        let lineColor = p.lerpColor(
          p.color(this.colors[0]),
          p.color(this.colors[1]),
          p.abs(p.sin(((i + colorTimer) / this.sentence.length) * p.HALF_PI))
        );
        lineColor.setAlpha(35);
        p.stroke(lineColor);
        p.strokeWeight(
          3 + p.abs(p.sin(((i + timer) / this.sentence.length) * p.PI) * 15)
        );
        //strokeWeight(3)
        p.line(0, 0, 0, -this.len);
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
  };

  var timer = 0,
    colorTimer = 0;

  //Runs on loading.
  p.draw = function () {
    var lsysObject = new lsys(); //creates object of the class tree.
    timer += 220;
    colorTimer += 40;
    // Set background and canvas
    p.createCanvas(740, 740);
    p.angleMode(p.RADIANS);
    p.background(36);
    let colorValue = p.color("ffff00");
    p.fill(colorValue);
    p.rect(0, 0, p.width, p.height);
    p.resetMatrix();
    p.push();
    p.translate(p.width / 3, p.height / 6);

    // Set basics of lsystem
    for (let i = 0; i < 4; ++i) {
      lsysObject.generate();
    }
    lsysObject.draw();
    //frameRate()
    //noLoop()
    p.pop();
  };
}
