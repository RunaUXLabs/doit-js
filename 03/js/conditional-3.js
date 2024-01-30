// let score = prompt("프로그래밍 점수 : ");
// console.log(score);
// console.log(parseInt(score));
// 사용자가 숫자를 입력할 경우, 스트링이지만 parseInt()를 거치면 숫자로 바꿔줌. 그냥 문자열을 입력하면 NaN을 뱉어줌.
// console.log(typeof (parseInt(score)));
// typeof로 확인하는 값을 맹신하지말자, 문자열입력한것을 parseInt()를 거치면 무조건 number로 인식

/**
 * parseInt()를 거친 값이 숫자가 아니라면 NaN이나오지만,
 * 이를 typeof()로 물어보면 무조건 number로 나온다.

 * NaN값은 falsy이므로 false로 취급됨. 조건문에는 true값만 넣을 수 있다.
 * if (변수 !== NaN) {}라고 쓸 수 있지만, 반대 경우를 판별해 낼 수 없다.
 * isNaN()은 어떤 값이 NaN인지 판별가능. 주어진 값이 NaN이면 true, 아니면 false.
 */

// const Int_score = parseInt(score);
// if (score != null) {
//   // 사용자가 대답을 한 경우
//   if (Int_score >= 90) alert("A 학점");
//   else if (Int_score >= 80) alert("B 학점");
//   else if (Int_score < 80) alert("C 학점");
//   else if (isNaN(Int_score)) alert("문자는 입력하지 말아라");
// } else alert("답변을 해주세요"); // 사용자가 취소를 누른 경우


// 위 소스를 가지고 2개값 이상이 나오는 시스템 만들어보기
// 변수 안겹치게 조심할 것
// 비슷한 케이스도 좋으니 써보는것에 의의를 둘 것

// let age = prompt("몇 살?(숫자만써줘)");
// const Num_age = Number(age);
// if (age != null) {
//   // 사용자가 대답을 한 경우
//   if (Num_age >= 80) alert("어르신😙");
//   else if (Num_age >= 18) alert("어른이구나!😎");
//   else if (Num_age >= 8) alert("급식 ㅇㅈ? 😏");
//   else if (Num_age >= 0) alert("꼬꼬마😊");
//   else if (isNaN(Num_age)) alert("숫자 입력하라니까?");
// } else alert("나이 좀 알려주지?"); // 사용자가 취소를 누른 경우







console.log(`---------- 삼항연산자(=조건연산자)`);
/**
 * 삼항연산자(= 조건연산자)
 * let 변수 = (조건문) ? 값1 : 값2
 * 조건문이 참이면 값1을 변수에 할당, 거짓이면 값2를 변수에 할당
 * 물음표부터 찾고 그 왼쪽을 판별한 후 참이면 콜론 첫번째, 거짓이면 두번째
 * */

let num1 = 10;
let num2 = 20;
let small;
console.log(small);

small = (num1 > num2) ? num1 : num2;
console.log(small);


// 모바일 nav버튼 샘플, 삼항연산자로 아이콘 디자인 바꾸기
let menuButton = document.querySelector('button.menu');
menuButton.addEventListener('click', function () {
  this.textContent = this.textContent === 'close' ? 'menu' : 'close';
  // 삼항연산자를 통해서 태그안 내용물을 추출해 close랑 비교, 같은 내용이 맞으면 menu로 변경, 내용이 다르면 close로 변경하여 아이콘 모양을 바꿔버린다.
  // 아이콘을 1개만 써도 toggle을 할수 있다
});