const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// 원의 세로 길이를 축소해서 타원으로 그리기
ctx.strokeStyle = "blue";
ctx.scale(1, 0.7);
// 스케일을 이용하여 1:0.7비율로 찌그러뜨림, 아래로 영향력을 미친다
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.stroke();

// 다시 스케일을 적용하면 펴지지 않을까?
// ctx.scale(1, 1.3);
// // 상위에 선언된 스케일이 제거되진 않고 중첩으로 적용된다.
// // 1:0.7비율로 찌그러 진 상태에서 복구는 되나, 기준 위치가 변경되어 1.3배 커짐
// // 스케일 가지고 타원만들려고 시도하지 않는게 정신건강에 좋다.
// // 어렵지만 ellipse()를 이용하여 개별 타원을 그려라.

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, false);
ctx.stroke();
// ctx.closePath() // 여부 상관없음

// ctx.scale(1, 0.7); // 밑에 선언하면 아무일도 일어나지 않음