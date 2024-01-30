const 캔버스 = document.querySelector('canvas')
const ctx = 캔버스.getContext('2d')

// 스케일은 다그리고 한방에
ctx.scale(1, 0.7)

// 얼굴
let 개구리얼굴 = new Path2D();
개구리얼굴.arc(150, 150, 80, 0, Math.PI * 2)
ctx.fillStyle = 'green'
ctx.fill(개구리얼굴)

// 눈
let 왼쪽눈 = new Path2D();
왼쪽눈.arc(120, 80, 20, 0, Math.PI * 2)
왼쪽눈.moveTo(200,80) // 기준점이동
let 오른쪽눈 = new Path2D();
오른쪽눈.arc(180, 80, 20, 0, Math.PI * 2)
ctx.fillStyle = '#fff'
ctx.strokeStyle = 'green'
ctx.fill(왼쪽눈)
ctx.stroke(왼쪽눈)
ctx.fill(오른쪽눈)
ctx.stroke(오른쪽눈)
// 스크립트에서는 메서드체이닝이 되지만, 캔버스에서는 안된다. 그 아래로 다 안읽힘

// 눈동자
let 왼쪽눈동자 = new Path2D();
왼쪽눈동자.arc(120, 80, 5, 0, Math.PI * 2)
왼쪽눈동자.moveTo(200, 80) // 기준점이동
let 오른쪽눈동자 = new Path2D();
오른쪽눈동자.arc(180, 80, 5, 0, Math.PI * 2)
ctx.fillStyle = '#000'
ctx.fill(왼쪽눈동자)
ctx.fill(오른쪽눈동자)

// 입
let 입 = new Path2D();
입.arc(150, 150, 50, 0, Math.PI/180*180, false);
ctx.strokeStyle = '#000'
ctx.lineWidth = 3; // 선굵기
ctx.stroke(입)

// ctx라는 전역변수에 선과 면의 색상 프로퍼티가 계속 뒤집어 씌워져 갱신되는 개념으로 적용중임, 색상 적용할 때 매번 선언해서 적용시켜야한다.

