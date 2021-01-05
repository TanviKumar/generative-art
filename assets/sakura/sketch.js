//Definition of the lsystem class.
function lsys() {
    this.angle = radians(4)
    this.axiom = "F";
    this.sentence = this.axiom;
    this.len = 550
    this.branchValue = 0;
    this.alphabet = ["F", "f", 'X', 'x', "[", "]", "+", "-"];
    this.rules1 = {
      letter: "F",
      becomes: "F+1F-5[XY]+5[XY]"
    };
    this.rules2 = {
      letter: "X",
      becomes: "+5F+1FY"
    };
    this.rules3 = {
      letter: "Y",
      becomes: "-5F-1FX"
    };
    this.colors = ['#013220', '#228B22']
    this.colors = ['#996e0c', '#c18c0f']
    this.colors = ['#347f38', '#779635']
  }
  
  //Generates the next sentence. It applies the rules to the current 
  //sentence to do so.
  lsys.prototype.generate = function() {
    this.len *= 0.5 //So the tree becomes denser instead of larger.
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
  }
  
  //The drawing of the lsystem
  lsys.prototype.draw = function() {
  
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);
  
      if (current == "F" || current == "f") {
  
        if (random() < 0.9) {
  
          // All the designing happens here!
  
          let lineColor = lerpColor(color(this.colors[0]), color(this.colors[1]), i / this.sentence.length)
          lineColor.setAlpha(150)
          stroke(lineColor)
          //strokeWeight(3 + abs((sin((i+timer)/this.sentence.length*PI) * 15)))
          strokeWeight(this.branchValue + 1)
          line(0, 0, 0, -this.len)
          translate(0, -this.len)
          if (i / this.sentence.length > 0.95) {
            if (random() > 0.92) {
              flower()
            }
          } else if (this.branchValue < 3) {
            if (random() > 0.97) {
              flower()
            } else if (random() > 0.9) {
              spot()
            } else if (random() > 0.8) {
              circle(0, 0, 6, 6)
            }
          }
  
        }
  
      } else if (current == "+") {
        rotate(this.angle * parseInt(this.sentence.charAt(i + 1)))
        i++
      } else if (current == "-") {
        rotate(-this.angle * parseInt(this.sentence.charAt(i + 1)))
        i++
      } else if (current == "[") {
        this.branchValue -= 1;
        push();
      } else if (current == "]") {
        this.branchValue += 1;
        pop();
      }
    }
  }
  
  function plantgen() {
    let plant = new lsys()
  
    plant.angle = radians(ceil(random(1) + 3))
    plant.axiom = '+' + floor(random(20)).toString() + 'F'
    let num = floor(random(4) + 4)
    plant.rules1.becomes = 'F-1F-' + num.toString() + '[XY]+' + num.toString() + '[XY]'
    return plant
  }
  
  
  
  //Runs on loading.
  function setup() {
  
    // Set background and canvas
    createCanvas(1200, 780)
    angleMode(RADIANS)
    let colorValue = color('#ffdedd')
    setGradient(color(226, 181, 223), color(219, 255, 252));
  
    resetMatrix()
  
    var plant = plantgen()
    var plant1 = plantgen()
    var plant2 = plantgen()
    let num = floor(random(4) + 4)
    plant2.rules1.becomes = 'F+1F-' + num.toString() + '[XY]+' + num.toString() + '[XY]'
    plant2.axiom = '-' + floor(random(20)).toString() + 'F'
    for (let i = 0; i < 4; ++i) {
      plant.generate()
      plant1.generate()
      plant2.generate()
    }
    
    push()
    translate(width - 20, height)
    plant.draw()
    pop()
    push()
    translate(width - 30, height)
    //plant1.draw()
    pop()
    push()
    translate(0, height + 10)
    plant2.draw()
    pop()
  }
  
  function setGradient(c1, c2) {
    // noprotect
    noFill()
    for (var y = 0; y < height; y++) {
      var c = lerpColor(c1, c2, y / (height * 1.2))
      stroke(c)
      line(0, y, width, y)
    }
  }
  
  function flower() {
    var n = 5
    var d = 3
    var scl = floor(random(15) + 35)
    var c = color('red')
    c.setAlpha(180)
    fill(c)
    noStroke()
    var a = 0
    for(let i = 1; i <= d; ++i) {
      c.setAlpha(random(100) + 25)
      fill(c)
      beginShape()
      for(; a < TWO_PI * i; a+=0.01) {  
          vertex((cos((n/d) * a) * scl) * cos(a), (cos((n/d) * a) * scl) * sin(a))
      }
      endShape(CLOSE)
    }
    
  }
  
  function spot() {
    var n = 5
    var d = 3
    var scl = floor(random(15) + 15)
    var c = color('red')
    noStroke()
    var a = 0
    for(let i = 1; i <= d; ++i) {
      c.setAlpha(random(100) + 25)
      fill(c)
      beginShape()
      for(; a < TWO_PI * i; a+=0.01) {  
          vertex((cos((n/d) * a) * scl) * cos(a), (cos((n/d) * a) * scl) * sin(a))
      }
      endShape(CLOSE)
    }
    
  
  }
  