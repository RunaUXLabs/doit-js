const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight;  // 캔버스 높이

// 객체정보
const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 7,    // 가로로 움직일 크기 (x축 이동 속도)
  dy: 4,    // 세로로 움직일 크기 (y축 이동 속도)
  color: "#222"
};

// 위의 circle정보를 가지고 그려라 라는 함수정의
// 이함수가 콜링되면 원 만들어짐
function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

// 움직여라 라는 함수
function move() {
  drawCircle(); // 원그려라 콜링

  // 방향성 지정, dx, dy의 수치조정으로 속도및 방향 자율조정 가능
  circle.x += circle.dx; // dx값가져와서 x값을 누적시켜라
  circle.y += circle.dy; // dy값가져와서 y값을 누적시켜라

  // window.requestAnimationFrame(콜백)
  // setInterval()이나 setTimeout() 이용하여 애니메이션을 만들던 과거와 달리 애니메이션 생성 전용으로 탄생함
  // 내안에서 나를 부르는 형식이므로 무한으로 콜백콜링
  requestAnimationFrame(move);
}

move(); // 콜링