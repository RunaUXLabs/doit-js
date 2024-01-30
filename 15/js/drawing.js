const 캔버스 = document.querySelector('#canvas');
const 툴바 = document.querySelector('#toolbar');

// 브라우저 창전체를 그림판으로 쓸꺼임, 세로는 툴바높이 뺌
캔버스.width = window.innerWidth;
캔버스.height = window.innerHeight - 툴바.offsetHeight;

// 화면 0,0에서 캔버스의 위치값계산
const 캔버스오프셋x = 캔버스.offsetLeft;
const 캔버스오프셋y = 캔버스.offsetTop;

// 그림그리기 준비상태 변수선언
const ctx = 캔버스.getContext('2d');
let 그리는상태 = false;
let 시작좌표x;
let 시작좌표y;
let 선두께 = 2;


// 툴바에서 옵션이 바뀌면
툴바.addEventListener('change', e => {
    // 색바꾸면
    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }
    // 선두께바꾸면
    if (e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
});
// 툴바에서 지우기라는 버튼을 클릭하면
툴바.addEventListener('click', e => {
    if (e.target.id === 'reset') {
        ctx.clearRect(0, 0, 캔버스.width, 캔버스.height);
    }
});


// 캔버스에 이벤트 적용하기
// 그림을 그리기시작한다 - 마우스 버튼을 누르면서 시작
캔버스.addEventListener('mousedown', e => {
    // 마우스를 누르면 그림 시작을 알리고
    그리는상태 = true;
    // 이벤트가 일어난 마우스의 좌표를 받아서 시작좌표에 할당
    시작좌표x = e.clientX;
    시작좌표y = e.clientY;
});

// 그림을 그린다 - 마우스를 움직인다
캔버스.addEventListener('mousemove', (e) => {
    // 그리는 상태가 아니라면 리턴을 반환, 리턴 밑으로는 다 비활성화 이므로 그림그려라 라는 명령어들이 작동을 안하게 되는것이다.
    if (!그리는상태) return; //그리는 상태 true/false확인

    // 그림 스타일 설정 
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    // 그리는 상태라면
    // 이벤트 일어날때마다 다음앵커의 위치값 받아오는데, y는 툴바뺀값을 받아와라
    ctx.lineTo(e.clientX, e.clientY - 캔버스오프셋y);
    ctx.stroke(); // 선그려라
});

// 그리기를 끝낸다 - 마우스버튼에 손을 뗀다
캔버스.addEventListener('mouseup', () => {
    // 안그리는 상태로 돌려놓고
    그리는상태 = false;
    // 새그림을 그릴수 있도록 시작점 준비, mousemove에 의해서 그려지는 그림의 객체를 분리시켜서 새로운 그려라 객체의 시작을 적어놓아야 관계가 끊어진다.
    ctx.beginPath();
});