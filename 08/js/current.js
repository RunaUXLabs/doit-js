const displayDate = document.querySelector('#today');
const displayTime = document.querySelector('#clock');

// 책의 예제는 옛날방식
// Intl.DateTimeFormat() 생성자 활용해서 바로 요일까지 뽑아버림
// console.log(krDate.getFullYear())// 옛날 방식의 정보뜯는 방식, 인터내셔널 구문에서는 쓸 수 없음(할 수는 있지만 귀찮음) 

let clock = () => {
    const today = new Date();
    // 변수 = new Intl.DateTimeFormat('나라코드', {옵션}).format(date변수);
    let krDate = new Intl.DateTimeFormat('kr', { dateStyle: 'full' }).format(today);
    // console.log(krDate);
    let krTime = new Intl.DateTimeFormat('kr', { timeStyle: 'medium' }).format(today);
    // console.log(krTime);
    displayDate.textContent = krDate;
    displayTime.textContent = krTime;
};
// 1초마다 함수돌려 현재시간 확인
setInterval(clock, 1000);
