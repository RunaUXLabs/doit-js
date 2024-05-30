// 팝업띄우는 정보 함수로 분리
function openPopup() {
  window.open("notice.html", "33333이벤트팝업", "width=600 height=500 left=300 top=200");
  // open()의 첫번째 파라미터 경로에는 브라우저에서 띄울 수 있는 모든 파일의 경로를 넣을 수 있다
}
const bttn = document.querySelector("button");
// bttn.onclick = openPopup;
bttn.addEventListener('click', openPopup);
