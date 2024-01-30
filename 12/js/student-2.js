// 객체생성
let xhr = new XMLHttpRequest()
xhr.open('GET', 'student-2.json')
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let 학생들정보 = JSON.parse(xhr.responseText)
        renderHTML(학생들정보)// 함수콜링
    }
}
// 재사용 여부를 확인하고 함수로 따로 보관한다
let renderHTML = (정보들) => {
    let 결과 = '';
    for(정보 of 정보들){
       // 배열로 되어있는 각 정보(객체)를 순회 하고 누적된다.
       // 각 객체를 점표기법 또는 대괄호 표기법으로 접근하여 변수를 뽑아낸다
       결과 += `
            <h2>${정보["name"]}</<h2>
            <ul>
                <li>전공: ${정보.major}</li>
                <li>학년: ${정보.grade}</li>
            </ul>
            <hr>
       ` 
    }
    document.querySelector('#result').innerHTML = 결과
}