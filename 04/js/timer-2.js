// 원하는 횟수 이후에 멈춤 만들기
// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요?");
//   // counter++;
//   // if (counter === 5) clearInterval(timer);
// }, 1000);
// timer()형식으로 콜링할 필요없이 자동실행

// clearInterval(타이머함수명)
// let 타이머함수명 = setInterval() 함수가 종료된다.





// 응용) 사용자의 행동(이벤트)에 의해 멈추게 만들기
let timer2 = setInterval(() => {
  console.log("안녕?🤗");
}, 500);
// timer2()형식으로 콜링할 필요없이 자동실행

// *주의구간*
// // let stopGreeting = clearInterval(timer2); // 선언금지
// // bt.addEventListener('click', stopGreeting);
// // 버튼이벤트랑 별개로 stopGreeting을 선언하면 시작과 동시에 멈추게 됨
// *주의구간끝*

// let bt = document.querySelector("#bt"); // 생략가능
bt.addEventListener('click', () => {
  clearInterval(timer2);
});

// 주의점
// clearInterval(타이머함수명)을 이벤트에 의해서 작성할 때는 콜백안에서 콜링해야한다.
// bt.addEventListener('click', clearInterval(타이머함수명))는 동작하지 않는다. clearInterval()이 이미 실행되버려서 타이머함수가 시작과 동시에 멈췄기 때문이다.
