const member1 = ['HTML','CSS']
const member2 = ['CSS','자바스크립트','리액트']
const member3 = ['자바스크립트','타입스크립트']

const subject = [...member1, ...member2, ...member3]
// 전개구문을 이용해서 위 3개의 배열을 합친다, 7개
console.log(subject)
const resultList = new Set() // 신규 셋객체 생성

subject.forEach((과목)=>{resultList.add(과목)})
// 셋객체 resultList에 subject값을 순차적으로 돌면서 add()하기, 중복은 스킵됨, 5개 
console.log(resultList) // 셋객체 출력
console.log(...resultList) // 값들이 문자열로 찍힘
console.log([...resultList]) // 값들이 배열로 바뀜

const result = document.querySelector('#result')
result.innerHTML = `
    <ul>
    ${[...resultList].map(과목 => `<li>${과목}<li>`).join("")}
    </ul>
`
/**
 * resultList는 셋객체여서.map() 쓸수 없으니 전개구문으로 빼서 이걸 다시 []묶으면
 * 일반배열로 바꿔서 똑같은 동작을 반복시켜 배열로 반환하는 .map()을 실행시킨다.
 * .map()의 콜백함수로 각 값을 태그 <li></li>에 감싸는 형태로 배열을 반환한다.
 * (이때, 콜백함수의 파라미터를 변수로 받아야 해서 내부 백팃이 있다)
 * .join("")을 이용하여 해당 배열을 문자열로 출력한다.
 * */ 