const title = document.querySelector("#title");

// title.onclick = () => {
//   title.classList.add("clicked");
// }

// classList.contains(클래스명) 소유여부를 확인, 가지고있으면 true
// 한가지 클래스만 소유여부를 확인할 땐 .toggle()이 편하고, 여러클래스를 확인해야한다면 .contains()로 물어보자
title.onclick = () => {
  if (!title.classList.contains("clicked")) {
    // clicked를 안가지고 있으면
    title.classList.add("clicked");
  } else {
    // 가지고있으면
    title.classList.remove("clicked");
  }
};
