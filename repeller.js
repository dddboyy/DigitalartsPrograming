class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.strength = -1000;
  }

  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 1, 100);
    force.normalize();
    let strength = (this.strength * particle.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }

  // 수정된 부분: 적용할 힘을 Particle 클래스의 메서드로 변경
  move(strength) {
    for (let particle of emitter.particles) {
      let force = this.repel(particle);
      particle.applyForce(force);
    }
  }

  show() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.position.x, this.position.y, 20, 20);
  }
}
