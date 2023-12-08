class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0); // 가속도 초기화
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  display() {
    // Particle의 모양 및 스타일을 그림
    point(this.position.x, this.position.y);
  }
}
