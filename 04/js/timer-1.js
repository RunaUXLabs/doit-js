// greeting 함수를 선언한 후 콜백 함수로 사용
function greeting() {
  console.log("안녕하세요?");
}

// setInterval(콜백함수명, 시간);
setInterval(greeting, 500);

// 직접 함수를 선언하면서 실행
// setInterval(function(){
//   실행문
// },2000);

// 화살표함수로 바꾸면?
setInterval(() => {
  console.log("안녕하세요?");
}, 2000);
// setInterval( 파라미터 => 리턴값, 시간)
