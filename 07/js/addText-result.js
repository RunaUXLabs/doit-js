const orderInfo = document.querySelector("#orderInfo");   // 주문 정보 영역
const orderButton = document.querySelector("#order");   // 주문하기 버튼
const title = document.querySelector("#container > h2");   // 책 제목 요소

orderButton.addEventListener("click", () => {
  let newP = document.createElement("p");    // 새로운 p 요소 생성
  let textNode = document.createTextNode(title.innerText);    // title의 텍스트 부분만 가져와 텍스트 노드로 생성

  newP.appendChild(textNode); // 텍스트 노드를 새로운 p 요소에 추가
  // newP.style.fontSize = "0.8em";
  // newP.style.color = "blue";

  newP.classList.add('add'); // 스타일 직접 지정하지 않고 클래스 추가
  orderInfo.appendChild(newP); // 새로운 p 요소를 orderInfo 영역에 추가
}, { once: true }); //.addEventListener()의 세번째 파라미터를 추가해 1번만 작동하게 제어 가능(세번째 파라미터)

/** 보완사항
 * 현재 UI가 상품의 텍스트만 뜯어서 아래 요소에 띄우는 방식이고,
 * 이벤트가 중복될 때 해당 요소가 중복으로 누적되는 부분은 거기까지만 설계해서 그럼.
 * 실제 장바구니를 생각하면 제어옵션에서 { once: true }로 처리할 것이 아니라,
 * 이벤트는 무한이고, 두번이상이 일어날 경우 해당요소의 숫자가 증가하는(증가감하는)
 * 형식으로 화면을 설계해야한다.
 **/