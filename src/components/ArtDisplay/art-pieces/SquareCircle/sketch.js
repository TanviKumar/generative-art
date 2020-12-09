export default function sketch(p) {
  let rad = 150;
  let steps = 10;

  p.setup = function () {
    p.createCanvas(1000, 1000);
    p.rectMode(p.CENTER);
    p.angleMode(p.RADIANS);
    //angleMode(DEGREES)
    p.blendMode(p.BLEND);
    p.noLoop();
  };

  p.draw = function () {
    p.background("black");
    p.translate(p.width / 2, p.height / 2);
    p.noStroke();
    let c;
    for (let j = 150; j < 400; j += 25) {
      rad = j;
      for (let i = 0; i < 360; i += steps) {
        c = p.color(p.random(200) + 20, p.random(20) + 20, p.random(200) + 20);
        c.setAlpha(75);
        p.fill(c);
        p.rect(
          rad * p.cos(i),
          rad * p.sin(i),
          p.random(30) + 25,
          p.random(30) + 25
        );
      }
      if (steps > 1) steps--;
    }
    c = p.color("white");
    c.setAlpha(60);
    p.fill(c);
    p.circle(-100, -120, 150);
    p.circle(120, 120, 40);
  };
}
