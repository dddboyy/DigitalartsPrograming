class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.strength = -1000; // 반발력의 세기
  }

  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 1, 100); // 최소 최대 거리 제한
    force.normalize();
    let strength = (this.strength * particle.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }

  show() {
    // Repeller의 모양 및 스타일을 그림
    ellipse(this.position.x, this.position.y, 20, 20);
  }
}
