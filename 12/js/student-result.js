let xhr = new XMLHttpRequest();
xhr.open('GET', 'student.json', true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let student = JSON.parse(xhr.responseText); // 파싱한 객체
    document.getElementById('result').innerHTML = `
            <h1>${student.name}</h1>
            <ul>
              <li>전공 : ${student.major}</li>
              <li>학년 : ${student.grade}</li>
            </ul>
        `;
  }
};

// fetch연습하기
// fetch('student.json')
//   .then(response => response.json())
//   .then(json => {
//   });