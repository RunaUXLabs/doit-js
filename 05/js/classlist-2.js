const title = document.querySelector("#title");

// title.onclick = () => {
//   title.classList.add("clicked");
// }

// classList.contains(클래스명) 소유여부를 확인, 가지고있으면 true
// 클래스의 소유상태를 가지고 원하는 클래스을 넣었다/뺏다 할꺼면 .toggle()

// 클래스의 소유상태를 가지고 광범위한 대상의 변화를 이끌어 낼 거라면 .contains()를 활용하여 조건문의 조건으로 활용하자. 그후에 하고싶은 실행문 넣기

// css에서 :has() 선택자가 있음, 내 자식중에 해당 클래스를 갖고있는 애가 있다면~~~ 이라면서 조건 짤 수 있음.
// https://developer.mozilla.org/en-US/docs/Web/CSS/:has

title.onclick = () => {
  if (!title.classList.contains("clicked")) {
    // clicked를 안가지고 있으면
    title.classList.add("clicked");
  } else {
    // 가지고있으면
    title.classList.remove("clicked");
  }
};
