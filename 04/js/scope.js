function addSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }  
  return sum;
}

// 변수에는 전역과 지역이 있다.
// var로 선언된 변수는 유효범위 함수스코프function(){} 안에서이다.

// let, const로 선언한 변수도 전역과 지역이 있다.
// 하지만 이들은 var보다 더 엄격한 소규로 유효범위가 설정된다. 블록스코프{}.


var num = 3;
let num3 = 10;
const num4 = 0;
//밖에 있으면 전역

console.log(`1부터 ${num}까지 더하면 : ${addSum(num)}`);  
{
  let num2 = 5;
  // 스코프 안에 있으면 지역, let, const는 유효범위 제한
  // var는 상관없음
}