const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image(); //이미지 객체 선언
img.src = "images/bird.jpg";

//캔버스에 이미지 띄워라
img.onload = function () {
  ctx.drawImage(img, -50, -20);

  // 이미지 먼저 깔아놓고 도형을 이미지 함수 안에 복사해놓고 위치/크기 조정
  // 확정되면 지우고, 밖으로 빼내서 도형메서드 실행 후 클리핑선언
  // 확인용
  // ctx.beginPath();
  // ctx.arc(300, 200, 150, 0, Math.PI * 2, false);
  // ctx.fill();
};
// 밖으로 꺼낸 위의 도형 그려라
ctx.beginPath();
ctx.arc(300, 200, 150, 0, Math.PI * 2, false);

// let 원도형 = new Path2D(); // 객체선언시
// 원도형.arc(300, 200, 150, 0, Math.PI * 2);

// 클리핑해라
ctx.clip();
// ctx.clip(원도형); // 객체형으로 선언시