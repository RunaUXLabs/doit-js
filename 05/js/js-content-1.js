let tabButtons = document.querySelectorAll('.tab > span'); // 탭버튼 선언
let tabBoxs = document.querySelectorAll('.con > span'); // 탭박스 선언

tabButtons.forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    //초기화, on 다 떼기
    for (const tabButton of tabButtons) tabButton.classList.remove("on");
    for (const tabBox of tabBoxs) tabBox.classList.remove("on");
    tabBoxs[index].classList.add("on");
    this.classList.add("on");
  });
});
tabButtons[0].click();

// let p = document.querySelector("p")
// console.log(p)
// let pAll = document.querySelectorAll(".user")
// // querySelectorAll()로 부르면 유사배열로 들어오고, 요소를 선택할 때 배열 부르듯이 부르면 된다. 변수[인덱스번호]
// console.log(pAll)
// console.log(pAll[0])

// console.log(document.querySelector("#desc"))

// 추출
console.log(document.querySelector("#desc").innerText);
// .innerText 보이는 요소만 가져오며, 공백은 1칸만 인정

console.log(document.querySelector("#desc").innerHTML);
// .innerHTML html소스에 적힌대로(태그포함) 다가져옴, 공백도 다 가져옴

console.log(document.querySelector("#desc").textContent);
// 요소의내용(텍스트만)을 다 가져옴, 공백도 다 가져옴

// 수정
document.querySelector(".user").textContent = '이름 : 도시라';
// 우항의 내용이 재할당된다. 즉시실행.
// 선택자가 지금 보이는 .user하나만 찝어냈다
