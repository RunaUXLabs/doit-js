function isPositive(n) {
  if (n > 0) {
    alert(`${n}은 양수입니다.`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다.`);
  } else {
    alert(`${n}은 0입니다.`);
  }
}

const number = prompt('숫자를 입력하세요.');
console.log(number)
const Int_number = parseInt(number);
/**
 * parseInt()를 거친 값이 숫자가 아니라면 NaN이나오지만,
 * 이를 typeof()로 물어보면 무조건 number로 나온다.
 * NaN값은 falsy이므로 false로 취급됨. 조건문에는 true값만 넣을 수 있다.
 * if (변수 !== NaN) {}은 쓸수 있지만, 반대 경우를 판별해 낼 수 없다.
 * isNaN()은 어떤 값이 NaN인지 판별가능. 주어진 값이 NaN이면 true, 아니면 false.
 */

// 최종실행
// 사용자의 prompt입력 여부에 대하여 1차 if문으로 가르기
if (number !== null) {
  if (!isNaN(Int_number)) isPositive(number); /* 숫자일 경우에만 함수콜링 */
  else if (isNaN(Int_number)) alert('문자쓰지 말라고'); /* NaN인경우 */
} else alert('취소 누르지 말고 뭐라도 쓰라고');