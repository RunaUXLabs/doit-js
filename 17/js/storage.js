let 수강생들 = ['김씨','이씨','박씨']
localStorage.setItem('학생들', JSON.stringify(수강생들))
// 로컬스토리지에 학생들 키를 만들고 수강생들(배열)을 값으로 저장 


// 전학생 추가
let 햇님반;
if(localStorage.getItem('학생들') === null){
    // 로컬스토리지에 키가없으면
    햇님반 = [] // 햇님반에 빈배열 할당
}else{
    // 로컬스토리지에 키가있으면
    햇님반 = JSON.parse(localStorage.getItem('학생들'))
    // 파싱해서 가져와서 햇님반에 할당해라
}
햇님반.push('최씨')
// console.log(햇님반) // 확인

localStorage.setItem('학생들', JSON.stringify(햇님반))
// console.log(수강생들) // 확인

// 강제전학
const 강제전학생 = 햇님반.indexOf('이씨') // 인덱스번호 추출
햇님반.splice(강제전학생, 1) // 해당인덱스번호가서 제거, 배열이 변함
localStorage.setItem('학생들', JSON.stringify(햇님반)) // 값 재할당
// console.log(햇님반) // 확인



// 스토리에서 키/값 제거(removeItem)
// localStorage.removeItem('학생들')

// 스토리지 전체 제거(clear)
// localStorage.clear()