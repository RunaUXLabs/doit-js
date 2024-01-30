function displayA() {
  console.log("A");
}
function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 2000);
}
function displayC() {
  console.log("C");
}
displayA();
displayB(displayC);
// 함수B가 끝나고 나면 C가 실행되게 한다. C는 B의 콜백함수로 돌아간다.
// 함수C는 외부로 빼놨고, B를 선언할 때 익명함수 들어올수있게 짜놓는게 포인트.
// 함수B를 만들당시에 C자체를 넣어서 만들면 효율이 없음

// displayB(displayC(함수D(함수F())))
