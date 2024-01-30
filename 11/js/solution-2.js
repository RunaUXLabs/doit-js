const result = document.querySelector('#result');
const button = document.querySelector('button');

const luckyNumber = {
  digitCount: 6, // 숫자 6개
  maxNumber: 45, // 최대 숫자 45
};
// 게임의 규칙에서 사용될 숫자 갯수를 키와 값으로 받아오려고 객체로 선언함
// let digitCount = 6;
// let maxNumber = 45;
// 와 같으므로 편한 방법을 사용할 것

// button.addEventListener('click', () => {
//   let { digitCount: 뽑는갯수, maxNumber: 공갯수 } = luckyNumber;
//   // 객체구조분해할당, 변수로 따로 선언해도 되고, 객체로 선언해서 뜯어도 된다.
//   // 기존 설정된 키이름으로 분해하는데, 따로 이름을 짓고싶으면 재할당한다.
//   let 내로또 = new Set();
//   // 숫자를 랜덤으로 뽑을건데 분명 중복이 나오게 됨, 그걸 Set객체로 막을거임
//   // 중복없는 로또번호 6개를 뽑을거임(몇번이 될 지 모름)
//   // 문제점! 6번만 뽑게되면 중복에서 횟수가 날라감, 내번호ㅠㅠ
//   for (let i = 1; i <= 뽑는갯수; i++) {
//     내로또.add(Math.floor(Math.random() * 공갯수) + 1);
//     //1~45까지 공 중에 랜덤으로 뽑아 내로또 Set객체에 추가(feat.중복제거)
//   }
//   result.textContent = `${[...내로또]}`;
//   // 6개가 완성된 내로또를 전개구문의 배열형태로 변환하여 출력
// });


// 개선안, while(조건){실행문}을 사용한다. 내로또 Set객체의 사이즈가 6개가 되는 순간을 조건으로 건다.
button.addEventListener('click', () => {
  let { digitCount: 뽑는갯수, maxNumber: 공갯수 } = luckyNumber;
  let 내로또 = new Set();
  while (내로또.size < 뽑는갯수) 내로또.add(Math.floor(Math.random() * 공갯수) + 1);
  result.textContent = `${[...내로또]}`;
});