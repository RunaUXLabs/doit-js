// 전역변수 자유롭게 사용하는 법2
var hi = "hello";   // 전역 변수 선언
// hi = "hello";   // 전역 변수 선언
// var hi;
function change() {
  // hi = "bye";  // 재할당, 함수 안에서 전역 변수 수정 가능

  var hi = "bye"; // 신규선언
  // 변수의 값을 재할당 하려면 예약어를 떼야 함. 그러나 붙여서 재할당을 시도하면? 밖의 hi와 함수 안의 hi는 동명이인임.

  // return hi;
}
console.log(hi); // 처음 선언한 hello가 찍힌다
change(); // 함수콜링하여 실행했고, 안에서 변수가 바뀜
console.log(hi);
// change함수에서 재할당을 하면, 2번라인에 선언된 전역변수의 값을 바꾼걸(영향력 미침) 부르는 개념
// change함수에서 신규선언을 하면 동명이인의 개념으로 생각하고, 2번라인의 변수와 8번 라인의 변수는 별개.change가 콜링이 되면 걍 새로운 hi가 탄생했을 뿐, 2번 라인의 hi에 영향을 미치는 것이 아님.

// console.log(change());
// 신규선언한 bye를 꺼내고 싶다면, 함수내에서 return을 활용한다.

// 연습!
// 함수를 하나 임의로 만들어 전역변수의 영향범위 확인하기. 재할당, 재선언에 대해서 이해했지는 확인해보자.