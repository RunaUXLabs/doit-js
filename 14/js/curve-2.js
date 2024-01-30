const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 100);
// 앵커 위치 (50, 100) -> (150, 100) -> (250, 100) ->(350, 100)
ctx.quadraticCurveTo(100, 50, 150, 100);
// .quadraticCurveTo(조절점의 x좌표(cpx), 조절점의 y좌표(cpy), 곡선끝점의 x좌표,곡선끝점의 y좌표) 
ctx.quadraticCurveTo(200, 150, 250, 100);
ctx.quadraticCurveTo(300, 50, 350, 100);
// 각 cpx, cpy를 가지고 조절점 잡아라 3군데

ctx.stroke(); // 선그려라