// var의 전역스코프.
var hi = "hello";

function greeting() {
  console.log(hi);
}
// 함수밖에 var로 선언된 변수는 함수안에서 호출해도 참조하는데 문제가 전혀 없다. 이를 전역변수 라고 한다.
greeting();