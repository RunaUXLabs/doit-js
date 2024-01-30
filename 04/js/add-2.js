
function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
}
// // n은 매개변수=파라미터
calcSum(5);
// calcSum(35143135);

// const number = parseInt(prompt("1부터 얼마까지 더해드릴까요?"));
// calcSum(number);
// // number는 사용자가 입력한 값, 이것을 함수의 인수=인자로 넣고있다. 함수는 이 인수를 받아서 n에 대입하여 계산을 돌린다.


// function sum(a, b) { // a, b는 파라미터 또는 매개변수라고 불림
//   let result = a + b;
//   console.log(`두 수의 합: ${result}`);
// }
// sum(100, 54645846); //54645946 // 100, 54645846는 인수, 인자라고 불림
// sum(100);// NaN
// sum();// NaN