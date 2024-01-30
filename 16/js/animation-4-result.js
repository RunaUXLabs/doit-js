const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const alpha = 0.3;
const randomNum = Math.floor((Math.random() * 50 + 10));
// 클래스로 변경
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dy = Math.floor(Math.random() * 4) + 1;
  }
  // 그려라메서드
  draw = function () {
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    // 글로우 효과를 주기위해 그림자를 밝은색으로 추가
    ctx.shadowColor = "rgba(255,255,255,0.8)";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 25;
  };

  animate = function () {
    this.x += this.dx;
    this.y += this.dy;
    // 캔버스 안쪽으로 좌표제한
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.draw();
  };
}
const objs = []; // 공담을 배열 //반복문 돌려서 원하는 갯수 뽑아냄
for (let i = 0; i < randomNum; i++) {
  const radius = Math.floor((Math.random() * 50)) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  objs.push(new Circle(x, y, radius, color));
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let obj of objs) obj.animate();
  requestAnimationFrame(update);// 반복해라, 재귀함수
}
update(); // 함수콜링
