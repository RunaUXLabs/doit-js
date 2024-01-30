const orderButton = document.querySelector('#order')
const orderInfo = document.querySelector('#orderInfo')
const title = document.querySelector('#container > h2')


orderButton.addEventListener('click',()=>{
    let newP = document.createElement('p')
    let textnode = document.createTextNode(title.textContent)
    newP.appendChild(textnode) //textnode를 newP의 자식으로 붙이기
    newP.style.fontSize = "0.8rem";
    newP.style.color = "red";
    orderInfo.appendChild(newP) //newP를 orderInfo의 자식으로 붙이기
},{once: true})



//속성을 가지고 있는 요소 추가하기

let newImg = document.createElement('img') // <img>태그 만들기
let srcNode = document.createAttribute('src') // src 속성 만들기
let altNode = document.createAttribute('alt') // alt 속성 만들기

srcNode.value = 'images/wall.jpg' //src값에 이미지 경로 붙이기
altNode.value = '월페이퍼' //alt값에 이미지 보조텍스트 적기
newImg.setAttributeNode(srcNode)
//생성된 img 태그에 값이 할당된 src 속성 붙이기
newImg.setAttributeNode(altNode)
//생성된 img 태그에 값이 할당된 alt 속성 붙이기
document.body.appendChild(newImg)
//본문에 img 태그 삽입하기