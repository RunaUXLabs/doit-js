const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
// 그림그리는 환경 구성해서 ctx에 선언해놓은것 

let triangle = new Path2D();
// 인스턴스 신규객체 생성하여 삼각형변수에 할당
// => 객체선언을 했으므로 .beginPath(); 안해도 됨
// 객체의그림에 필요한 앵커의 위치및 조절점의 선언은 기존과 같다. 
triangle.moveTo(100, 100); // 시작점선언
triangle.lineTo(300, 100);
triangle.lineTo(200, 260); // 앵커위치 찍기
triangle.closePath(); // 11번 앵커를 기준으로 알아서 폐합

let circle = new Path2D();
// 인스턴스 신규객체 생성하여 원변수에 할당
// => 객체선언을 했으므로 .beginPath(); 안해도 됨
circle.arc(200, 155, 50, 0, Math.PI * 2);
// 기준점 200, 155에서 반지름 50짜리 정원

// 각 객체에 대한 위치값 옵션 설정이 끝나면
// .그려라(객체명), .채워라(객체명) 라는 명령어는 ctx에 한다.
ctx.fillStyle = "green";
ctx.fill(circle);
ctx.stroke(triangle);
