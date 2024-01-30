const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let cat = new Image(); // 객체선언
cat.src = "images/cat.jpg";
cat.onload = function () {
  ctx.drawImage(cat, 0, 0, canvas.width, canvas.height);
  // 위치테스트
  // let 타원 = new Path2D();
  // 타원.ellipse(260, 210, 130, 180, 0, 0, 2 * Math.PI);
  // ctx.fill(타원);
};

// ctx.beginPath()
// ctx.ellipse(250, 200, 160, 200, 0, 0, 2 * Math.PI)
// ctx.clip()

let 타원 = new Path2D();
타원.ellipse(260, 210, 130, 180, 0, 0, 2 * Math.PI);
ctx.clip(타원);