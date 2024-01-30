fruits = ["a", "b", "g"];
console.log(fruits);
console.log(...fruits);
//전개구문, 값만 쏙 뽑아서 출력


function addNum(a, b) {
  return a + b;
}
console.log(addNum(1, 3)); //4 
console.log(addNum(1, 3, 5, 7)); //4


// 전개구문을 파라미터에 사용하면, 파라미터의 갯수와는 상관없이 유연한 계산을 해준다.
// ...배열명 == 값,값,값, ...
// 대괄호를 뗀 배열을 파라미터에 넣는느낌, 배열의 요소 갯수만큼 파라미터로 들어감, 전개구문이 파라미터로 들어오면 배열이 문자화가 된것으로 끝나는것이 아니라 배열로써 활용할 수 있는 수식은 다 사용가능
function addNum2(...numbers) {
  let sum = 0;
  for (let number of numbers) sum += number;
  return sum;
}
console.log(addNum2(1, 3)); //4
console.log(addNum2(1, 3, 5, 7)); //16


const arr = [1, 3, 7, 53, 43, 18, 9, 11, 13, 15, 17, 19, 1, 2, 50, 100, 6, 4];
console.log(addNum2(arr)); // 스트링으로 그냥 찍힘
console.log(addNum2(...arr)); // 인자에 전개구문형식으로 콜링하기

function multipleNum3(...numbers) {
  let sum = 1;
  for (let number of numbers) sum *= number;
  // 곱하기, 나누기에서 0이 개입되지 않도록 조심하자
  return sum;
}
console.log(multipleNum3(...arr));