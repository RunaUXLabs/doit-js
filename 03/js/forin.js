const gitBook = {
  title: "깃&깃허브 입문",
  pubDate: "2019-12-06",
  pages: 272,
  finished: true
};

// for(변수 in 객체명) {실행문}
// 변수는 내가 짓는 이름이고, 객체 안에서 키:값으로된 쌍에서 키만 가지고 온다

// 일반 객체에서 값을 가져오는 방법

console.log(`${gitBook.pages}`); // 객체에 직접적으로 접근, 272 

// p.319 객체에 체계적으로 접근하는 방식
console.log(`${Object.keys(gitBook)}`); // string으로 뱉음
let keys = Object.keys(gitBook);
console.log(keys); // 배열로 뱉음
console.log(keys[3]);
console.log(`-------------------`);

console.log(`${Object.values(gitBook)}`); // string으로 뱉음
let values = Object.values(gitBook);
console.log(values); // 배열로 뱉음
console.log(values[3]);
console.log(`-------------------`);

console.log(`${Object.entries(gitBook)}`);
let entries = Object.entries(gitBook);
console.log(entries); // 배열로 뱉음
console.log(entries[3]);
console.log(entries[3][0]);
console.log(`-------------------`);





for (let key in gitBook) {
  document.write(`${key}: `);
  // 객체 각 쌍안에서 키만 출력함
  // for.. in문에서 각 쌍안에서 키를가지고 오고 싶다면 ${변수명}을 써주면 된다

  document.write(`${gitBook[key]} <br><br>`);
  //객체 각 쌍안에서 값만 출력함
  // for.. in문에서 각 쌍안에서 값을 가지고 오고 싶다면 ${객체명[변수명]}을 써주면 된다

  // document.write(`${gitBook.pages}<br>`);
  // document.write(`${gitBook["pages"]}<br>`);
  // 객체에서 고정값만 추출(기존 객체에서 값가져오는 법), 반복횟수는 쌍 수만큼
}



// // 1분복습하기, 내가만든 객체를 for ..in돌리기
// let cup = {
//   brand: "글라스락",
//   ml: 500,
//   color: "화이트베이지",
//   lock: true
// }

// for (a in cup) {
//   document.write(`<br>${a}: ${cup[a]}`);
// }


// for (key in gitBook) {
//   document.write(`${key}: `); // 키이름 도출
//   document.write(`${gitBook[key]}<br> `);
//각 키에 할당된 값 도출
// }


// const students = ["Park", "Kim", "Lee", "Kang"];
// console.log(students);
// // 혹시, 배열을 for...in으로 돌리면?
// for (let student in students) {
//   document.write(`${student}: `);
//   // 인덱스 번호 나옴, 키가없으니까!
//   document.write(`${students[student]}<br> `);
//   // 값이 도출이 됨
// }
// 객체는 키:값, 배열은 [값,값]
// 배열에게 키를 물으면 인덱스 번호, 값을 물으면 값
// 데이터를 구성할 때, 정보의 디테일이 필요하면 객체로 만들기, 순서와 값만 필요하면 배열로 만들자
// ==> 혹시 함수로 컨트롤을 할 때 번호가 필요한가?
// ==> 배열로 만들기
// 객체인데 번호가 있는 복합구조 나중에 배움


// 혹시, 객체를 for...of으로 돌리면?
// for (const data of gitBook) {
// document.write(`${data}: `); // 오류남
// document.write(`${gitBook[data]}<br> `); // 오류남
// }
// gitBook is not iterable 라는 오류남, 시도 자체가 안됨