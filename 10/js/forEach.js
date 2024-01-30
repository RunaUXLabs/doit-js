const tabButtons = document.querySelectorAll('.tabButtons > button')
const tabContents = document.querySelectorAll('.tabContents > div')

Array.from(tabButtons).forEach((button, index)=>{
    // 찐배열로 만든 tabButtons의 각 버튼에게 콜백을 적용한다
    button.addEventListener('click', function(){
        // 버튼 누르자마자 각 버튼과 컨텐츠에 붙어있는 on제거하기
        for(button of tabButtons) button.classList.remove("on")
        for(content of tabContents) content.classList.remove("on")
        
        // 내가누른 그 버튼과 인덱스번호가 맞는 컨텐츠박스에 on붙이기
        this.classList.add('on')
        tabContents[index].classList.add('on')
    })
})
tabButtons[0].click() // 트리거 실행(첫번째열어놓기)

