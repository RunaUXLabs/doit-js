const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image(); // 이미지객체 선언
img.src = "images/cat.jpg";
// 이미지객체의 경로 프로퍼티

// onload이벤트 함수와 함께 .drawImage()실행
img.onload = function () {
  // 그림준비상태변수.drawImage(이미지객체, x좌표, y좌표)
  // ctx.drawImage(img, 100, 100);
  // 0,0 기준점에서 x, y만큼 떨어진 위치에서 객체 표시
  // 사이즈에 대한 선언이 없으면 원본 그대로 출력

  // 그림준비상태변수.drawImage(이미지객체, x좌표, y좌표, 그림가로사이즈, 그림세로사이즈)
  // ctx.drawImage(img, 0, 0, 100, 100);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  // html태그에서 이미지 사이즈 가로세로 적용했을때 이미지 비율상관없이 적용되는 느낌과 같다
};
