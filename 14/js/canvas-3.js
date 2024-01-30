const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
// 2D객체를 생성하라는 명령을 변수에 선언    

// ctx.fillStyle = "rgb(200,0,0)";
// 해당변수에 프로퍼티연결, 빨강칠해라
ctx.fillStyle = "rgb(50,210,120)";
ctx.fillRect(10, 10, 50, 100);
// ctx.fillRect(100, 100, 24, 74);
// ctx.fillRect(100, 100, -24, -74);
// 해당변수에 메서드연결, 사각형을 그리기위한 두포인트(좌상단의 x,y 좌표값, 가로길이, 세로길이)
// 해당좌표값은 css의 position처럼 부모 기준으로부터 기준을 부여받아 상대적으로 커지거나 이동할수 있다.