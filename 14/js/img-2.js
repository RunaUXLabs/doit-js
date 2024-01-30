const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = function () {
  // ctx.drawImage(이미지변수, 이미지x, 이미지y, 이미지w, 이미지h, 캔버스x, 캔버스y, 캔버스기준이미지w, 캔버스기준이미지h);
  // 캔버스기준이미지w, 캔버스기준이미지h 는 비율 확대/축소부분이니 배율만 잘 조정하면 찌그러지지 않은 상태로 사용할 수 있다.   
  ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
};
img.src = "images/cat.jpg";    