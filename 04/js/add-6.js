// 선언식 함수를 변수에 할당, 굳이?
var add = function add() {
  return `실행문`;
};
// var의 호이스팅에서 변수는 인지는 하고 undefined, 함수는 제대로 인지됨(콜링먼저 하고 선언해도 문제없이 실행됨)


// let sum = function (a, b) {
//   let result = a + b; //실행문
//   return result;
// };



//익명함수의 기본형
// let hi = function () {
//   return `안녕하세요`;
// };

// function을 제거하고 ()와 {}사이에 => 를 넣는다
// let hi = () => {return `안녕하세요`}

// 함수가 간단한 형식, return만 있다면, return도 생략, {} 생략
let hi = () => `안녕하세요`;

console.log(hi);
console.log(hi());
// 익명함수를 콜링할 땐 무조건 () 붙이자!



// 매개변수가 1개인 화살표 함수는 ()생략 가능
// let hi2 = function(user){
//   console.log(`${user}님 안녕`)
// }
// let hi2 = user => console.log(`${user}님 안녕`);
// let hi2 = (user) => console.log(`${user}님 안녕`);
// hi2('바보');

// 매개변수가 2개이상이면 걍씀
// let sum = function(a,b){
//   return a+b
// }
// let sum = (a, b) => a + b;
// console.log(`${sum(10, 20)}계산`);


// let sum = function (a, b) {
//   let sum = '계산';
//   console.log(`${sum}해주세요`);
//   return a + b;
// };
let sum = (a, b) => {
  let sum = '계산';
  console.log(`${sum}해주세요`);
  return a + b;
};
console.log(`${sum(10, 20)}계산`);
// 축약형으로 작성하는 부분에서 무조건 가능한 케이스만 알아두고, 나머지는 function 떼고 화살표를 넣는데에만 의의를 두는게 낫다