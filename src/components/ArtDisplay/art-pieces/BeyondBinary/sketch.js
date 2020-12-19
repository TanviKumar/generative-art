import * as dat from 'dat.gui';
export default function sketch(p) {
  let sec_count = 0;

  let skin = ["#8d5524", "#C68642", "#e0ac69", "#f1c27d", "#ffdbac"];

  let body1 = 0;
  let body2 = 150;
  let bodyy = 0;

  p.setup = function () {
    p.createCanvas(300, 300);
    p.rectMode(p.CENTER);
    p.frameRate(uiFrameRate.getValue());
    p.strokeWeight(2);
  };

  p.draw = function () {
    p.fill("#DEFDE0");
    p.square(150, 150, 300);
    if (sec_count < uiTime1.getValue()) {
      drawGirl(body1, bodyy);
      drawBoy(body2, body1);
    } else if (sec_count < uiTime2.getValue() + uiTime1.getValue()) {
      drawGirl(body1, bodyy);
      drawGirl(body2, bodyy);
    } else if (sec_count < uiTime1.getValue() + 2 * uiTime2.getValue()) {
      drawBoy(body1, bodyy);
      drawBoy(body2, bodyy);
    } else {
      drawPerson(body1, bodyy);
      drawPerson(body2, bodyy);
    }
    sec_count++;
  };

  function basicParts() {
    let c = skin[p.floor(p.random(5))];
    p.fill(c);
    p.circle(75, 50, 50);
    p.rect(65, 220, 20, 75);
    p.rect(87, 220, 20, 75);
  }

  function drawGirl(a, b, c) {
    p.push();
    p.translate(a, b);
    basicParts();
    p.fill(uiColor1.getValue());
    p.triangle(40, 75, 110, 75, 75, 125);
    p.triangle(40, 180, 110, 180, 75, 125);
    p.pop();
  }

  function drawBoy(a, b) {
    p.push();
    p.translate(a, b);
    basicParts();
    p.fill(uiColor2.getValue());
    p.rect(75, 100, 70, 52);
    p.rect(75, 155, 70, 52);
    p.pop();
  }

  function drawPerson(a, b) {
    p.push();
    p.translate(a, b);
    basicParts();
    if (p.random() > 0.5) {
      p.fill(uiColor1.getValue());
      p.triangle(40, 75, 110, 75, 75, 125);
    } else {
      p.fill(uiColor2.getValue());
      p.rect(75, 100, 70, 52);
    }

    if (p.random() > 0.5) {
      p.fill(uiColor1.getValue());
      p.triangle(40, 180, 110, 180, 75, 125);
    } else {
      p.fill(uiColor2.getValue());
      p.rect(75, 155, 70, 52);
    }
    p.pop();
  }
  const BeyondBinary = function(){
    this.Color1 = '#EFCF20';
    this.Color2 = '#A083D5';
    this.Time1 = 3;
    this.Time2 = 3;
    this.frameRate = 1;
  };
  const gui = new dat.GUI();
  const beyondBinary = new BeyondBinary();
  let uiColor1 = gui.addColor(beyondBinary, 'Color1');
  let uiColor2 = gui.addColor(beyondBinary, 'Color2');
  let uiTime1 = gui.add(beyondBinary,"Time1",0,20,1);
  let uiTime2 = gui.add(beyondBinary,"Time2",0,20,1);
  let uiFrameRate = gui.add(beyondBinary,"frameRate",1,60,1);
  uiColor1.onChange(p.setup);
  uiColor2.onChange(p.setup);
  uiTime1.onChange(p.setup);
  uiTime2.onChange(p.setup);
  uiFrameRate.onChange(p.setup);
  gui.close();
  window.onpopstate = function(e){
    gui.destroy();
  }
}
