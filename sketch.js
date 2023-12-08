// sketch.js

let emitter;
let repeller;
let att;
let isParticleActive = false;
let hueSlider;

function setup() {
  createCanvas(400, 400);

  // 슬라이더 생성 및 설정
  hueSlider = createSlider(0, 360, 0, 1);
  hueSlider.position(10, height + 10);

  emitter = new Emitter();
  repeller = new Repeller(width / 2, height / 2);
  att = new Attractor(width / 2, height / 2);
}

function draw() {
  background(hueSlider.value(), 0, 100);

  repeller.move(0.5);

  if (isParticleActive) {
    emitter.addParticle(mouseX, mouseY, hueSlider.value());
  }

  emitter.run();

  repeller.show();
  att.show();
}

function mouseClicked() {
  isParticleActive = !isParticleActive;
}
