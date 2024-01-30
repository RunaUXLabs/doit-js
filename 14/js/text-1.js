const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
// 변수.font = '굵기 글씨크기 폰트명 스타일' 
ctx.font = "60px Arial";
// ctx.font = "bold 60px 궁서";
// ctx.font = "italic 60px 궁서 sans-serif";
// 뒤쪽 폰트명 쓸때, 내 컴퓨터에 설치된 한글인식 폰트파일명을 작성해야 한글에 적용된다. 영문은 기본값이라 웬만하면 다 됨.

// 복습, 글자색은 노랑
ctx.fillStyle = 'yellow';
ctx.fillText("점심", 50, 70);
// ctx.fillText("HELLO", 50, 70);
// 채우기 글씨도형
// .fillText('내용', x좌표, y좌표)

// 복습, 테두리는 빨강
ctx.strokeStyle = 'red';
// ctx.strokeText("진지한", 50, 150);
ctx.strokeText("진지한 궁서체", 50, 150, 100);
// 선 글씨도형
// .strokeText('내용', x좌표, y좌표)