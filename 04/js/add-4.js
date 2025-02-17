// 선언식 함수
// function 함수명(파라미터들){
//   실행문 또는 반환문
// }
// 함수명(인자들)


// 변수에 할당해서 쓰는 익명함수
let sum = function (a, b) {
  return a + b;
};
console.log(`${sum}`); // 익명함수 자체가 찍힘
console.log(`${sum()}`); // 인자 없어서 NaN
// 콜링할 땐 변수명(인자들)
console.log(`함수 실행 결과 : ${sum(10, 20)}`);


// 익명함수를 만들어보자! 변수명, 파라미터, 실행문, 반환문 모두 자유롭게 변형해보고 콜링해보자

let 변수 = function (a, b, c) {
  return a * 3 + b / c;
};
console.log(변수(5, 9, 15));