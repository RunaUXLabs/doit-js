const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,0,0)";   // 채우기 색 - 빨강
// // 채우기 색 - 빨강, 색상에 관련된 모든선언 가능(rgb, rgba, hex, 색상단어 etc )
// ctx.storkeStyle = "black";         // 선 색 - 검정
ctx.strokeStyle = "rgb(200,0,0)";

// // 사각형메서드(x좌표, y좌표, 가로길이, 세로길이)
ctx.fillRect(10, 10, 200, 100);
// 빨간색으로 채운 사각형, 면 색선언을 하지 않으면 기본값 블랙으로 채움
ctx.strokeRect(100, 100, 200, 100);
// 선으로 그린 사각형, 선 색선언하지 않으면 검은선사각형이 됨 

// ctx.fillStyle = "blue";
ctx.fillStyle = "rgba(15,82,186, 0.4)"; //퀴즈, 반투명 파랑으로 바꿔라
ctx.fillRect(70, 70, 120, 100);

ctx.clearRect(70, 80, 80, 45);
// 해당 범주에 걸리는 모든것 삭제, 싹 비움. 캔버스 색 따라감
// 그림판의 지우개 생각하면 쉽다