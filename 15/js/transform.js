const 캔버스 = document.querySelector('canvas');
const ctx = 캔버스.getContext('2d');
const 버튼 = document.querySelector('button');
const 원점좌표 = { x: 200, y: 200 }; // 객체로선언
const 알파값 = 0.6;
const 각도 = 10;

// 기본객체
ctx.fillStyle = '#ccc';
// ctx.fillRect(200, 200, 100, 100)
ctx.fillRect(원점좌표.x, 원점좌표.y, 100, 100);

// 버튼을 클릭할때마다 이벤트발생
버튼.addEventListener('click', () => {
    // 알파값 적용(변수처리)
    ctx.globalAlpha = 알파값;

    ctx.translate(원점좌표.x, 원점좌표.y); // 원점이동
    ctx.rotate(Math.PI / 180 * 각도); // 30도돌아라, 라디언값
    ctx.fillStyle = 랜덤컬러(); // 색상선언, 변수처리
    ctx.fillRect(0, 0, 100, 100); // 이동한원점기준으로 채운네모그려라
    ctx.translate(-원점좌표.x, -원점좌표.y); // 원점복귀
    // 좌표값 이동과 복귀가 왜 필요한가?
    // 바로보는 사각형을 그려서 돌리는게 배치에 편하기 때문, 틀어진상태로 계속 그리게 되면 사각형의 앵커위치가 패턴화가 안된다
});
// 랜덤색상만들어서 변수처리하기
let 랜덤컬러 = () => {
    // 0~ 255.999999로 나오는 랜덤숫자가 정수변환
    let 빨 = Math.floor(Math.random() * 256);
    let 녹 = Math.floor(Math.random() * 256);
    let 파 = Math.floor(Math.random() * 256);
    return `rgb(${빨},${녹},${파})`;
}

