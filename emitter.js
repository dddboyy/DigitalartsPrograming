class Emitter {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    let particle = new Particle(this.position.x, this.position.y);
    this.particles.push(particle);
  }

  applyForce(force) {
    for (let particle of this.particles) {
      particle.applyForce(force);
    }
  }

  run() {
    for (let particle of this.particles) {
      particle.update();
      particle.display();
    }
  }
}
