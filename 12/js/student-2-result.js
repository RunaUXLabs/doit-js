// let xhr = new XMLHttpRequest();
// xhr.open("GET", "student-2.json");
// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     let students = JSON.parse(xhr.responseText);
//     renderHTML(students); // 함수콜링
//   }
// };

// 파라미터터로 객체정보 받음
function renderHTML(contents) {
  let output = "";
  for (let content of contents) {
    output += `
      <h2>${content.name}</h2>
      <ul>
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
      </ul>
      <hr>
    `;
  }
  document.getElementById("result").innerHTML = output;
  // 누적할당된 output을 태그째 result에 넣어라
}

// 다음과 같이 forEach문을 사용해도 됩니다.

// function renderHTML(contents) {
//   let output = '';
//   contents.forEach(function (content) {
//     output += `
//       <h2>${content.name}</h2>
//       <ul>
//         <li>전공 : ${content.major}</li>
//         <li>학년 : ${content.grade}</li>
//       </ul>
//       <hr>
//     `;
//   });
//   document.getElementById("result").innerHTML = output;
// }


// // fetch연습하기
// fetch('student-2.json')
//   .then(response => response.json())
//   .then(json => {
//     renderHTML(json);
//   });