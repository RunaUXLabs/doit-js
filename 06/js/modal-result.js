const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

// 토글은 1개의 버튼에 사용한다.
// 분리가 되어있다면 이벤트를 두개로 구성한다.

open.addEventListener("click", () => {
  modalBox.classList.add("active"); // 클릭하면 클래스리스트에 .active 스타일 추가
});
close.addEventListener("click", () => {
  modalBox.classList.remove("active"); // 클릭하면 클래스리스트에 .active 스타일 제거
});

// 그림자로 모달 표시한 컨텐츠 이벤트
open2.addEventListener("click", () => {
  modalcontents2.classList.add("active"); // 클릭하면 클래스리스트에 .active 스타일 추가
});
close2.addEventListener("click", () => {
  modalcontents2.classList.remove("active"); // 클릭하면 클래스리스트에 .active 스타일 제거
});
