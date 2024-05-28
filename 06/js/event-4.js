const button = document.querySelector("button");

// button.onclick = function () {
//   document.body.style.backgroundColor = "green";
// };
// 마지막 onclick만 실행됨

// 기본함수 선언
function changeBackground() {
  document.body.style.backgroundColor = "green";
}
//요소.addEventListener('이벤트명', 함수명)
button.addEventListener('click', () => {
  alert('메롱');
});
button.addEventListener('click', changeBackground);
// 이벤트가 여러개 걸려있는것이 전부 실행됨

