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
// function renderHTML(contents) {
//   let output = "";
//   for (let content of contents) {
//     output += `
//       <h2>${content.name}</h2>
//       <ul>
//         <li>전공 : ${content.major}</li>
//         <li>학년 : ${content.grade}</li>
//       </ul>
//       <hr>
//     `;
//   }
//   document.getElementById("result").innerHTML = output;
//   // 누적할당된 output을 태그째 result에 넣어라
// }

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


// fetch연습하기

fetch('student-2.json')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    // document.querySelector('#result').innerHTML = `
    //   <h2>${json[0].name}</h2>
    //   <ul>
    //     <li>전공 : ${json[0].major}</li>
    //     <li>학년 : ${json[0].grade}</li>
    //   </ul>

    //   <h2>${json[1].name}</h2>
    //   <ul>
    //     <li>전공 : ${json[1].major}</li>
    //     <li>학년 : ${json[1].grade}</li>
    //   </ul>

    //   <h2>${json[2].name}</h2>
    //   <ul>
    //     <li>전공 : ${json[2].major}</li>
    //     <li>학년 : ${json[2].grade}</li>
    //   </ul>
    // `;

    // 패턴분석을 하여 가장 쉬운 접근을 생각한다.
    // 반복, 배열, 모든요소 순회  ==> for of문 활용

    let str = ''; // 문자열 조합할 변수엔 빈문자열 선언
    for (const iterator of json) {
      // console.log(iterator);
      // console.log(iterator.name);

      str += `
        <h2>${iterator.name}</h2>
        <ul>
          <li>전공 : ${iterator.major}</li>
          <li>학년 : ${iterator.grade}</li>
        </ul>
      `;
    }
    // console.log(str);
    document.querySelector('#result').innerHTML = str;
  });
