const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image(); // 이미지객체
img.src = "images/pattern.png";
img.onload = function () {
  /** let 변수명 = ctx.createPattern(이미지경로, "반복형태")
   *  이미지경로: 이미지객체사용. 이미지객체의.onload() 함수
   *              실행시 .src프로퍼티를 사용할 수 있기때문에
   *              객체에 연동되는 경로개념을 가져올수있다.
   *  반복형태: css 백그라운드 반복형태와 같다
   * */
  let pattern = ctx.createPattern(img, "repeat-x"); // 패턴 객체
  ctx.fillStyle = pattern; // 채우기 스타일을 패턴으로 지정
  ctx.fillRect(0, 0, 100, 100);  // 100*100사각형 채워라 
}; 