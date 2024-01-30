// 개별선언하기
// 같은 요소로 되어있는 애들중에 특정지어서(이름붙여주기, 상대적 접근) 그 요소에 이벤트 걸어서 삭제해라 명령어 내릴 수 있음.



// 패턴화 하기(지향)
const items = document.querySelectorAll("li"); // li 모든 항목 가져와서 노드배열화 하기
// for...of이용하여 배열 순회하기, 배열안의 각 요소는 item으로 대체됨
// for (let item of items) {
//   // 내가 배열중에 어떤애를 누를지 모름, 그것을 item으로 받아 처리
//   item.addEventListener("click", function () {
//     // 항목 클릭했을 때 실행할 함수
//     // this.parentNode.removeChild(this);
//     // this는 items에서 내가 누르는 item인데 누가될지는 모름
//     // 내가 누른애의 부모를 찾아서 그 자식을 비우는데, 그게 this랑 같아야함 = 누른애가 스스로가 지워져야함
//     // 부모 노드에서 삭제

//     //기준점이 잡히면 상대 탐색이 가능하다

//     // 아래 소스도 가능
//     this.remove(this);
//     // 과연 this는 누구를 말하는것일까? 잘 구분하기
//     // this 쓰고 싶으면 화살표 함수 금지!!!!!!!!!!!
//   });
// }


// this와 화살표함수를 같이쓰면?
for (let item of items) {
  // item.addEventListener('click', () => this.remove(this))
  // 화살표 함수에서의 this는 내가 클릭한 item을 지칭하는것이 아니라 window객체를 가르키므로 이벤트가 먹지 않는다.
  item.addEventListener('click', function () { this.remove(this); });
}
