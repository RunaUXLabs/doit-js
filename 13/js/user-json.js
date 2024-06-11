const url = 'https://jsonplaceholder.typicode.com/users';

// fetch()는 프로미스로 비동기 처리됨
// fetch(url) // 파일가져와라
//     .then(자료들 => 자료들.json()) // 객체로 파싱해와라
//     .then(사용자정보들 => console.log(사용자정보들)) // 콘솔로 찍어봐라


// async과 await으로 외부자료 가져오기
async function init() {
  const 자료들 = await fetch(url);
  const 사용자정보들 = await 자료들.json();
  console.log(사용자정보들);
  // 출력(사용자정보들);
}

let 출력 = (정보들) => {
  const 결과 = document.querySelector('#result');
  let 사용자 = '';
  for (정보 of 정보들) {
    /** ul, li 디자인
    사용자 += `<ul>
        <li>${정보['name']}</li>
        <li>${정보['username']}</li>
        <li>${정보['email']}</li>
    </ul>`
     */

    /** 테이블 디자인 */
    사용자 += `<table>
      <tr><th>이름</th><td>${정보['name']}</td></tr>
      <tr><th>아이디</th><td>${정보['username']}</td></tr>
      <tr><th>이메일</th><td>${정보['email']}</td></tr>
    </table>`;
  }
  결과.innerHTML = 사용자;
};
init();