// 함수가 다른함수의 인자로 쓰인다는 말은 해당 함수의 return값이 다른함수에게 전달 된다는 뜻이다.
function hello() {
  return "안녕하세요?";
  // console.log("안녕하세요?"); // 실행문
}
function bye() {
  return "안녕히 가세요.";
  // console.log("안녕히 가세요."); // 실행문
}

function userCheck(name, fn) {
  console.log(`${name}님`, fn());
  // 파라미터 2개를 받아서 name은 변수로, fn은 함수로 실행해라 
}

userCheck("홍길동", hello);
// 올바르게 리턴을 받으면 홍길동님, 안녕하세요?가 찍힘.
// 리턴이 없는 함수를 인자로 받으면 함수로 인지를 못해서 undefined로 뜨고, 해당 함수 안에있는 실행문은 걍 실행함.
// 홍길동님 undefined와 안녕히 가세요. 가 순차적으로 실행되는 것이다.
userCheck("도레미", bye);  // 도레미님, 안녕히 가세요.