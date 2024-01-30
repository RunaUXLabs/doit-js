const title = document.querySelector("#title");
// 마크업 문서에서 유일값 ID는 변수할당 안해도 객체를 인식함
title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "white";
};

