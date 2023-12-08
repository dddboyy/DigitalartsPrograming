class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5)); // 더 작은 범위로 수정
    this.acceleration = createVector(0, 0);
    this.mass = 1;
    this.gravity = createVector(0, 0.1);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  applyGravity() {
    this.applyForce(this.gravity);
  }

  applyBounce() {
    if (this.position.y > height) {
      this.velocity.y *= this.bounce;
      this.position.y = height;
    }
  }

  display() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.position.x, this.position.y, 10, 10);
  }
}
