class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.strength = 1000; // 인력의 세기
  }

  attract(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 1, 100); // 최소 최대 거리 제한
    force.normalize();
    let strength = (this.strength * particle.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }

  show() {
    // Attractor의 모양 및 스타일을 그림
    ellipse(this.position.x, this.position.y, 20, 20);
  }
}
