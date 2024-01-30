const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 데스티네이션-먼저그려짐
ctx.font = "bold 300px sans-serif";
ctx.fillText("DOG", 100, 320);

//소스-나중에그려짐
let img = new Image(); // 이미지객체선언
img.src = "images/text-bg.jpg";
img.onload = function () {
  ctx.drawImage(img, 0, 0); // 원본사이즈 삽입
  // ctx.drawImage(img, 0, 0, canvas.width, canvas.height) // 캔버스사이즈만큼 조절해서 삽입
};

ctx.globalCompositeOperation = "source-in";
// ctx.globalCompositeOperation = "darken";
// 데스티네이션과 소스가 겹친부분에서 소스가 위로 올라가고 나머지는 투명처리