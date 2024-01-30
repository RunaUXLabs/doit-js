const canvas = document.querySelector("canvas");
const h1 = document.querySelector("h1");
const ctx = canvas.getContext("2d");
const 알파값 = 0.2;
// const 갯수 = prompt('그리고싶은 원의 갯수를 숫자로 써주세요');

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight - h1.offsetTop;  // 캔버스 높이

// 생성자함수선언, 쿠키틀
// function Circle(x위치, y위치, 반지름, 색상) {
//     this.x = x위치;
//     this.y = y위치;
//     this.radius = 반지름;
//     this.color = 색상;

//     // draw 메서드
//     this.그려라 = function () {
//         ctx.globalAlpha = 알파값;
//         ctx.beginPath();
//         ctx.fillStyle = this.color;
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         ctx.fill();
//     };
// }

// 클래스로변경 해보기
class Circle {
    constructor(x위치, y위치, 반지름, 색상) {
        this.x = x위치;
        this.y = y위치;
        this.radius = 반지름;
        this.color = 색상;
    }
    그려라 = function () {
        ctx.globalAlpha = 알파값;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    };
}
// 인스턴스 만들기
const 객체들 = []; // 인스턴스 저장소, 배열

// for (let i = 0; i < 갯수; i++) {
for (let i = 0; i < 50; i++) {
    const 반지름 = Math.floor(Math.random() * 100 + 5);
    // 최소값 5, 최대값 100으로 걸어둠(자율)
    // 사용자로부터 입력값을 받아서 적용되게 구성해도 좋다.
    const x위치 = Math.random() * (canvas.width - 반지름 * 2) + 반지름;
    const y위치 = Math.random() * (canvas.height - 반지름 * 2) + 반지름;
    // const x위치 = Math.random() * (canvas.width - 반지름 * 2);
    // const y위치 = Math.random() * (canvas.height - 반지름 * 2);
    /** 랜덤으로 x위치가 출력이 된다고 했을 때,
     *  캔버스를 벗어나면 원들이 보이지 않으므로 영역을 제한하는것이다.
     *  캔버스 가로값에서 원의 지름을 뺀 상태를 기준치로 놓고 랜덤함수에 곱하면된다.
     *  반지름을 더한이유는 반까지 잘리는부분 허용(캔버스의 끝 좌표 = 그려지는 원의 중심 좌표)
     **/
    const 색상 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    // 랜덤 rgb출력

    객체들.push(new Circle(x위치, y위치, 반지름, 색상));
    // 인스턴스 생성하여 배열에 추가
}
// console.log(객체들); // 출력확인

for (const 객체 of 객체들) 객체.그려라();
// 만들어라 따로돌리고, 그려라 따로 돌림
