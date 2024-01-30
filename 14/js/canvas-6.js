const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 복습, 선에 색넣어라
ctx.strokeStyle = 'red';

ctx.beginPath(); // 경로를 시작합니다.
ctx.moveTo(50, 50); // 시작점을 (50,50) 위치로 이동시킵니다.
ctx.lineTo(150, 100); // 시작점에서 (150, 100)까지 경로를 만듭니다.
ctx.lineTo(50, 150);
// 이 지점을 설정을 해서 이점을 closePath()로 설정하면 닫힌도형을 만들기위해 빈 두면을 긋고, closePath()가 없다면 그냥 직선한개만 더 추가된다.
ctx.closePath(); // 경로를 닫습니다. (닫힌 도형)
ctx.stroke(); // 지금까지 만든 경로를 선으로 그립니다.


// 위에 그린건 그린거고(덮어쓰거나 날리지 않음) 그다음 시작점을 잡아 또그린다.
ctx.beginPath(); // 경로를 시작합니다.
ctx.moveTo(150, 100); // 시작점을 (150, 100) 위치로 이동시킵니다.
ctx.lineTo(250, 50); // 시작점에서 (250, 50)까지 직선을 만듭니다.
ctx.lineTo(250, 150);
// 이 지점을 설정을 해서 이점을 closePath()로 설정하면 닫힌도형을 만들기위해 빈 두면을 긋고, closePath()가 없다면 그냥 직선한개만 더 추가된다.
ctx.closePath(); // 경로를 닫습니다. (닫힌 도형)
ctx.strokeStyle = 'blue';
ctx.fillStyle = "rgb(0, 200, 0)"; // 채우기 색을 rgb(0,200,0)으로 지정합니다.
ctx.fill(); // 만들어진 (닫힌) 도형에 색을 채웁니다.
// 닫힌도형이 아니더라도 색은채워진다. 열린부분의 두 앵커의 최단거리를 막는 부분까지만 색이 찬다.

// 복습, 선도 그려라 추가
ctx.stroke();
