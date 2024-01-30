// var의 지역스코프.
function sum(a, b) {
  var result = a + b;
  console.log(result); // 추가, 이건 함수스코프 범주 안이어서 실행하는데 문제가 없음.
  return result;
}
sum(10, 20); // 함수콜링

// 함수스코프 안에 선언이 되어있다면 반환을 하는게 아닌이상 밖으로 불러낼 수 없다. 영역제한.
// console.log(result); // Uncaught ReferenceError: result is not defined

// return(반환값)을 설정했을 때, 함수 안의 리턴값을 꺼내려면 변수를 묻는게 아니고, 함수를 콜링하면 뱉어주는게 return(반환값)이므로 함수로 꺼낸다.
console.log(sum(10, 20) + 20);

// 값만 궁금하면 굳이 return을 쓸 필요가 없음. 그 함수에 의해서 도출된 값을 2차계산(다른함수)에서 사용하려면 return이 필요하다.