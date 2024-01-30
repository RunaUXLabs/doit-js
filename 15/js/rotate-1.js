const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 회색 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);

// 그리기준비객체.rotate(라디언값)
ctx.rotate(45 * Math.PI / 180); // 캔버스 0,0기준으로 45도 회전
ctx.strokeRect(150, 150, 100, 100);
// 그려라 명령, 해당객체가 도는게 아니고 새로그려짐