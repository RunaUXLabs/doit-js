// let userNumber = prompt("홀짝게임을 시작할게요! 숫자를 입력해주세요😎");

// if (userNumber !== null) {
//   // 사용자가 뭐든 입력함
//   // userNumber = parseInt(userNumber);  // null이 아니라면 정수로 변환
//   userNumber = Number(userNumber);
//   if (isNaN(userNumber)) alert("문자를 입력하면 홀짝구분이 안되요😂");
//   // 사용자가 문자를 입력한 경우
//   else {
//     // 사용자가 숫자를 입력한 경우
//     (userNumber % 2 === 0) ?
//       alert(`${userNumber}는 짝수입니다!`) : alert(`${userNumber}는 홀수입니다!`);
//     // userNumber를 2로 나누어서 나머지가 없니? 2로 똑떨어지는 개념이면 짝수이다.
//     // 숫자를 엄청 많이 넣으면 지수e 까지 가면서 계산정확도가 떨어짐
//   }
// } else alert("F5로 리셋하고 게임에 참여해 보시겠어요?😊");
// // 사용자가 취소를 누른 경우



// 이해  =  사전지식을 알아, 자주 봐서 외웠어(떠올라)
// 잘모르겠어요, 어려워요  => 덜봐서 그렇다, 자주보면 외워지고, 외워지면 이해가 됨
// 잘하는 사람은 빨리 외운거다.







/** 배수확인 게임으로 응용해보기 */
let standardNumber = prompt("배수확인게임을 해볼까요? 원하는 기준 숫자를 입력해주세요😎");

standardNumber = Number(standardNumber);
if (isNaN(standardNumber)) {
  alert("기준 숫자는 숫자로만 입력해 주셔야 한답니다😑");
} else {
  let userNumber2 = prompt("배수확인 할 숫자를 입력해주세요😎");
  if (userNumber2 !== null) {
    userNumber2 = Number(userNumber2);
    if (isNaN(userNumber2)) alert("문자를 입력하면 게임이 안되요😂");
    else {
      (userNumber2 % standardNumber === 0) ?
        alert(`${userNumber2}는 ${standardNumber}의 배수입니다!`) : alert(`${userNumber2}는 ${standardNumber}의 배수가 아닙니다!`);
    }
  } else alert("F5로 리셋하고 게임에 참여해 보시겠어요?😊");
}
alert("게임끝!🤡 다시하고싶으시면 F5로 리셋해주세요!");
