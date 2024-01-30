class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  reg() {
    return `${this.color}색 ${this.name}이(가) 등록 되었습니다.`;
  }
}

class PetTotal extends Pet {
  constructor(name, color, age, breed) {
    super(name, color); // Pet에서 상속받는 자료
    this.age = age;
    this.breed = breed;
  }
  info() {
    return `
      이름: ${this.name},
      색상: ${this.color}색,
      나이: ${this.age}세,
      품종: ${this.breed}이(가)
      등록 되었습니다.`;
  }
  msg() {
    return `${super.reg()} 우리 아이 귀엽죠? :)`;
  }
}

const btn = document.querySelector('button');
const result = document.querySelector('#result');

let Petlist = new Array(); // 동물정보를 기록할 배열생성
btn.addEventListener('click', (e) => {
  e.preventDefault(); // 버튼 기본기능 막기

  const petname = document.querySelector('#petname');
  const petcolor = document.querySelector('#petcolor');
  const petage = document.querySelector('#petage');
  const petbreed = document.querySelector('#petbreed');

  const regPet = new PetTotal(petname.value, petcolor.value, petage.value, petbreed.value);
  // 등록결과 메시지 출력
  result.textContent = `${regPet.info()}`;

  // 등록된 동물 배열에 추가 후 리스트 확인 
  Petlist.push(regPet);
  console.log(Petlist);

  // 칸 비우기
  petname.value = '';
  petcolor.value = '';
  petage.value = '';
  petbreed.value = '';

  let lastNum = Petlist.length - 1;
  console.log(`${Petlist[lastNum].msg()} `);
  // 신규등록정보를 콘솔에서 확인하려면 배열의 마지막 요소를 가져오면 된다.
  // length를 구하여서 -1값을 변수로 가져와서 아래 배열에 넣으면 항상 신규동물을 찍어볼 수 있다.
  // 프로토타입에서 함수의 실행문에 return값이 있다면 그것을 변수로 받아서 상속인스턴스 객체로 가져와 재구성을 할 수 있다.
});
