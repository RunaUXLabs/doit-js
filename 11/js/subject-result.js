const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "자바스크립트", "리액트"];
const member3 = ["자바스크립트", "타입스크립트"];

const subjects = [...member1, ...member2, ...member3];
// 전개구문으로 배열 합치기
console.log(subjects);

const resultList = new Set();
// subjects.forEach((subject) => {
//   resultList.add(subject);
//   // 합쳐진 subjects의 값을 순회하면서 각 값인 subject을 resultList에 추가해라
//   // resultList는 Set객체 이므로 중복제거하고 추가된다
// });

// for...of로 구현해도 됨
for (const subject of subjects) resultList.add(subject);
console.log(resultList);

const result = document.querySelector("#result");
result.innerHTML = `
  <ul>
    ${[...resultList]
    // 전개구문으로 배열로 변형해 가져와(resultList는 아직 Set객체임)
    .map(subject => `<li>${subject}</li>`)
    // map()를 통해서 각 값인 subject를 <li>태그에 감싸서 배열로 뱉어
    .join("")} 
    </ul>
    `;
// 배열로 나온 결과를 .join("")을 이용하여 문자열로 변형한 값 까지가 변수임.
// 이를 <ul>에 넣고 result에 태그째 삽입

// // 아래와 같이 한 줄로 작성 가능
// // result.innerHTML = `<ul>${[...resultList].map( subject => `<li>${subject}</li>`).join("")}</ul>`;
