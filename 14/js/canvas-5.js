const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
// 도형의 시작점을 표시, 폐합도형으로 만들면 closePath()를 쓰지 않아도 됨. 열린도형이라면 closePath()가 필수.
ctx.moveTo(0, 0); // 필수!! 시작점 표시부분에서 선그리기 시작한다는 표시
ctx.lineTo(200, 200); // 도착지점표시, 시작점에서부터 해당지점까지 직선경로를 만들어주나, 보여주진않음.
ctx.stroke(); // 시작점, 도착점 알지? 그려!

// 기존소스
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

// 문제 (350,50) -> (200,200),빨강직선그리기
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(350, 50);
ctx.lineTo(200, 200);
ctx.stroke();

// 다른문제 (17,67) -> (157,24),반투명한 핑크직선그리기
ctx.strokeStyle = 'rgba(255,139,148, 0.5)';
ctx.beginPath();
ctx.moveTo(17, 67);
ctx.lineTo(157, 24);
ctx.stroke();