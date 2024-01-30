const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// .createLinearGradient(시작점x, 시작점y, 끝점x, 끝점y) 객체에 대한 정보필요
let linGrad = ctx.createLinearGradient(0, 0, 0, 200); // 방향값을 정할 수 있음

// 정해진 객체에 컬러를 꽂아넣어야하는데 2개이상을 지정한다 
// 객체.addColorStop(위치(from 0 ~ to 1), "색상값")
linGrad.addColorStop(0, "#000");       // 시작 위치
linGrad.addColorStop(0.6, "red");      // 0.6 위치
linGrad.addColorStop(1, "blue");       // 끝나는위치
// 각 위치를 지정하면서 끝나는 위치 1이 있어야 하느냐하고 한다면 필수는 아님. 두번째 값이후에 새로운 컬러지정이 없으면 그 색으로 쭉!

// 칠해라(선, 면 둘다 적용됨) 명령 있어야 함
// 칠부분
// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// 선부분
ctx.strokeStyle = linGrad;
ctx.lineWidth = 10;
ctx.strokeRect(0, 0, 100, 200);