const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const lineJoin = ['bevel', 'miter', 'round'];

ctx.strokeStyle = '#222';
ctx.miterLimit = 50; // 관절잘리부분 크기 기본값은 10인데, 숫자를 늘리거나 줄여도 시각적으로 크게 차이가 안난다.
// for (let i = 0; i < lineJoin.length; i++) {
//   ctx.lineWidth = 20;
//   ctx.lineJoin = lineJoin[i];
//   // ctx.lineJoin = 'bevel'; // 모따기
//   // ctx.lineJoin = 'miter'; // 직각연결형태
//   // ctx.lineJoin = 'round'; // 굴림

//   ctx.beginPath();
//   ctx.moveTo(60, 60 * i + 50);    // 시작 위치
//   ctx.lineTo(100, 60 * i + 15);   // 교차하는 위치
//   ctx.lineTo(140, 60 * i + 50);   // 끝 위치
//   ctx.stroke();
// }

// index를 받아야 하므로 for...in으로 변경
for (const index in lineJoin) {
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[index];

  ctx.beginPath();
  ctx.moveTo(60, 60 * index + 50);
  ctx.lineTo(100, 60 * index + 15);
  ctx.lineTo(140, 60 * index + 50);
  ctx.stroke();
}