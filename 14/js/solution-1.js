const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// ctx.scale(1.4, 1);// 산소호흡기, 비율맞춤
// 일러스트레이터에서 좌표받아와서 보완하기

ctx.beginPath();
ctx.moveTo(100, 100); // 0,0에서  100, 100으로 시작점 이동
ctx.lineTo(240, 100); // x위치 140이동
ctx.lineTo(120, 250); // x위치 -120이동 y위치 150이동
ctx.lineTo(170, 30); // x위치 50이동 y위치 -120이동
ctx.lineTo(220, 250); // x위치 50이동 y위치 120이동
ctx.lineTo(100, 100); // x위치 -120이동 y위치 -150이동
ctx.closePath();

// 방법1) 테두리만 그리기, 기본색상 블랙;
ctx.stroke();

// 방법2) 색상과 테두리 모두 보이게 
// ctx.fillStyle = "yellow";
// ctx.fill();
// ctx.stroke(); // 얹어지는 개념이니 그리는 순서 조정하거나, 덧그리기

// 방법3) 겉테두리만 보이게
// ctx.stroke();
// ctx.fillStyle = "yellow";
// ctx.fill();

// 방법4) 테두리는 표시하지 않게
// ctx.fillStyle = "yellow";
// ctx.fill();

// 방법5) 일러스트레이터에서 좌표값받아와서 진행
ctx.beginPath();
ctx.moveTo(171, 171);
ctx.lineTo(86, 174);
ctx.lineTo(152, 227);
ctx.lineTo(129, 308);
ctx.lineTo(200, 261);
ctx.lineTo(270, 308);
ctx.lineTo(247, 227);
ctx.lineTo(314, 174);
ctx.lineTo(229, 171);
ctx.lineTo(200, 91);
ctx.closePath();
ctx.fillStyle = "rgba(240,162,255,0.5)";
ctx.strokeStyle = "rgb(240,162,255)";
ctx.lineWidth = 5;
ctx.fill();
ctx.stroke();

