let emitter;
let repeller;
let att;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 350);
  att = new Attractor(20, height / 2);
}

function draw() {
  background(0);

  repeller.move(0.5);

  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();

  emitter.applyGravity();
  emitter.applyBounce();
  emitter.run();

  repeller.show();
  att.show();

  emitter.show();
}
