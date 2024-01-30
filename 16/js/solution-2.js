const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// function Rect(x, y, width, height, color) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
//   this.color = color;

//   // 고정값으로 박혀있던 위치값을 생성 될때마다 1~10안에서 랜덤으로 생성되는 위치를 만들수있게 제작함, 숫자가 커질수록 속도차, 각도차가 커지게 됨
//   this.dx = Math.floor(Math.random() * 10) + 1;
//   this.dy = Math.floor(Math.random() * 10) + 1;

//   this.draw = function() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);    
//   }

//   this.animate = function() {
//     this.x += this.dx;
//     this.y += this.dy;

//     if (this.x + this.width > canvas.width || this.x < 0) {
//       this.dx = -this.dx;
//     } 
//     if (this.y + this.height > canvas.height || this.y < 0) {
//       this.dy = -this.dy;
//     }

//     this.draw();
//   }
// }
class Rect {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dx = Math.floor(Math.random() * 10) + 1;
    this.dy = Math.floor(Math.random() * 10) + 1;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.width > canvas.width || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.height > canvas.height || this.y < 0) {
      this.dy = -this.dy;
    }
    this.draw();
  }
}
function move() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  box1.animate();
  box2.animate();
  requestAnimationFrame(move);
}
const box1 = new Rect(10, 10, 50, 50, "red");
const box2 = new Rect(20, 20, 30, 30, "blue");
box1.draw();
box2.draw();
move();