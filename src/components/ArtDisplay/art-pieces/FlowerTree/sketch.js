export default function sketch(p) {
  //Definition of the tree class.
  class tree {
    constructor() {
      this.angle = p.radians(25);
      this.axiom = "F";
      this.sentence = this.axiom;
      this.len = 80;
      this.weight = [];
      this.branchValue = 1;
      this.check = false;
      this.alphabet = ["F", "f", "[", "]", "+", "-"];
      this.rules = {
        letter: "F",
        becomes: "FF[++F-F-F][-F++F]",
      };
    }
    //Generates the next sentence. It applies the rules to the current
    //sentence to do so.
    generate() {
      var check = false;
      var openCount = 0;
      var closeCount = 0;
      for (let i = 0; i < this.rules.becomes.length; i++) {
        let current = this.rules.becomes.charAt(i);
        check = false;
        for (var j = 0; j < this.alphabet.length; j++) {
          if (current == this.alphabet[j]) {
            check = true;
            break;
          }
        }
        if (check == false) {
          break;
        }
      }

      this.len *= 0.7; //So the tree becomes denser instead of larger.
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
      this.check = false;
    }
    //Sets the required values for the tree.
    initialAssign(text, len) {
      this.len = len;
      this.branchValue = 1;
      this.sentence = this.axiom;
      this.rules.letter = "F";
      this.rules.becomes = text;
    }
    //The drawing of the tree.
    draw() {
      p.background(10);
      let colorValue = p.color("#000000");
      p.fill(colorValue);
      p.rect(0, 0, p.width, p.height);
      p.resetMatrix();
      p.push();
      p.translate(p.width / 2, p.height);

      for (let i = 0; i < this.weight.length; i++) {
        this.weight[i] = (i + 1) * 2;
      }

      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence.charAt(i);

        if (current == "F" || current == "f") {
          if (p.random() < 0.9) {
            if (this.branchValue > 5) p.strokeWeight(this.weight[4]);
            else if (this.branchValue > 0)
              p.strokeWeight(this.weight[this.branchValue - 1]);
            else p.strokeWeight(this.weight[0]);

            let lineColor = p.color("#777723");
            lineColor.setAlpha(150);
            p.stroke(lineColor);

            if (this.branchValue > 2) {
              p.line(0, 0, 0, -this.len);
              p.translate(0, -this.len);
            } else {
              if (this.branchValue == 2) {
                p.line(0, 0, 0, -this.len);
              } else {
                p.curve(-25, 0, 0, 0, 0, -this.len, 25, -this.len);
              }
              p.translate(0, -this.len);
              if (p.random() > 0.6) {
                flower(0, 0, "red");
                flower(0, p.random(5) + 6, "red");
              } else if (p.random() > 0) {
                flower(0, 0, "white");
                flower(p.random(5) + 6, 0, "#ff4444");
              }
            }
          }
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
      p.pop();
    }
  }

  //Runs on loading.
  p.draw = function () {
    var treeObject = new tree(); //creates object of the class tree.
    for (var i = 0; i < 5; i++) {
      treeObject.weight[i] = i + 1;
    }
    p.createCanvas(740, 740);
    p.background(51);
    if (p.random() > 0.5) {
      treeObject.len = 100;
      treeObject.rules.becomes = "FF[+F][-F[-F]+F]";
    }
    treeObject.angle = p.radians(p.floor(p.random(8) + 20));
    treeObject.generate();
    treeObject.generate();
    treeObject.generate();
    treeObject.draw();
    p.frameRate(1);
    //noLoop()
  };

  function flower(x, y, c) {
    let col = p.color(c);
    p.strokeWeight(1);
    col.setAlpha(90);
    p.stroke(col);
    col.setAlpha(70);
    p.fill(col);
    let m = 10;
    p.circle(p.mouseX, p.mouseY, p.random(5) + 10);
    for (let i = 0; i < 1; i++) {
      p.circle(
        p.mouseX + p.random(m) + 5,
        p.mouseY + p.random(m) + 5,
        p.random(5) + 10
      );
    }
    for (let i = 0; i < 1; i++) {
      p.circle(
        p.mouseX - p.random(m) - 5,
        p.mouseY - p.random(m) - 5,
        p.random(5) + 10
      );
    }
    for (let i = 0; i < 1; i++) {
      p.circle(
        p.mouseX + p.random(m) + 5,
        p.mouseY - p.random(m) - 5,
        p.random(5) + 10
      );
    }
    for (let i = 0; i < 1; i++) {
      p.circle(
        p.mouseX - p.random(m) - 5,
        p.mouseY + p.random(m) + 5,
        p.random(5) + 10
      );
    }
  }
}
