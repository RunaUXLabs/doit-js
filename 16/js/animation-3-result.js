const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// 생성자 함수를 이용하여 공 틀만듬
// 기존소스에서는 공정보+ 움직임에 대한 메서드도 추가
// function Circle(x, y, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;

//   // 고정값으로 박혀있던 위치값을 생성 될때마다 1~4안에서 랜덤으로 생성되는 위치를 만들수있게 제작함, 숫자가 커질수록 속도차, 각도차가 커지게 됨
//   this.dx = Math.floor(Math.random() * 4) + 1;
//   this.dy = Math.floor(Math.random() * 4) + 1;

//   this.draw = function () {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     ctx.fill();
//   };

//   this.animate = function () {
//     this.x += this.dx;
//     this.y += this.dy;

//     if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }

//     this.draw();
//   };
// }

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
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
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

const objs = []; // 공담을 배열
//반복문 돌려서 원하는 갯수 뽑아냄
for (let i = 0; i < 50; i++) {
  const radius = Math.floor((Math.random() * 50)) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  objs.push(new Circle(x, y, radius, color));
}


function update() {
  // 잔상은 없게 할거면.clearRect()
  // 잔상 있게 할거면 .fillRect(반투명컬러)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let obj of objs) obj.animate();
  requestAnimationFrame(update);// 반복해라, 재귀함수
}
update(); // 함수콜링

// 어두운배경에 볼전구 느낌 응용해볼것,
// 볼의 사이즈나 컬러는 고정(전구색), 쉐도우처리를 밝은색
// 몽환적인 분위기 쌉가능
// 공갯수 랜덤뽑기도 추가해보기