const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";

ctx.beginPath();
// ctx.arc(x위치, y위치, 반지름사이즈, 시작라디안, 끝라디안(원일경우 Math.PI * 2 가 고정, 반시계방향여부)
ctx.arc(200, 150, 100, 0, ((Math.PI / 180) * 30), false);
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath() // 시작이 곧 끝이라 생략해도 별차이 없음 
ctx.fill();
ctx.stroke();