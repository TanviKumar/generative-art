import * as dat from "dat.gui";
export default function sketch(p) {
  let x = 1;
  let y = 1;
  let z = 1;

  let translate_x = 0;
  let translate_y = 0;
  let translate_z = 30;
  
  let explode = false;
  let expand = true;
  
  let expand_factor = 1.1;
  let iter = 1;
  let iter_limit = 20;
  let interval = 0.01;
  
  let vertices = [];
  let vertices_temp = [];

  class Hue {
    constructor() {
      this.hue = 0;
      this.hue_step = 0.2;
    }

    getColor() {
      let color = this.hue;
      this.hue += this.hue_step;

      if (this.hue > 360) {
        this.hue = 360;
        this.hue_step = -0.2;
      } else if (this.hue < 0) {
        this.hue = 0;
        this.hue_step = 0.2;
      }

      return color;
    }
  }

  p.setup = function () {
    p.createCanvas(800, 700, p.WEBGL);
    p.colorMode(p.HSB);
  };

  p.draw = function () {
    p.background(0);
    p.noFill();
    p.orbitControl();
    p.translate(translate_x, translate_y, translate_z);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.rotateZ(p.frameCount * 0.01);
    p.isImmediateDrawing = false;

    if (p.frameCount % 200 === 0 && !explode) {
        explode = true;
        vertices_temp = [];

        for (let i = 0; i < vertices.length; i++) {
            let Point = vertices[i];
            vertices_temp.push({"x": Point.x, "y": Point.y});
        }
    }

    if (explode) {
      p.beginShape(p.POINTS);
      p.strokeWeight(5);
      p.scale(3);
      let hue = new Hue();

      for (let i = 0; i < vertices_temp.length; i++) {
        let Point = vertices_temp[i];
        if (expand) {
          Point.x *= expand_factor;
          Point.y *= expand_factor;
          Point.z *= expand_factor;
        } else {
          Point.x /= expand_factor;
          Point.y /= expand_factor;
          Point.z /= expand_factor;
        }

        p.stroke(hue.getColor(), 255, 255);
        p.vertex(Point.x, Point.y, Point.z);
      }

      p.endShape();

      if (iter <= iter_limit && expand) {
        expand = true;
        iter += 1;
      } else if (iter >= 1) {
        expand = false;
        iter -= 1;
      }

      if (iter === 0) {
        explode = false;
        expand = true;
      }
    }

    else {
      let delta_x = (uiAlpha.getValue() * (y - x)) * interval;
      let delta_y = (x * (uiBeta.getValue() - z) - y) * interval;
      let delta_z = (x * y - uiGamma.getValue() * z) * interval;

      x += delta_x;
      y += delta_y;
      z += delta_z;

      vertices.push({
        "x": x - translate_x,
        "y": y - translate_y,
        "z": z - translate_z
      });

      p.beginShape();
      p.strokeWeight(2);
      p.scale(7);
      let hue = new Hue();

      for (let i = 0; i < vertices.length; i++) {
        let Point = vertices[i];
        p.stroke(hue.getColor(), 255, 255);
        p.vertex(Point.x, Point.y, Point.z);
      }

      p.endShape();
    }
  };

  class Jalebi {
    constructor() {
      this.Alpha = 10;
      this.Beta = 28;
      this.Gamma = 8 / 3;
    }
  }

  const jalebi = new Jalebi();
  const gui = new dat.GUI();
  const uiAlpha = gui.add(jalebi, "Alpha", 5, 40, 1);
  const uiBeta = gui.add(jalebi, "Beta", 5, 40, 1);
  const uiGamma = gui.add(jalebi, "Gamma", 2, 40, 1);
  uiAlpha.onChange(() => {
    p.draw();
  });
  uiBeta.onChange(() => {
    p.draw();
  });
  uiGamma.onChange(() => {
    p.draw();
  });
  gui.close();
  window.onpopstate = function (e) {
    gui.destroy();
  };
}
