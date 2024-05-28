const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");


open.addEventListener('click', () => {
    modalBox.classList.add('active');
});
close.addEventListener('click', () => {
    modalBox.classList.remove('active');
});

// x버튼 외에도 배경을 누르면 모달창 닫기, 대신 모달창을 누르면 닫히면 안됨
modalBox.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) modalBox.classList.remove('active');

    // 잘못된 예
    // modalBox.classList.remove('active');
    // 이런식으로 작성하면 안됨. #modal-box안에 #modal-contents가 자식이다.
    // 현재 모습에서 프로필 화면을 클릭하면 #modal-contents만 클릭했다고 생각하면 안되고, #modal-contents와 #modal-box도 클릭한것이라고 생각해야 한다. 이것이 버블링!
});