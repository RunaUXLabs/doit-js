// 아이디 선언값 생략하겠음

// 저장하기 버튼을 누르면
// 버튼의 원래 용도는 자료를 넘기고 새로고침을 한다. 그래서 입력후 버튼을 클릭하면 화면의 모든 내용 사라지는게 원래 기능.
save.addEventListener('click', (e) => {
    e.preventDefault();
    // save버튼의 기본기능 막기, 이벤트 객체(파라미터로 밀어넣음)에서 기본기능에 접근하여 막아줘!

    // 폼요소의 빈값 걸러내기기능을 하나로 퉁치기
    if (title.value == "" || author.value == "") {
        // 둘 중 하나라도 공백일경우
        alert('공백은 허용하지 않습니다');
        if (title.value == "") title.focus();
        else author.focus();
        return false;
    }

    // bookList에 넣을 li만들기
    const li = document.createElement('li');
    // li에 백팃을 사용해 태그째로 밀어넣기(퍼블리싱 단계에서 css 다 해놓기)
    li.innerHTML = `
        ${title.value} - ${author.value}
        <span class="delButton">삭제</span>
    `;
    bookList.appendChild(li);

    // 다른내용 받아야 하니까 폼 공백으로 돌리고, 포커스 이동하기
    title.value = "";
    author.value = "";
    title.focus();

    /**삭제버튼 기능 만들기, 추가가 된 후에 삭제를 해야하므로 안에다 작성한다.
     * li추가하는 함수 안에 삭제버튼을 추려오라는 명령어를 넣어야하는이유
     * 스크립트의 동기상태는 빨리 읽을 수 있는것 먼저 읽어버림.
     * 생성되지 않은 .delButton을 추리라는 명령어가 실행되면 못찾는다.
     * 그 이후에 만들어진 li안의 .delButton을 클릭해도
     * 삭제가 안되는(기능이 안되는) 이유라고 생각하면 된다.
     * 가장 좋은 방식은 비동기 처리를 하는것이다.
     */
    const delButtons = document.querySelectorAll('.delButton');
    for (let button of delButtons) {
        button.addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
});