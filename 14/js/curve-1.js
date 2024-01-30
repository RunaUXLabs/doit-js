const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 200);   // 곡선 시작 위치
ctx.quadraticCurveTo(200, 50, 350, 200);
// .quadraticCurveTo(조절점의 x좌표(cpx), 조절점의 y좌표(cpy), 곡선끝점의 x좌표,곡선끝점의 y좌표) 
// 시작 위치(50, 200)부터 (350, 200)까지 그린 직선에서
// cpx, cpy(200, 50)인 곡선 그리기
// cpx, cpy는 각 앵커의 핸들이 평형하게 연장되었을때 겹치는 x,y 위치임
ctx.stroke();