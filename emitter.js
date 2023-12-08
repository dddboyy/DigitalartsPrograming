class Emitter {
  constructor() {
    this.particles = [];
  }

  addParticle(x, y) {
    let particle = new Particle(x, y);
    this.particles.push(particle);
  }

  applyGravity() {
    for (let particle of this.particles) {
      particle.applyGravity();
    }
  }

  run() {
    this.applyGravity();
    for (let particle of this.particles) {
      particle.update();
      particle.display();
    }
  }

  updateEmitterPosition(targetX, targetY) {
    for (let particle of this.particles) {
      particle.updateEmitterPosition(targetX, targetY);
    }
  }

  // 새로 추가된 메서드: R 키를 눌렀을 때 파티클들을 마우스 위치로 끌어당김
  attractParticlesToMouse() {
    let mouseForce = createVector(mouseX, mouseY);
    for (let particle of this.particles) {
      particle.attractTo(mouseForce);
    }
  }
}
