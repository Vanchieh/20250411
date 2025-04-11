let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#f5cac3'); // 設定背景顏色

  // 生成 50 個圓的初始位置和顏色
  for (let i = 0; i < 50; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(40, 100),
      color: color(random(255), random(255), random(255)) // 鮮豔顏色
    });
  }
}

function draw() {
  background(245, 202, 195, 50); // 使用 RGBA，最後一個參數為透明度（0-255）

  let sizeOffset = map(mouseX, 0, width, 40, 120);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}
