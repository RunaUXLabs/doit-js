const container = document.querySelector('#container')

//이미지 배열
const pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg']

container.style.backgroundImage = `url(images/${pics[0]})`
// url(images/pic-1.jpg)와 같다

//화살표 선언
const arrows = document.querySelectorAll('.arrow')
console.log(arrows)// NodeList(2) [div#left.arrow, div#right.arrow]

let i = 0;

// 배열.forEach((각대상)=>{실행문})
arrows.forEach((arrow)=>{
    // 화살표 모음에 공통으로 적용한다
    arrow.addEventListener('click', (e) => {
        // 두 버튼 중에 하나를 클릭해서 구분한다.
        if(e.target.id === 'left'){
            //왼쪽버튼이라면
           i--; // 1감소
           if(i < 0) i = pics.length -1;
           // 최종 장수에서 1장 적은숫자로 복귀(인덱스번호를 받아야 하므로)
        }
        else if(e.target.id === 'right'){
            // 오른쪽 버튼이라면
            i++; // 1증가
           if(i >=  pics.length) i = 0;
           // 증가한 i를 인덱스 번호로 넘기다가, 오른쪽 끝장이 되면,
           // 0이 되어 첫장으로 돌아옴
        }

        container.style.backgroundImage = `url(images/${pics[i]})`
    })
})