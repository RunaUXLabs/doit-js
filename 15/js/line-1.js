const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const lineCap = ['butt', 'round', 'square'];
// 선 끝에 캡을 씌울 수 있는데 원과 사각형이 가능하다. 이들의 크기는 선 너비의 반을 반지름으로 하는 범위가 최대이다.
ctx.strokeStyle = '#222';

// for (let i = 0; i < lineCap.length; i++) {
//   ctx.lineWidth = 15; // 선두께 선언
//   ctx.lineCap = lineCap[i]; // 캡종류선언
//   // 그림준비변수.lineCap = 'butt'
//   // 그림준비변수.lineCap = 'round'
//   // 그림준비변수.lineCap = 'square'

//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);    // 시작 위치
//   ctx.lineTo(350, 50 + i * 30);   // 끝 위치
//   ctx.stroke(); // 선 그려라
// }

// for...of로 변경, index를 알 수 없다
// 배열은 for...of로 돌리지만, 수식을 짜는데 원하는것을 받아 올 수 없다면 다른 제어문을 쓰려고 해야한다.
// for (const (cap, index) of lineCap) {
// for (const cap of lineCap) {
//   ctx.lineWidth = 15;
//   ctx.lineCap = cap;
//   // ctx.beginPath();
//   // ctx.moveTo(50, 50 + index * 30);

//   // ctx.lineTo(350, 50 + index * 30);
//   // ctx.stroke();
// }

// lineCap.forEach((cap, index) => {
//   ctx.lineWidth = 15;
//   ctx.lineCap = cap;
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + index * 30);

//   ctx.lineTo(350, 50 + index * 30);
//   ctx.stroke();
// });

for (const index in lineCap) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[index]; // 객체의 인덱스 번호 접근으로 값추출하여 속성값을 넣는다.
  ctx.beginPath();
  ctx.moveTo(50, 50 + index * 30);
  ctx.lineTo(350, 50 + index * 30);
  ctx.stroke();
}

// 누칼협으로 for...of를 써야한다면
// const elements = lineCap.entries();
// console.log(elements);
// for (const [index, value] of elements) {
//   ctx.lineWidth = 20;
//   ctx.lineCap = value;
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + index * 30);
//   ctx.lineTo(350, 50 + index * 30);
//   ctx.stroke();
// }
