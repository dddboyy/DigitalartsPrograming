class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.strength = 1000;
  }

  attract(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 1, 100);
    force.normalize();
    let strength = (this.strength * particle.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }

  show() {
    fill(0, 0, 255);
    noStroke();
    ellipse(this.position.x, this.position.y, 20, 20);
  }
}
