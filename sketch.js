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

  // 파티클 생성 속도를 조절할 수 있는 슬라이더 생성
  birthRateSlider = createSlider(0, 100, 100); // 최소, 최대, 초기값 설정
  birthRateSlider.position(80, height + 10);
  birthRateSlider.style('width', '80px');
}

function draw() {
  background(0);



  repeller.move(0.5);

  if (isParticleActive) {
    emitter.addParticle(mouseX, mouseY);
  }

    // 슬라이더 값을 이용하여 파티클 생성 속도 조절
    emitter.birthRate = birthRateSlider.value();

  emitter.run();

  repeller.show();
  att.show();
}

function mouseClicked() {
  isParticleActive = !isParticleActive;
}
