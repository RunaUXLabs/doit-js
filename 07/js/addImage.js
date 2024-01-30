const today = new Date(); // 읽는 순간 현재 날짜와 시간 뽑아옴
console.log(today)
const hrs = today.getHours() // 시간뜯어오기 24시기준
console.log(hrs)

let newImg = document.createElement('img') // <img>태그 만들기
let srcNode = document.createAttribute('src') // src 속성 만들기
newImg.setAttributeNode(srcNode) // 속성붙이기
newImg.src = (hrs < 12) ? 'images/morning.jpg' : 'images/afternoon.jpg'
// 삼항연산자를 통해 newImg.src를 추출된 시간이 12시 이전이라면 오전사진, 아니라면 오후사진으로 할당한다.

//html의 id값은 유일하기때문에 선언 생략가능
container.appendChild(newImg)