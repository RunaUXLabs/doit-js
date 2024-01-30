const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
// 객체선언
// let 변수명 = ctx.createRadialGradient(원1x좌표, 원1y좌표, 원1반지름, 원2x좌표, 원2y좌표, 원2반지름) 원 2개의 정보가 필요함
let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);

// 색상지정, linergradient와 같다.
// 객체.addColorStop(위치(from 0 ~ to 1), "색상값")
radGrad.addColorStop(0, "#fff");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2)
// 이원을 기준으로 칠해짐
ctx.fill();


// 구를 표현하는것에서는 선에 채워라라고 해도 입체의 느낌은 안난다.
// ctx.strokeStyle = radGrad
// ctx.arc(100, 100, 80, 0, Math.PI * 2)
// 이원을 기준으로 그려짐
// ctx.stroke();