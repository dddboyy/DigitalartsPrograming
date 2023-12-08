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
}
