function changeBackground() {
  document.body.style.backgroundColor = "green";
}
const button = document.querySelector("button");
button.onclick = changeBackground;
// 이벤트처리시 함수를 콜링할 땐 이름만 부른다. ()작성하면 즉시실행이 되버린다.