async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

/** .then()프로미스체이닝을 사용하지 않고 비동기 처리하는 await
 *  1. async와 await관계를 묶어줄 실행함수를 만든다. 보통은 async init()
 *  2. 그 안에서 첫줄 우항에서 시작하여 지그재그 계단식으로 넘겨받는 구조로
 *     관계를 설정하는 익명함수 리스트를 만든다.
 *  3. 각 변수를 넘겨받아 결과를 표시하고 끝내고 최종 init() 콜링하면 비동기 끝!
 * 
 *  new Promise를 제외하고 비동기를 제어하고 싶거든,
 *  어떤형식을 사용하던간에 async와 await을 사용한다면
 *  모든 관련 함수에는 async 다 붙이기
 **/

async function init() {
  const fav = await whatsYourFavorite();
  const result = await displaySubject(fav);
  console.log(result);
}

init();