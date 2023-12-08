class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.strength = -1000;
    this.radius = 20;
    this.vertices = 6; // 다각형의 꼭지점 개수
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
    beginShape();
    for (let i = 0; i < this.vertices; i++) {
      let angle = map(i, 0, this.vertices, 0, TWO_PI);
      let x = this.position.x + this.radius * cos(angle);
      let y = this.position.y + this.radius * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
