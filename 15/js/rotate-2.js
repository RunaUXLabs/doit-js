const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 회색 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);

// 마름모 사각형
ctx.translate(150, 150); // 원점 이동
ctx.rotate(45 * Math.PI / 180); // 돌려라(선)

// 항상 .rotate()는 캔버스 0,0을 기준으로 돌려버리니 원하는 중심점에서 회전을 시킨객체를 그리려면 .translate()를 이용하여 원점이동후 돌리고 그리고 다시 .translate()원점 복귀해야한다.
ctx.strokeRect(0, 0, 100, 100); // 그려라1(후)
ctx.strokeRect(50, 50, 10, 10); // 그려라2(후)
ctx.translate(-150, -150); // 원점 복귀
// 이미 돌아있는 상태니까 다시 돌려놔야 다음그림에 영향을 미치지 않는다
ctx.strokeRect(50, 50, 10, 10); // 그려라3(후)