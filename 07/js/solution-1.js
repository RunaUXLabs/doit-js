// 이름과 전공을 적어서 등록하기 버튼을 누르면 tbody에 tr로 한줄씩 추가
// 이름뒤의 x버튼을 누르면 해당 참가자 제거하는 기능 추가

const username = document.querySelector("#username");
const major = document.querySelector("#major");
const btn = document.querySelector("form > button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  // 전송버튼 리프레시 막기

  // 경고메시지 퉁치기
  if (username.value == "" || major.value == "") {
    // 둘 중 하나라도 공백일경우
    alert('공백은 허용하지 않습니다');
    if (username.value == "") username.focus();
    else major.focus();
    return false;
  }

  let tbody = document.querySelector("#attendant > tbody");
  let newTr = document.createElement("tr");

  // 첫번째 td에 입력한 이름 넣기
  let nameTd = document.createElement("td");
  nameTd.innerHTML = `${username.value}  
  `; // css에서 delButton의 위치 고정시킴

  // 두번째 td에 입력한 전공 넣기
  let majorTd = document.createElement("td");
  majorTd.textContent = `${major.value}`;

  // 세번째 td에 삭제버튼 넣기
  let delTd = document.createElement("td");
  delTd.innerHTML = `<span class="delButton">&cross;</span> `;

  // 정보 전송 다했으면 공백으로 돌리고, 포커스 이동
  username.value = "";
  major.value = "";
  username.focus();

  // 세 td를 tr에 추가하기
  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);
  newTr.appendChild(delTd);

  // 새 tr을 tbody에 추가하기
  tbody.appendChild(newTr);

  // 삭제버튼 기능 만들기, 추가가 된 후에 삭제를 해야하므로 안에다 작성한다.
  const delButtons = document.querySelectorAll('.delButton');
  for (let button of delButtons) {
    button.addEventListener('click', function () {
      this.parentNode.parentNode.remove(this);
      // 삭제버튼 부모는 td, 그 부모 tr을 찾아 제거
    });
    // css에서 접근 불가인 부모스타일 수정하기
    button.addEventListener('mouseenter', function () {
      this.parentNode.parentNode.classList.add('focus');
    });
    button.addEventListener('mouseleave', function () {
      this.parentNode.parentNode.classList.remove('focus');
    });
  }
});

