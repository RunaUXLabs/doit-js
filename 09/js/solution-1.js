class Pet {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  run() {
    alert(`${this.name} is running!!✨`);
  }
  reg() {
    return `${this.color}(색) ${this.name}이(가)\n 등록 되었습니다.`;
  }
  // 응용구간
  reg2() {
    return `${this.age}살 ${this.name}이(가)\n 등록 되었습니다.\n ${this.color}(색)으로 예쁜 아이이군요!😍`;
  }
}
// 기존답
// const cheez = new Pet("치즈", "yellow");
// cheez.run();

// 응용, 인스탄스생성 연습
// 해당 클래스 함수는 그대로 활용하고, html에서 폼을 통해 사용자가 직접 입력한 반려동물 정보가 저장이 되도록 구성해보자

const btn = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', (e) => {
  e.preventDefault(); // 버튼 기본기능 막기
  let petname = document.querySelector('#petname');
  let petcolor = document.querySelector('#petcolor');
  let petage = document.querySelector('#petage');

  if (petname.value !== "" && petcolor.value !== "") {
    let regPet = new Pet(petname.value, petcolor.value, petage.value);
    // result.textContent = `${regPet.reg()}`;
    result.textContent = `${regPet.reg2()}`;
    petname.value = '';
    petcolor.value = '';
    petage.value = '';
    petname.focus();
    return;
  } else {
    result.textContent = `정보를 모두 입력해 주시기 바랍니다`;
    petname.value = '';
    petcolor.value = '';
    petage.value = '';
    petname.focus();
    return;
    // 호불호 이슈 있을수 있음. 정보가 하나라도 비면 메시지 출력이지만, 모든 input을 비우는 형식으로 제작했기때문. 폼이 짧기때문에 퉁쳐 만든것임.
  }
});
