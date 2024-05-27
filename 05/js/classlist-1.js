const title = document.querySelector("#title");
// console.log(title.classList)
// 객체가 가지고 있는 클래스를 반환한다. 중복없이 배열로 종류만 반환. 각 요소가 어떻게 지니고 있는지에 대해서는 모른다.

// 객체.classList.add("클래스명")
// 클래스 추가
title.onclick = () => {
  title.classList.add("clicked");
  console.log(title.classList);
};

// #desc를 클릭하면 p에서 클래스 user를 제거하라
desc.onclick = () => {
  // 단일
  // document.querySelector("#desc p").classList.remove("user");

  // 불가
  // document.querySelectorAll("#desc p").classList.remove("user");
  // querySelectorAll로 선택자를 잡으면 classList를 사용할수없다.
  // document.querySelectorAll()은 유사배열로 처리해야한다.

  // 개선
  let ps = document.querySelectorAll("#desc p");
  for (const p of ps) p.classList.remove("user");
};