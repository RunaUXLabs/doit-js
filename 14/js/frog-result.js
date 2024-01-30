const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7); // 세로 길이 줄이기

// 얼굴
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.fill();

// 눈
ctx.beginPath();
ctx.arc(120, 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
// ctx.moveTo(380, 80);
// 원 두개를 그리는 입장에서 moveTo()를 하지 않으면 원이 분리된 형태라고 인지하지 않는다. 원의 중심과 이동, 반지름 감안하지 않고 아무숫자나 막써도 해당 도형히 연결되어있는것으로 인지한다.
ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.fill();
ctx.stroke();

// 눈동자
ctx.beginPath();
// 눈과 눈동자의 원의 중심은 같다
ctx.arc(120, 80, 5, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 5, 0, Math.PI * 2, false);
ctx.fillStyle = "black";
ctx.fill();

// 입
ctx.beginPath();
ctx.arc(150, 150, 50, 0, (Math.PI / 180) * 180, false);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();

// 웹브라우저에서 실행된 캔버스 위에서 우클릭 > 다른이름으로 저장을 클릭하면 png형식으로 이미지를 저장할 수 있다. 그린그림 만큼만 저장되는것이 아니라 캔버스 사이즈 통째로 저장되며, 배경이 없다면 transparent 처리가 된다.