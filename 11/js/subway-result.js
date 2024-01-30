function* train() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}

let gyeonggang = train();   // 경강선 이터러블 객체 생성

const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let current = gyeonggang.next(); // 버튼 누를때마다 next()콜링

  // current의 done의 값을 가지고 분기
  // value가 undefined일 때 done이 true로 바뀜
  if (current.done !== true) {
    result.innerHTML = current.value;
  } else {
    // done이 true이면, next()로 내줄 값이 없다면.
    result.innerHTML = "종점!";
    button.setAttribute("disabled", "disabled"); // 버튼 비활성화
  }
});