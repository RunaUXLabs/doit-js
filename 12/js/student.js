// let xhr = new XMLHttpRequest();
// // 객체선언

// xhr.open('GET', 'student.json');
// // 비동기 여부는 기본값이며, json파일의 위치는 상대/절대든 정확한 위치를 적어주어야 오픈요청이 가능하다. GET방식은 공개가능한 정보여부
// // GET으로 요청하면 send()의 파라미터는 없다.
// xhr.send();

// xhr.onreadystatechange = function () {
//     // 서버연결 완료 후 아래 작성
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         // 서버연결 상태가 두조건이 만족되면
//         console.log(xhr);
//         console.log(xhr.responseText);
//         const 학생정보 = JSON.parse(xhr.responseText);
//         console.log(학생정보);
//         // const 변수 = JSON.parse(JSON찐텍스트담긴항목)
//         // JSON 파싱하여 객체로 변환
//         // const result = document.querySelector('#result')
//         result.innerHTML = `
//             <h1>${학생정보.name}</h1>
//             <ul>
//                 <li>전공: ${학생정보.major}</li>
//                 <li>학년: ${학생정보.grade}</li>
//             </ul>
//         `;
//         // 객체명.키 = 값 반환 (점표기법)
//         // 객체명["키"] = 값 반환 (대괄호표기법)
//     }
// };


// fetch()써보기
fetch('student.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // 파싱객체 확인
        console.log(data.name);

        // 퍼블리싱 한 상태 그대로 떼 와서 백팃구성
        document.querySelector('#result').innerHTML = `
            <h1>${data.name}</h1>
            <ul>
                <li>전공: ${data.major}</li>
                <li>학년: ${data.grade}</li>
            </ul>
        `;
    });