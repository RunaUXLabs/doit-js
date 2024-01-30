const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");


open.addEventListener('click', () => {
    modalBox.classList.add('active')
});
close.addEventListener('click', () => {
    modalBox.classList.remove('active')
});

// x버튼 외에도 배경을 누르면 모달창 닫기, 대신 모달창을 누르면 닫히면 안됨
modalBox.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) modalBox.classList.remove('active')
})