const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";

ctx.font = "italic 60px serif";
ctx.fillText("Javascript", 50, 70);
ctx.strokeText("Javascript", 50, 70);
ctx.font = "bold 60px sans-serif";
ctx.fillText("Javascript", 50, 150);
ctx.strokeText("Javascript", 50, 150);

// 해상도 떨어지니까, 일러에서 작업하고 svg로 저장해서 웹에 이미지나 svg파일 자체를 불러오는 식으로 사용하는것이 가장 선호도가 좋다.