// 어렵게 프로미스 선언하지 말고 함수 앞에 async만 쓰고 프로미스 체이닝하면 바로 비동기라인 분리!

async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}
// 체이닝을 간단하게 쓰려면 무조건 함수는 밖에 빼놓는다
// 부를땐 이름만!
whatsYourFavorite()
  .then(displaySubject)  // .then(response => displaySubject(response))
  .then(console.log);  // .then (result => console.log(result));