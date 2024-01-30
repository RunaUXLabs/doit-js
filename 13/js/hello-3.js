// 기존 프로미스 선언법
function whatsYourFavorite() {
  let fav = "Javascript";
  // 항상 참(비동기성공시)일 경우만 반환함
  return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
  // 항상 참(비동기성공시)일 경우만 반환함
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

// 프로미스 체이닝 콜링, 콜백함수를 쉽게 쓴 개념
whatsYourFavorite()
  .then(displaySubject)  // .then(response => displaySubject(response))
  .then(console.log);   // .then (result => console.log(result));
// 콜백의 흐름
// whatsYourFavorite()
//   --> 반환값 가지고 displaySubject() 가져감
//        --> 반환값를 가지고 console.log로 감
//            -->  최종출력  Hello, Javascript