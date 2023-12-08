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

  applyBounce() {
    for (let particle of this.particles) {
      particle.applyBounce();
    }
  }

  run() {
    this.applyGravity();
    this.applyBounce();
    for (let particle of this.particles) {
      particle.update();
      particle.display();
    }
  }
}
