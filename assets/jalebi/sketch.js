// coordinates of points
let x = 1;
let y = 1;
let z = 1;

// origin translation
let translate_x = 0;
let translate_y = 0;
let translate_z = 30;

// coefficients of lorenz system
let alpha = 10;
let beta = 28;
let gamma = 8 / 3;

let explode = false;
let expand = true;

let expand_factor = 1.1;
let iter = 1;
let iter_limit = 20;
let interval = 0.01;

// array to store the points
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

function setup() {
    createCanvas(800, 700, WEBGL);
    colorMode(HSB);
}

function draw() {

    background(0);
    noFill();
    orbitControl();
    translate(translate_x, translate_y, translate_z);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    isImmediateDrawing = false;

    // exploding animation
    if (frameCount % 200 === 0 && !explode) {
        explode = true;
        vertices_temp = [];

        for (let i = 0; i < vertices.length; i++) {
            let Point = vertices[i];
            vertices_temp.push({"x": Point.x, "y": Point.y});
        }
    }

    if (explode) {

        beginShape(POINTS);
        strokeWeight(5);
        scale(3);
        let hue = new Hue();

        for (let i = 0; i < vertices_temp.length; i++) {
            let Point = vertices_temp[i];

            if (expand) {
                // move the points away from the origin
                Point.x *= expand_factor;
                Point.y *= expand_factor;
                Point.z *= expand_factor;
            } else {
                // bring points back to their original position
                Point.x /= expand_factor;
                Point.y /= expand_factor;
                Point.z /= expand_factor;
            }

            stroke(hue.getColor(), 255, 255);
            vertex(Point.x, Point.y, Point.z);
        }

        endShape();

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

        let delta_x = (alpha * (y - x)) * interval;
        let delta_y = (x * (beta - z) - y) * interval;
        let delta_z = (x * y - gamma * z) * interval;

        x += delta_x;
        y += delta_y;
        z += delta_z;

        vertices.push({
            "x": x - translate_x,
            "y": y - translate_y,
            "z": z - translate_z
        });

        beginShape();
        strokeWeight(2);
        scale(7);
        let hue = new Hue();

        for (let i = 0; i < vertices.length; i++) {
            let Point = vertices[i];
            stroke(hue.getColor(), 255, 255);
            vertex(Point.x, Point.y, Point.z);
        }

        endShape();
    }
}
