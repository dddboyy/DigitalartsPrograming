class Emitter {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    let particle = new Particle(this.position.x, this.position.y);
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
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.display();
    }
  }
}
