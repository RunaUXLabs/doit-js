const button = document.querySelector("button");

button.onclick = function() {
  document.body.style.backgroundColor = "#222";
  document.body.style.color = "#fff";
}
// 추가 응용사항
// 테마변경형식으로 클래스 토글하기(예, body에 dark 클래스 추가)
// 스타일 개별로 바꾸는것이 아니라 css컨트롤로 변경하고 토글로 업그레이드 하기