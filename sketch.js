let emitter;
let repeller;
let att;
let isParticleActive = false;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter();
  repeller = new Repeller(width / 2, height / 2);
  att = new Attractor(width / 2, height / 2);
}

function draw() {
  background(0);

  repeller.move(0.5);

  if (isParticleActive) {
    emitter.addParticle(mouseX, mouseY);
  }

  emitter.run();

  repeller.show();
  att.show();
}

function mouseClicked() {
  isParticleActive = !isParticleActive;
}
