//gabby kraemer redoing project 3 



let particles = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(120,66,210);
  for (let i = 0; i < 10; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {

  constructor() {
    this.x = 300;
    this.y = 580;
    this.vx = random(-1, 10);
    this.vy = random(-1, -10);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 7;
  }

  show() {
   stroke(255);
    fill(225,34,143, this.alpha);
    ellipse(this.x, this.y, 46);
  }

}
