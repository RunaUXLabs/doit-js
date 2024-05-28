
// const button = document.querySelector("#bttn");
// button.addEventListener("click", () => {
//   const word = document.querySelector("#word").value;   // 텍스트 상자의 내용
//   const result = document.querySelector("#result");   // 결괏값 표시할 영역
//   let count = word.length;   // 문자열의 길이
// 공백도 센다, 문자열에 포함되어 인식되니 전처리 잘 해줄 것.
// value를 떼서 배열에 넣고, 배열에서 공백을 제거, 다시 텍스트로 변환
// (재출력이 필요한 경우 전개구문 사용)하면 순수 글씨만 셀 수 있다.
// (그냥 글자수만 필요하면 배열의 length를 반환받으면 됨)

//   result.innerText = `${count}`;  // 결괏값 표시
// });



// 윗부분 주석하고 다시 써보기
// 응용, 실시간으로 타자수 표시되게 만들기
// 이벤트 키를 누를때 마다 keydown을 이용한다
// word.length를 출력한다.
word2.addEventListener('keydown', () => {
  const count2 = word2.value.length;
  result2.textContent = `${count2}자 입력중... / 100자 제한`;
  if (count2 >= 100) alert('100자 이상 입력 할 수 없습니다');
  // 태그에서 maxlength로 제한한 값까지 가고, alert을 확인하고나면 딱 maxlength까지 입력된 것을 볼 수 있다.
});