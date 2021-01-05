//Definition of the lsystem class.
function lsys() {
    this.angle = radians(36);
    this.axiom = "F++F++F++F++F";
    this.sentence = this.axiom;
    this.len = 360;
    this.branchValue = 1;
    this.alphabet = ["F", "f", 'X', 'x',  "[", "]", "+", "-"];
    this.rules = {
      letter: "F",
      becomes: "F++F++F+++++F-F++F"
    };
    this.colors = ['#ff7777', '#ff00ff']
  }
  
  //Generates the next sentence. It applies the rules to the current 
  //sentence to do so.
  lsys.prototype.generate = function() {
    this.len *= 0.4; //So the tree becomes denser instead of larger.
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
  }
  
  //The drawing of the lsystem
  lsys.prototype.draw = function() {
  
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);
  
      if (current == "F" || current == "f") {
        
        // All the designing happens here!
  
        let lineColor = lerpColor(color(this.colors[0]), color(this.colors[1]), i/this.sentence.length)
        lineColor.setAlpha(35)
        stroke(lineColor)
        strokeWeight(10 + abs((sin((i+timer)/this.sentence.length*PI) * 20)))
        //strokeWeight(30)
        point(0,0)
        //point(0, -this.len)
        translate(0, -this.len);
  
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
  }
  
  var timer = 0
  
  //Runs on loading.
  function draw() {
    var lsysObject = new lsys() //creates object of the class tree.
    timer+=30
    // Set background and canvas
    createCanvas(740, 740)
    angleMode(RADIANS)
    background(10);
    let colorValue = color('#000000')
    fill(colorValue)
    rect(0, 0, width, height)
    resetMatrix()
    push()
    translate(40, height*5/6 - 20)
    
    // Set basics of lsystem
    for (let i = 0; i < 3; ++i) {
      lsysObject.generate()
    }
    lsysObject.draw()
    //frameRate()
    //noLoop()
    pop()
  }