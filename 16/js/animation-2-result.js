const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight;  // 캔버스 높이

// 객체선언
const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "#222"
};
// 객체정보를 이용하여 그리라는 함수
function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

function move() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  // 반투명 흰색, 농도에 따라 잔상길이가 달라짐
  // 반복되는 함수콜링에 의해서 0.3씩 계속 지워나가는 개념으로 이해하면 된다.
  ctx.fillRect(0, 0, canvas.width, canvas.height); // 지워라 대신에 반투명 상자 추가해라
  drawCircle(); //그려라

  //객체에서 dx, dy정보 받아서 객체의 xy를 누적이동시켜라
  // x4, y4이므로 수직수평은 없고 대각선이동을 한다.
  // 공의 속도와 각도를 이동시키고 싶으면 객체의 dx, dy값을 변동시키면 된다.
  circle.x += circle.dx;
  circle.y += circle.dy;

  // 캔버스 사이즈, 0미만 사이즈를 넘어서면 dx,dy값이 음수로 반전되어방향을 틀어버림 
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
  }
  if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
    circle.dy = -circle.dy;
  }

  requestAnimationFrame(move); // 반복해라
}

move();// 콜링