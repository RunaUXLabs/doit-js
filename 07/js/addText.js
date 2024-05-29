const orderButton = document.querySelector('#order');
const orderInfo = document.querySelector('#orderInfo');
const title = document.querySelector('#container > h2');
const decs = document.querySelector('#container p');


orderButton.addEventListener('click', () => {
    let newP = document.createElement('p');

    newP.style.fontSize = "0.8rem";
    newP.style.color = "red";
    // newP의 스타일을 개별 지정할 수 있지만,
    // 이미 퍼블리싱 되어진 화면을 받는다면 이미 css 설정이
    // 되어있으니, 요소생성 이후에 클래스 지정하는 메서드를
    // 사용하면 디자인 적용이 편해진다.

    // let textnode = document.createTextNode(title.textContent);
    let textnode = document.createTextNode(decs.textContent);
    newP.appendChild(textnode); //textnode를 newP의 자식으로 붙이기
    orderInfo.appendChild(newP); //newP를 orderInfo의 자식으로 붙이기
}, { once: true });



//속성을 가지고 있는 요소 추가하기

// let newImg = document.createElement('img'); // <img>태그 만들기
// let srcNode = document.createAttribute('src'); // src 속성 만들기
// let altNode = document.createAttribute('alt'); // alt 속성 만들기

// srcNode.value = 'images/wall.jpg'; //src값에 이미지 경로 붙이기
// altNode.value = '월페이퍼'; //alt값에 이미지 보조텍스트 적기
// newImg.setAttributeNode(srcNode);
// //생성된 img 태그에 값이 할당된 src 속성 붙이기
// newImg.setAttributeNode(altNode);
// //생성된 img 태그에 값이 할당된 alt 속성 붙이기
// document.body.appendChild(newImg);
// //본문에 img 태그 삽입하기

// 응용) 다쓰기 귀찮다!!!! 속성과 값을 한방에 붙여버리는
// 요소.setAttribute('속성명', '값')을 활용하여 이미지 넣기!;

let newImg2 = document.createElement('img');
newImg2.setAttribute('src', 'images/wall.jpg');
newImg2.setAttribute('alt', '월페이퍼');
document.body.appendChild(newImg2);