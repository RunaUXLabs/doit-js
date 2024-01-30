const bttn = document.querySelector("button");

bttn.onclick = function () {
  document.body.classList.toggle("dark");
};

// css를 설계할때 최상위 부모의 class를 변경하는 방법으로 접근한다.
// 1.기본적인 최상위 부모의 아래요소들의 공통요소 짜놓기
// 2.최상위 부모의 class명을 변경하는 이벤트를 짠다
// 3.css는 색상값만 바꾼다(css 중복선언을 막을 수 있다. 일을 덜할 수 있다.)

// body ul li{사이즈, 위치, 정렬} // 기본요소
// body.dark ul li{컬러값만 바꿔}
// body.light ul li{컬러값만 바꿔}