const bttn = document.querySelector("button");
// 버튼 요소 가져옴

// 책내용, 선언식 함수
function display() {
    alert("클릭했습니다.");
}

// 교수응용
// var display = function display() {
//   alert("클릭했습니다.");
// }
// display() //콜링

// 대상.addEventListener("이벤트명", 콜백함수명);
bttn.addEventListener("click", display);          // 버튼 클릭하면 display 함수 실행
// A가 B하면 C가 D한다(C가 D한다 부분이 콜백이 하는일)
// bttn.addEventListener("click", function () {
//     alert("클릭했습니다.");
// });

// bttn.addEventListener("click", display());
// 함수명 쓰는 영역에 ()를 쓰면 문서가 읽히면서 즉시 실행된다.
// 콜링되지 않게 조심할것, 우리의 목적은 '클릭하면'이다.

