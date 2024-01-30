let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");

// destination
ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

// ctx.globalCompositeOperation = "source-atop";
// ctx.globalCompositeOperation = "destination-atop";
// destination또는source-over/in/out/atop

// destination데스티네이션은 먼저 그린도형
// source소스는 나중에 그린도형
// 일러스트레이터에서 쉐이프모델링에서 나올수 있는 효과를 유추하면 적용하기 쉽다.

ctx.globalCompositeOperation = "xor";
// lighter, darken, copy, xor
// 겹쳐지는 효과에서 색상차 등을 유추해 볼 수있다.
// xor 속성일 때 짝수는 소멸, 홀수는 표현된다. 

// source
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(80, 120, 50, 0, Math.PI * 2);
ctx.fill();

// 객체 3개(홀수)개념으로 겹쳤을때 xor의 표현은?
// 일러스트레이터의 컴파운드패스랑 동일시 하면 된다.
// ctx.fillStyle = "blue";
// ctx.beginPath();
// ctx.arc(100, 120, 50, 0, Math.PI * 2);
// ctx.fill();