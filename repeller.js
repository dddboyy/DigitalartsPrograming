// repeller.js

class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.strength = -1000;
    this.radius = 20;
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

  move(strength) {
    for (let particle of emitter.particles) {
      let force = this.repel(particle);
      particle.applyForce(force);
    }
  }

  show() {
    fill(255); // 흰색으로 설정
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }
}
