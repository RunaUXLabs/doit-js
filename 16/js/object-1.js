const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight;  // 캔버스 높이

// 생성자함수선언, 쿠키틀
// function Circle(x위치, y위치, 반지름, 색상) {
//   this.x = x위치;
//   this.y = y위치;
//   this.radius = 반지름;
//   this.color = 색상;

//   // draw 메서드
//   this.그려라 = function () {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     ctx.fill();
//   };
// }

// 클래스로변경 해보기
class Circle {
  constructor(x위치, y위치, 반지름, 색상) {
    this.x = x위치;
    this.y = y위치;
    this.radius = 반지름;
    this.color = 색상;
  }
  그려라 = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };
}

// 같은 계열을 만드는데 옵션값만 다른거라면 생성자함수를 선언하여 인스턴스를 뽑아내는 형식으로 캔버스에 적용하면 빠른 그리기를 할 수 있다.

// 인스턴스 만들기
const circleOne = new Circle(100, 100, 50, "red");
const circleTwo = new Circle(200, 200, 20, "blue");

// 그려라 콜링
circleOne.그려라();
// 생성자 함수 안에 들어있는 그려라메서드 콜링
// 그 안에있는 ctx.fill()등 메서드 들이 일하는중
circleTwo.그려라();

// 연습, 복습하기
const circle3 = new Circle(10, 150, 100, "green");
circle3.그려라();
const circle4 = new Circle(70, 50, 60, "pink");
circle4.그려라();