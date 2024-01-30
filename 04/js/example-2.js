// // 선언함수부터 생각하기
// function multiple(a, b) {
//     return a * b;
// }

// // 기본형태의 익명함수
// let multiple = function(a, b){
//     return a * b;
// }

// // 화살표 함수 1단계
// let multiple = (a, b) => { return a * b; }

// return만 있는 단순형태의 익명함수는
// function, {} , return 생략가능,  => 삽입

// 화살표 함수 2단계 더줄이기
let multiple = (a, b) => a * b;


console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}입니다.`);
console.log(`두 수를 곱한 결과는 ${multiple(552, 54654)}입니다.`);