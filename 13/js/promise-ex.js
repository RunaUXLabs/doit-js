const 시작 = document.querySelector('.start')
const 끝 = document.querySelector('.end')

const 주문 = new Promise((성공시, 실패시)=>{
    let 메뉴 = prompt('어떤 커피를 주문하시겠습니까?', '아메리카노')
    if(메뉴!==null && 메뉴 !==''){
        // 뭐라도 대답을 했을 때
        시작.textContent = `${메뉴} 주문 접수되었습니다!`
        setTimeout(() => { 성공시(메뉴) }, 3000)
    }
    else 실패시('커피를 주문하지 않았습니다.')
})
// 제작코드 완성
// 소비코드에 쓸 함수 빼놓기
let 외치기 = (메뉴) => {
    끝.textContent = `${메뉴} 음료가 준비 되었습니다, 가져가세요!`
    끝.classList.add('active')
    시작.classList.add('done')
}
let 망함 = (문제점) => {
    console.error(문제점)
    시작.textContent = `${문제점}`
}

// 소비코드 작성하기
주문.then(외치기).catch(망함)
