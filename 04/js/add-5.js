(function (a, b) {
  let sum = a + b;
  console.log(`함수 실행 결과 : ${sum}`);
})(100, 200);
// 즉시실행함수, 이름을 붙일 필요없이 선언하고 바로실행, 재콜링 안됨

// 선언식 함수
function add(a, b) {
  let sum = a + b;
  console.log(`함수 실행 결과 : ${sum}`);
}
// 함수의 기본형, 콜링하지 않으면 실행안함
add(100, 200);
// 콜링이란 ()이다
add; // 아무일도 안일어남