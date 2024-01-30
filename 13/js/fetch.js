/** fetch(url)
 *  new XMLHttpRequest()객체 선언하고 번거로웠던 것들을 fetch()로 종결.
 *  fetch()는 프로미스므로 체이닝으로 작성한다.
 *  fetch().then().then().catch()
 **/
const 수강생명단 = document.querySelector('#result');
let 학생들정보 = fetch('student-2.json'); // 파일 읽어와라
console.log(학생들정보);

학생들정보
    .then(response => response.json()) // 객체로 파싱해와라
    .then(정보들 => { // 객체가지고 지지고 볶아라
        console.log(정보들); // 정보 확인, 배열
        let 결과 = '';
        for (정보 of 정보들) {
            결과 += `
            <h2>${정보["name"]}</<h2>
            <ul>
                <li>전공: ${정보["major"]}</li>
                <li>학년: ${정보["grade"]}</li>
            </ul>
            <hr>
        `;
        }
        수강생명단.innerHTML = 결과;
    }).catch(에러 => console.log(에러)); // 오류나면 오류처리해라