const btn = document.querySelector("button");
// 버튼 요소 가져옴

btn.addEventListener("click", () => {
  //  버튼 클릭하면 alert 실행
  alert("클릭했습니다.2222");
});

// 대상.addEventListener("이벤트명", 함수명);

// 따로 선언한 함수가 없다면 직접입력
// 대상.addEventListener("이벤트명", function(){});
// 대상.addEventListener("이벤트명", ()=>{});

// 내가 만드는 함수는 파라미터를 어떻게넣든 상관없음.
// 내장함수는 파라미터의 위치가 지정되어있다.

// HTML에 새로운 요소를 만들고, 선택자 잡고, 이벤트를 적용시켜보자. 콜백함수도 새로 만들어서 콜링하자.

const p = document.querySelector("p");
p.addEventListener('click', () => {
  p.textContent = '안녕?';
});

// 모든 이벤트에서 시킨대로 움직임, 애꿎은 애한테 화내지 말자! 안시킨 내잘못이다.