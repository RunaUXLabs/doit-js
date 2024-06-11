let 수강생들 = ['김씨', '이씨', '박씨'];
console.log(`현재 수강중인 학생들: ${수강생들}`);
localStorage.setItem('학생들', JSON.stringify(수강생들));
// 로컬스토리지에 학생들 키를 만들고 수강생들(배열)을 값으로 저장(선-JSON으로 객체를 변환하기)


// 전학생 추가
let vue14회; // 임시저장소 생성
if (localStorage.getItem('학생들') === null) {
    // 로컬스토리지에 키가없으면
    vue14회 = []; // vue14회에 빈배열 할당
} else {
    // 로컬스토리지에 키가있으면
    vue14회 = JSON.parse(localStorage.getItem('학생들'));
    // 파싱해서 가져와서 vue14회에 할당해라

    // vue14회 = localStorage.getItem('학생들'); // 파싱해서 객체로 살리지 않으면 쌩글씨로 들어옴
}
// console.log(vue14회); // 확인
vue14회.push('최씨');

localStorage.setItem('학생들', JSON.stringify(vue14회));

// 강제전학
const 강제전학생 = vue14회.indexOf('이씨'); // 인덱스번호 추출
vue14회.splice(강제전학생, 1); // 해당인덱스번호가서 제거, 배열이 변함
// console.log(vue14회) // 확인
localStorage.setItem('학생들', JSON.stringify(vue14회)); // 값 재할당



// 스토리에서 키/값 제거(removeItem)
// localStorage.removeItem('학생들');

// 스토리지 전체 제거(clear)
// localStorage.clear();