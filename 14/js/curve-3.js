const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 100);   // 곡선 시작 위치
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// .bezierCurveTo(조절점1의 x좌표(cp1x), 조절점1의 y좌표(cp1y), 조절점2의 x좌표(cp2x), 조절점2의 y좌표(cp2y), 곡선끝점의 x좌표, 곡선끝점의 y좌표)
// 2차베지에곡선은 .quadraticCurveTo(파라미터4개)
// 3차베지에곡선은 .bezierCurveTo(파라미터6개)

// 곡선의 시작점 (50, 100), 끝점 (350, 100)
// 첫번째 cpx,cpy (90, 250)
// 두번째 cpx,cpy (310, 10)
// 일러스트레이터 또는 피그마 등 벡터드로잉을 제공하는 프로그램에서 좌표값 x,y의 위치값을 보고 그대로 옮기면 그림을 쉽게 표현할 수 있다.
ctx.strokeStyle = "green";
ctx.stroke();