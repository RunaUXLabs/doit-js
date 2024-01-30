const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight;  // 캔버스 높이

// 객체정보
const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  // dx, dy가 동일한 값이면 45dgree로 움직임만 보임.
  color: "#222"
};

// 객체정보 받아서 그려라 함수
function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

function move() {
  // 캔버스 지우고, 그리고 순서
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 캔버스지워!때문에 궤적이 남지 않고 뒤에오는 그려진 객체 하나만 남아 움직이는 느낌으로 보인다
  drawCircle(); // 그려

  circle.x += circle.dx; //객체에서 dx정보 받아서 x에 누적할당
  circle.y += circle.dy; //객체에서 dy정보 받아서 y에 누적할당

  // or조건
  // x의 위치가 누적대입이 쌓여 캔버스+반지름길이를 넘어섰을때
  // x의 위치 - 반지름 사이즈가 0미만일때
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -(circle.dx); // 음수변환으로 방향뒤집기
  }
  if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
    circle.dy = -(circle.dy); // 음수변환으로 방향뒤집기
    /** (오른쪽끝에 닿은경우)객체dx의 값을 음수로 반전시킨다
     * 
     *  예)캔버스가 500 공반지름 30 circle.x가 530이 되었다
     *  다음단계에서 +4를 해야하는데 dx가 음수로 변하여
     *  누적대입이니 -4를 한다 530에서 4를 빼는 셈이 되고
     *  0으로 수렴하게 되면 다시 dx가 양수가 되며 더해줌.
     */
    // 응용해서 게임으로 만든다면?
    // circle.y + circle.radius > canvas.height 의 조건을 키보드 이벤트로 x값만 조정할수 있는 작은 판을 만들어서, 이 판에 닿을 때만 방향전환을 시키면 벽돌깨기 게임을 만들수 있다. 작은판에 공이 안닿으면, 방향전환이 안되므로 아래로 빠져서(캔버스를 벗어나서) 죽게되는 흐름을 짜면 된다.
  }
  requestAnimationFrame(move); // 반복을 시킨다
}

move(); // 콜링