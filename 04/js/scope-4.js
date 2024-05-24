// 전역변수 자유롭게 사용하는 법3
// 전역변수 선언하고 함수 안에서 재할당 하고 밖에서 부르는 형식으로 해도 되지만, 아예 처음부터 함수안에서 예약어를 뗀 상태로 선언하면 전역변수로 인식된다.
// function greeting() {
//   hi = "hello";   // 전역 변수로 인식  
// }
// greeting();
// console.log(hi); // 밖에서 찍어보라고 시키면 hi가 선언된것이 인정됨



function greeting() {
  // 예약어 없이 함수내에서 신규선언되었을 때 전역이라면, let은? 일부 선언예약어에 한정 된 것이 아니다. var let const 몽땅 해당된다
  // let hi = "hello";
  // const hi = "hello";
  // var hi = "hello";
  hi = "hello";   // 전역 변수로 인식  
}
// console.log(hi);
greeting(); // 함수 콜링해서 전역 선언하고 아래에서 확인
console.log(hi);