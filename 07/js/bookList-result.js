// 책 목록에 추가
const title = document.querySelector("#title"); // '제목' 정보
const author = document.querySelector("#author"); // '저자' 정보
const save = document.querySelector("#save"); // '저장하기' 버튼
const bookList = document.querySelector("#bookList"); // 정보가 표시될 영역

save.addEventListener("click", (e) => {
  e.preventDefault(); // 기본기능 막기

  // 업글) 폼요소의 빈값 걸러내기 추가
  // if (title.value == "") {
  //   // 공백일경우
  //   alert('책 제목을 입력해 주세요')
  //   title.focus();
  //   return false;
  // }
  // if (author.value == "") {
  //   // 공백일경우
  //   alert('저자을 입력해 주세요')
  //   author.focus();
  //   return false;
  // }

  // 퉁치기
  if (title.value == "" || author.value == "") {
    // 둘 중 하나라도 공백일경우
    alert('공백은 허용하지 않습니다');
    if (title.value == "") title.focus();
    else author.focus();
    return false;
  }

  const item = document.createElement("li"); // ul bookList에 추가할 li생성
  item.innerHTML = `
    ${title.value} - ${author.value} 
    <span class="delButton">삭제</span>
  `; // 백팃을 사용한 리터럴 선언으로 li에 내용 채우기
  bookList.appendChild(item); // 정리된 li를 bookList에 넣기

  title.value = "";
  author.value = "";

  // 목록에서 제거하기

  const delButtons = document.querySelectorAll(".delButton");
  // '삭제' 버튼 모두 가져오기
  /**
   * li추가하는 함수 안에 삭제버튼을 추려오라는 명령어를 넣어야하는이유
   * 스크립트의 동기상태는 빨리 읽을 수 있는것 먼저 읽어버림.
   * 생성되지 않은 .delButton을 추리라는 명령어가 실행되면 못찾는다.
   * 그 이후에 만들어진 li안의 .delButton을 클릭해도
   * 삭제가 안되는(기능이 안되는) 이유라고 생각하면 된다.
   * 가장 좋은 방식은 비동기 처리를 하는것이다.
   */

  for (let delButton of delButtons) {
    delButton.addEventListener("click", removeItem);
  }
});

function removeItem() {
  let list = this.parentNode; // L.53 인식이 되므로 this는 니가누른그버튼임.
  list.remove();
  // list.parentNode.removeChild(list);
}
