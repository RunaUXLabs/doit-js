// 웹 요소 가져오기
const 할일입력창 = document.querySelector('#todo-input');
const 추가버튼 = document.querySelector('#add-button');
const 할일목록 = document.querySelector('#todo-list');

// 이벤트 처리
추가버튼.addEventListener('click', 할일추가);

// 함수선언
function 할일추가(e) {
    e.preventDefault();// 버튼 태그의 새로고침 막기

    // 할일 추가되는 태그 요소 조합 만들기
    const li = document.createElement('li'); // li만들기
    li.classList.add('todo'); //클래스 추가

    const span = document.createElement('span'); // span만들기
    span.classList.add('todo-content'); // 클래스추가
    span.textContent = 할일입력창.value; // 입력내용추가

    const 완료버튼 = document.createElement('button'); // 버튼만들기1
    완료버튼.textContent = '완료'; // 태그안에 글씨넣기
    완료버튼.classList.add('complete-button');

    const 삭제버튼 = document.createElement('button'); // 버튼만들기2
    삭제버튼.textContent = '삭제'; // 태그안에 글씨넣기
    삭제버튼.classList.add('delete-button');

    li.appendChild(span); // li안에 span넣기
    li.appendChild(완료버튼); // li안에 완료버튼넣기
    li.appendChild(삭제버튼); // li안에 삭제버튼넣기
    할일목록.appendChild(li); // ul안에 조합된 li 넣기

    로컬스토리지저장(할일입력창.value); // 로컬스토리지에 저장하는 함수 콜링

    할일입력창.value = ''; // 입력창 초기화
}
// 엔터키 이벤트도 추가해서 사용성 올리기

function 로컬스토리지저장(할일) {
    // 선이행, 과거이력 가져오기
    let 할일들;
    if (localStorage.getItem('할일들') === null) {
        // 할일 저장된게 없으면 빈 배열로 할당해라
        할일들 = [];
    } else {
        // 할일 저장된게 있으면 가져와서 파싱해서 객체로 재할당해라
        할일들 = JSON.parse(localStorage.getItem('할일들'));
    }

    // 후이행, 신규 추가하기
    할일들.push(할일);
    localStorage.setItem('할일들', JSON.stringify(할일들));
    // 할일들이라는 키에 해당 데이터를 값(JSON변환해서)으로 할당해라

    // localStorage.removeItem('할일들')
    // 콘솔에다가 적으면 스토리지 비울수 있음.
}

// 리스트를 클릭했을때, 할일관리함수가 실행한다.
할일목록.addEventListener('click', 할일관리);

function 할일관리(e) {
    // console.log(e.target);
    const 건드린대상 = e.target.classList[0];
    // 사용자가 클릭한 리스트중에서 클릭이벤트가 일어난 대상의 클래스의 첫번째[0]를 뽑아서 건드린버튼에 할당해라
    // console.log(건드린대상);

    //뽑아온 클래스명 (5개)중에서 내가 찾는게 (버튼관련 2개)있으면 실행문을 실행해라
    if (건드린대상 === 'complete-button') {
        // 완료버튼을 클릭했다면 클래스 추가
        const li = e.target.parentElement; // 건드린대상의 부모요소 li
        li.classList.toggle('completed'); // completed 클래스 토글
    }
    else if (건드린대상 === 'delete-button') {
        // 삭제버튼을 클릭했다면
        const li = e.target.parentElement; // 건드린대상의 부모요소 li
        로컬스토리지삭제(li); // 스토리지 삭제하는 함수 콜링
    }
}
//  로컬스토리지삭제(li)콜링이 되므로, 삭제할 할일로 들어오는 대상은 li
function 로컬스토리지삭제(삭제할일) {
    // 할일들을 가져오기위해 변수설정
    let 할일들;
    if (localStorage.getItem('할일들') === null) {
        // 할일 저장된게 없으면 빈 배열로 할당해라
        할일들 = [];
    } else {
        // 할일 저장된게 있으면 가져와서 파싱해서 객체로 할당해라
        할일들 = JSON.parse(localStorage.getItem('할일들'));
    }
    console.log(할일들); // 최근까지 저장된 할일들 파싱해 가져오기

    const 인덱스 = 할일들.indexOf(삭제할일.children[0].textContent);
    // 삭제할 li로 들어온 텍스트를 파싱해온 할일들에서 찾아서 번호를 추출한다.
    console.log(인덱스);

    // 로컬스토리지에서 해당내역 제거하고 재할당
    할일들.splice(인덱스, 1); // 인덱스 위치에 가서 1개 삭제해줘
    localStorage.setItem('할일들', JSON.stringify(할일들));
    // 삭제가 일어났으니 변경된 리스트를 다시 로컬스토리지에 재할당해줘

    // 화면에서 li 제거하기
    삭제할일.remove();
}


/**
 * 로컬스토리지의 내용은 브라우저를 꺼도 나타나므로, DB를 활용 못하는 경우에는 남아있는 로컬스토리지의 내용을 화면에 표시하는것을 처음 로딩에 걸어두면 완성도가 높아보인다.
 * 
 * 보완사항
 * 삭제버튼 클릭시 로컬스토리지에서 제거가 되므로 문제가 없지만,
 * 완료버튼시 데이터의 형태를 저장정보에서도 변경하면
 * re-load를 했을 경우 완료리스트도 표현될 수 있음
 * 키: 할일들 과 값: [할일1,할일2,할일3,할일4] 형태를
 * 키: 할일들 과 값: [[할일1, true],[할일2, false]]의 형태로 구성한다.
 * 완료버튼 토글시 할일들 값의 배열의 두번째가 bool값에 의해 변동되게 설정
 * 
 */

function init() {
    let 할일들;
    if (localStorage.getItem('할일들') === null) 할일들 = [];
    else 할일들 = JSON.parse(localStorage.getItem('할일들'));
    // 남아있는 자료 불러오기

    for (할일 of 할일들) {
        const li = document.createElement('li');
        li.classList.add('todo');

        const span = document.createElement('span');
        span.classList.add('todo-content');
        span.textContent = 할일;

        const 완료버튼 = document.createElement('button');
        완료버튼.textContent = '완료';
        완료버튼.classList.add('complete-button');

        const 삭제버튼 = document.createElement('button');
        삭제버튼.textContent = '삭제';
        삭제버튼.classList.add('delete-button');

        li.appendChild(span); // li안에 span넣기
        li.appendChild(완료버튼); // li안에 완료버튼넣기
        li.appendChild(삭제버튼); // li안에 삭제버튼넣기
        할일목록.appendChild(li); // ul안에 조합된 li 넣기
    }
}
init();

