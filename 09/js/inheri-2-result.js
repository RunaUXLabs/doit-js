class BookC  {
  constructor(title, price) {
    this.title = title;
    this.price = price; 
  }
  buy() {
    // console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);  
    return `${this.title}을(를) ${this.price}원에 구매하였습니다.`
  }
}

const book1 = new BookC("자료 구조", 15000);
book1.buy();

// 기존 클래스를 확장해서 새로운 클래스 선언하기
// class 신규클래스명 extends 상속처{}
class TextbookC extends BookC {
  constructor(title, price, major) {
    // super(가지고오고싶은 프로퍼티들 쓰기, 함수는 안써도 됨)
    super(title, price);   // 기존 클래스의 프로퍼티 재사용
    this.major = major;     // 새로운 프로퍼티 정의
  }

  buyTextbook () {   // 새로운 메서드 정의
    console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
  }

  // 나중에 추가해보기, 상속받은 함수를 이용하여 변형하고 싶을 때
  newbuy() {
    // buy(); // Uncaught ReferenceError: buy is not defined
    // super.buy(); // 원본 프로퍼티로 호출이되어 출력
    // console.log('사은품은 볼펜입니다.') // 추가용 실행문

    return `${super.buy()} 사은품은 지우개더라구요 :)`
    // 리턴값으로 되어있는 프로토타입의 함수값을 받아와 여기서 추가
  }
}

const book2 = new TextbookC("인공지능", 5000, "컴퓨터공학");
book2.buyTextbook();
book2.buy(); // super로 가져오지 않아도 해당 인스턴스가 프로토타입을 상속하고 있기 때문에 그냥 출력되는데, 원본에 호출하여 출력된다.

book2.newbuy() // 실행문만 있을땐 잘 뜲, 리턴값만 있을땐 아무것도 안보임.
console.log(book2.newbuy())
// return으로 되어있는 함수값이면 보관만 되므로 어디에 찍어주라는 명령어를 같이 써야 한다.
