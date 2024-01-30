const title = document.querySelector("#title");

// .classList.toggle(클래스명) 대상 클래스를 넣다/뺐다
title.onclick = () => {
  title.classList.toggle("clicked");
  // 나중에 UI활용시에는 템플릿을 다 만들어 놓고, css 활성화 여부 결정, DB 내용물 변경이 어이루어지게하면 된다
};
