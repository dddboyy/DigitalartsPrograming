// sketch.js

let emitter;
let repeller;
let att;
let isParticleActive = false;
let colorPicker;


function setup() {
  createCanvas(400, 400);
  emitter = new Emitter();
  repeller = new Repeller(width / 2, height / 2);
  att = new Attractor(width / 2, height / 2);

    // 파티클 색상을 선택할 수 있는 색상 선택기 생성
    colorPicker = createColorPicker('#ff0000'); // 초기 색상은 빨간색
    colorPicker.position(10, height + 10);
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
