const bttn = document.querySelector("button");
const popWidth = 300;  // 팝업 창 너비
const popHeight = 200;   // 팝업 창 높이

bttn.addEventListener("click", function () {
  // 아래 변수는 css에서 margin: 0 auto를 사용하여 auto을 계산하는 느낌으로 바라볼 것
  let left = (screen.availWidth - popWidth) / 2;      // (모니터 너비 - 팝업 창 너비) / 2
  let top = (screen.availHeight - popWidth) / 2;      // (모니터 높이 - 팝업 창 높이) / 2
  // let left = (innerWidth - popWidth) / 2;      // (화면 너비 - 팝업 창 너비) / 2
  // let top = (innerHeight - popHeight) / 2;      // (화면 높이 - 팝업 창 높이) / 2
  window.open("notice.html", "event", `width = ${popWidth} height= ${popHeight} left = ${left} top = ${top}`);
});

// 응용)모니터 기준 중앙 말고, 브라우저 화면기준 중앙(UX관점으로 항상 모달창이 중앙뜬 개념 생각)에 띄우려면? 
// 답) screen.availWidth와 screen.availHeight을 다른 프로퍼티로 변경하여 body 사이즈를 도출하면 된다. 해당 팝업은 모니터 기준으로 0,0을 잡기 때문에 팝업의 기준을 body로 잡으려면 기준값 설정을 더 해야함. => 부득부득 어렵게 계산해서 옛날 팝업을 띄울 필요가 있을까? CSS 처리 추천