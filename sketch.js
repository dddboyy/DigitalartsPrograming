let emitter;
let repeller;
let att;
let isParticleActive = false;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter();
  repeller = new Repeller(width / 2, 350);
  att = new Attractor(20, height / 2);
}

function draw() {
  background(0);

  repeller.move(0.5);

  if (isParticleActive) {
    emitter.addParticle(mouseX, mouseY);
  }

  emitter.run(); // 이 부분을 수정하여 계속해서 파티클을 화면에 유지

  repeller.show();
  att.show();
}

function mouseClicked() {
  isParticleActive = !isParticleActive;
}
