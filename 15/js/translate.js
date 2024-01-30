const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100); //1번그림, 사각형 만들어서 칠해라

ctx.save();    // 1번그림, 캔버스 드로잉 상태 저장(계속떠있음)

ctx.translate(150, 150);
// 객체를 이동하는것이 아니라, 캔버스의 원점을 이동
ctx.fillStyle = "#000";
ctx.fillRect(10, 10, 100, 100);
// 이동한 캔버스위치에서 검은색 상자 그림, 2번그림 

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 80, 20); // 이동한 캔버스위치에서 빨간색 상자 그림, 3번그림

ctx.restore();
// // 0,0에서 150,150으로이동한 캔버스가 다시 0,0으로 이동

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 80, 20); // 빨간상자 그려봐라, 4번그림

// 지우라는 명령어는 없으니 그림은 계속 누적된다. 캔버스의 기준점만 이동되며 계속 그려지고있다.