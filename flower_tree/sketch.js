//Definition of the tree class.
function tree() {
    this.angle = radians(25);
    this.axiom = "F";
    this.sentence = this.axiom;
    this.len = 80;
    this.weight = [];
    this.branchValue = 1;
    this.check = false;
    this.alphabet = ["F", "f", "[", "]", "+", "-"];
    this.rules = {
      letter: "F",
      becomes: "FF[++F-F-F][-F++F]"
    };
  }
  
  //Generates the next sentence. It applies the rules to the current 
  //sentence to do so.
  tree.prototype.generate = function() {
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
  tree.prototype.initialAssign = function(text, len) {
    this.len = len;
    this.branchValue = 1;
    this.sentence = this.axiom;
    this.rules.letter = "F";
    this.rules.becomes = text;
  }
  
  //The drawing of the tree. 
  tree.prototype.draw = function() {
    background(10);
    let colorValue = color('#000000');
    fill(colorValue);
    rect(0, 0, width, height);
    resetMatrix();
    push()
    translate(width / 2, height);
  
    for (let i = 0; i < this.weight.length; i++) {
      this.weight[i] = (i + 1) * 2
    }
  
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);
  
      if (current == "F" || current == "f") {
        if (random() < 0.9) {
          if (this.branchValue > 5)
            strokeWeight(this.weight[4]);
          else if (this.branchValue > 0)
            strokeWeight(this.weight[this.branchValue - 1]);
          else
            strokeWeight(this.weight[0]);
          
          let lineColor = color('#777723')
          lineColor.setAlpha(150)
          stroke(lineColor)
          
          if (this.branchValue > 2) {
            line(0, 0, 0, -this.len);
            translate(0, -this.len);
          } else {               
            if (this.branchValue == 2) {
              line(0, 0, 0, -this.len);
            } else {
              curve(-25, 0, 0, 0, 0, -this.len, 25, -this.len)  
            }
            translate(0, -this.len);
            if (random() > 0.6) {
              flower(0, 0, 'red')
              flower(0, random(5) + 6, 'red')
            }
            else if (random() > 0) {
              flower(0, 0, 'white')
              flower(random(5) + 6, 0, '#ff4444')
            }
          }
          
        }
      } else if (current == "+") {
        rotate(this.angle);
      } else if (current == "-") {
        rotate(-this.angle);
      } else if (current == "[") {
        this.branchValue -= 1;
        push();
      } else if (current == "]") {
        this.branchValue += 1;
        pop();
      }
    }
    pop()
  }
  
  //Runs on loading.
  function draw() {
    var treeObject = new tree() //creates object of the class tree.
    for (var i = 0; i < 5; i++) {
      treeObject.weight[i] = i + 1
    }
    createCanvas(740, 740)
    background(51)
    if (random() > 0.5) {
      treeObject.len = 100
      treeObject.rules.becomes = 'FF[+F][-F[-F]+F]'
    }
    treeObject.angle = radians(floor(random(8) + 20))
    treeObject.generate()
    treeObject.generate()
    treeObject.generate()
    treeObject.draw()
    frameRate(1)
    //noLoop()
  }
  
  
  function flower(x, y, c) {
    let col = color(c)
    strokeWeight(1)
    col.setAlpha(90)
    stroke(col)
    col.setAlpha(70)
    fill(col)
    let m = 10
    circle(mouseX, mouseY, random (5) + 10)
    for (let i = 0; i < 1; i++) {
      circle(mouseX + random(m) + 5, mouseY + random(m) + 5, random(5) + 10)
    }
    for (let i = 0; i < 1; i++) {
      circle(mouseX - random(m) - 5, mouseY - random(m) - 5, random(5) + 10)
    }
    for (let i = 0; i < 1; i++) {
      circle(mouseX + random(m) + 5, mouseY - random(m) - 5, random(5) + 10)
    }
    for (let i = 0; i < 1; i++) {
      circle(mouseX - random(m) - 5, mouseY + random(m) + 5, random(5) + 10)
    }
  }