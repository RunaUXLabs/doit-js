const title = document.querySelector("h1");
// title.remove(); // 문서가 읽히자 마자 바로 삭제해서 구분 안됨

title.addEventListener("click", () => {
  title.remove();
});