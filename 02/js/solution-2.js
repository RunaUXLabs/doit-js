// 1inch = 2.54cm

// cm => in
// let inchValue = parseFloat(prompt("인치로 변환할 cm을 입력하세요."));
// let inchValue = Number(prompt("인치로 변환할 cm을 입력하세요."));
// let cmValue = inchValue / 2.54;
// document.write(`${inchValue}cm는 ${cmValue.toFixed(2)}in 입니다.`);


// in => cm
// 함수화
function inToCm() {
  document.querySelector('h1').textContent = '인치를 센티미터로 변환하기';
  let inchValue2 = Number(prompt("센치미터로 변환할 인치 값을 입력하세요(숫자만)"));
  let cmValue2 = inchValue2 * 2.54;
  document.write(`당신이 입력한 ${inchValue2}in는 ${cmValue2.toFixed(1)}cm 입니다.`);
}
inToCm(); // 함수콜링