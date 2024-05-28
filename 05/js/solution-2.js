const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const button = document.querySelector("button");
let result = document.querySelector("#result");
function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}
let gcdHandler = () => {
  // 응용답
  const Int_number1 = parseInt(number1.value);
  const Int_number2 = parseInt(number2.value);
  /**
   * parseInt()를 거친 값이 숫자가 아니라면 NaN이나오지만,
   * 이를 typeof()로 물어보면 무조건 number로 나온다.
  
   * NaN값은 falsy이므로 false로 취급됨. 조건문에는 true값만 넣을 수 있다.
   * if (변수 !== NaN) {}은 쓸수 있지만, 반대 경우를 판별해 낼 수 없다.
   * isNaN()은 어떤 값이 NaN인지 판별가능. 주어진 값이 NaN이면 true, 아니면 false.
   */
  if (isNaN(Int_number1)) {
    // 첫번째 입력에서 NaN이 들어온경우
    if (number1.value == "") {
      // 공백일경우
      result.innerText = '첫번째 값을 입력하세요.';
      number1.focus();
      return false;
    }
    if (number1.value.length > 0) {
      // 문자열일경우
      result.innerText = '문자는 계산이 되질 않습니다. 첫번째 값을 다시 입력하세요';
      number1.value = "";
      number1.focus();
      return false;
    }
  }
  if (isNaN(Int_number2)) {
    // 두번째 입력에서 NaN이 들어온경우
    if (number2.value == "") {
      // 공백일경우
      result.innerText = '두번째 값을 입력하세요.';
      return false;
    }
    if (number2.value.length > 0) {
      // 문자열일경우
      result.innerText = '문자는 계산이 되질 않습니다. 두번째 값을 다시 입력하세요';
      number2.value = "";
      number2.focus();
      return false;
    }
  }
  if (!isNaN(Int_number1) && !isNaN(Int_number2)) {
    // 양쪽 입력이 숫자일 경우에만 실행
    result.innerText = getGCD(number1.value, number2.value);
  }
};
// button.onclick = function (e) {
// 버튼에 대한 기본기능 막기
// e.preventDefault()
// 기존 답
// result.innerText = getGCD(number1.value, number2.value);
// };
button.addEventListener('click', gcdHandler);
document.gcdCheck.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') gcdHandler();
})


