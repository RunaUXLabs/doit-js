const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");


// ctx.ellipse(x위치, y위치, 타원가로반지름, 타원세로반지름, 타원의회전크기라디안, 타원시작라디안, 타원끝라디안, 반시계방향여부)
// 라디안 = (Math.PI / 180) * 각도
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// 타원의 중심점 위치 200, 70
// 타원의 가로반지름 80, 세로반지름 50
// 회전크기 0 누워있음
// 타원의 시작 0과 끝 라디안 Math.PI * 2라 원으로 되어있으니 폐합
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
// ctx.ellipse(150, 200, 50, 50, (Math.PI / 180) * -30, 0, Math.PI * 2); // 정원가능
ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// 타원의 중심점 위치 150, 200
// 타원의 가로반지름 80, 세로반지름 50
// 회전크기 반시계방향으로 30도회전
// 타원의 시작 0과 끝 라디안 Math.PI * 2라 원으로 되어있으니 폐합
ctx.stroke();