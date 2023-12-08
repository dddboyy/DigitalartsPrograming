class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.acceleration = createVector(0, 0);
    this.mass = 1;
    this.gravity = createVector(0, 0.3);
  }

  // 수정된 메서드: 중력의 방향을 변경하는 로직
  updateGravityDirection() {
    if (keyIsDown(87)) {  // W 키
      let angle = map(this.position.y, 0, height, 0, PI);
      let newGravity = createVector(0, -cos(angle) * 0.6);
      this.gravity = newGravity;
    } else if (keyIsDown(83)) {  // S 키
      let angle = map(this.position.x, 0, width, 0, PI);
      let newGravity = createVector(cos(angle) * 0.6, 0);
      this.gravity = newGravity;
    } else if (keyIsDown(65)) {  // A 키
      let angle = map(this.position.x, 0, width, 0, PI);
      let newGravity = createVector(-cos(angle) * 0.6, 0);
      this.gravity = newGravity;
    } else if (keyIsDown(68)) {  // D 키
      let angle = map(this.position.x, 0, width, 0, PI);
      let newGravity = createVector(cos(angle) * 0.6, 0);
      this.gravity = newGravity;
    } else {
      // 아무 키도 눌리지 않은 경우 중력 없음
      this.gravity = createVector(0, 0);
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    this.updateGravityDirection();
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
