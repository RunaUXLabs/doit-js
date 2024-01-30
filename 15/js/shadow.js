const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 그림자는 따로 그려라라는 명령어가 있는게 아니고, 프로퍼티를 쓰면 바로 적용
// ctx.shadowColor = "#ccc";
ctx.shadowColor = "rgba(0,0,0,0.3)";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 20;
// 그림자의 오프셋값은 그림자를 담은 상자의 좌상단 좌표
ctx.shadowBlur = 20;

let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2);
ctx.fill();