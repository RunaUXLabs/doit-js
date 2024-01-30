// 아이디 선언값 생략하겠음

// 저장하기 버튼을 누르면
// 버튼의 원래 용도는 자료를 넘기고 새로고침을 한다. 그래서 입력후 버튼을 클릭하면 화면의 모든 내용 사라지는게 원래 기능.
save.addEventListener('click', (e)=>{
    e.preventDefault();
    // save버튼의 기본기능 막기
    // bookList에 넣을 li만들기
    const li = document.createElement('li')
    // li에 백팃을 사용해 태그째로 밀어넣기
    li.innerHTML = `
        ${title.value} - ${author.value}
        <span class="delButton">삭제</span>
    `;
    bookList.appendChild(li)
    
    // 다른내용 받아야 하니까 폼 공백으로 돌리기
    title.value = ""
    author.value = ""

    // 삭제버튼 기능 만들기, 추가가 된 후에 삭제를 해야하므로 안에다 작성한다.
    const delButtons = document.querySelectorAll('.delButton')
    for(let button of delButtons){
        button.addEventListener('click',function(){
            this.parentNode.remove()
        })
    }
})