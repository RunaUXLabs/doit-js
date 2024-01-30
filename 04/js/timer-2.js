let counter = 0;

let timer = setInterval(() => {
  console.log("안녕하세요?");
  counter++;
  if (counter === 5) clearInterval(timer);
}, 1000);

// clearInterval(타이머함수명)
// let 타이머함수명 = setInterval() 함수가 종료된다.