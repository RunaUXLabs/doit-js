const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
// 빨간반원두개
ctx.beginPath();
// ctx.arc(x위치, y위치, 반지름사이즈, 시작라디안, 끝라디안, 반시계방향여부)
// 라디안 = (Math.PI / 180) * 각도
// 원을 나타낼때의 라디안 Math.PI * 2
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true); // 반시계 방향
ctx.arc(280, 100, 50, 0, Math.PI, false); // 시계 방향
ctx.fill();

// 선으로된 세로반원
ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// 3시방향이 시작지점이지만 90으로 설정했으니 6시 출발, 시계방향으로 270으로 이동했으니 180만큼 그려짐(270만큼 그려라는 아님)
ctx.closePath();
ctx.stroke();

// 0도부터 60도까지 시계방향을 선으로 호 그리기
ctx.strokeStyle = "blue";
ctx.moveTo(200, 100); // 시작점의 위치이동
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// 기준점 200,100에서 Y만 100이동한 위치까지 반지름 50만큼을 시계방향으로 60도만큼만 선으로그림
ctx.stroke();

// 복습문제, 반지름 50짜리 반원그리기
ctx.beginPath();
ctx.arc(350, 200, 50, (Math.PI / 180) * 270, (Math.PI / 180) * 90, false);
ctx.closePath();
ctx.stroke();