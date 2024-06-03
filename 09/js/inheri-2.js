// 기존 클래스 구문
class BookC {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    buy() {
        console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
    }
}

const book1 = new BookC('자료구조', 15000);
console.log(book1.buy());


/**
 * 상속을 원하는 신규 클래스 구문
 * class 신규 extends 기존클래스{
 *      constructor(기존파라미터, 신규파라미터){
 *          super(기존파라미터)
 *          this.신규키 = 신규파라미터
 *     }
 * }
 * extends는 class안의 모든 메서드를 상속시킨다.
 * super(프로퍼티)는 필요한것만 가져올 수 있으며,
 * constructor에서 키:값을 구성하는 용도로 사용한다.
 */
class TextbookC extends BookC {
    constructor(title, price, major) {
        super(title, price);
        // 기존클래스에서 가져오려는거 super()함수에 인자로 넣기
        this.major = major;
        // 내가 TextbookC에 신규 추가하려는 거
    }
    buyTextbook() {
        console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`);
    }
}
const book2 = new TextbookC('AI와 인공지능', 35000, '컴퓨터공학');
console.log(book2.buyTextbook());
console.log(book2.buy());
/**정리
 * 1. extends를 이용하여 확장한 TextbookC는 BookC 자체를 참조한다고 생각한다. 여기에서 내가 따로 메서드를 가져오지 않아도 참조하는 개념으로 받아들이면 된다.
 * 2. 단!!!!! 해당 메서드에 필요한 프로퍼티를 super()를 통해 가져오지 않으면 참조출처의 메서드는 정확하게 출력되지 않고 undefined를 뱉어낸다. 기존 설정된 자리의 인자를 가지고 와서 메서드를 실행시켜 엉뚱한 값을 뱉어내게 된다.
 */


// 잘못된 케이스예제) 실수 또는 의도하는 상황(빼먹거나, 일부러 안가져오거나)
class Textbook2C extends BookC {
    constructor(title, major) {
        super(title); // 기존클래스(title과 price가 있으나 title만 사용하려고 함)에서 가져옴
        this.major = major;
    }
    buyTextbook() {
        console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`);
    }
}
// Textbook2C는 파라미터 2개만을 요구하고 있는 상태
const book3 = new Textbook2C('디자인', 25000, '미술디자인');
console.log(book3);
// 인자들이 자리를 잘못잡아 메서드가 엉뚱한 인자를 참조한다.
console.log(book3.buyTextbook());
console.log(book3.buy());

// 파라미터가 온전히 2개만 필요한 형태로 찍어냄.
const book4 = new Textbook2C('디자인', '미술디자인');
console.log(book4.buyTextbook());
console.log(book4.buy());
// 자리는 올바르게 맞으므로 buyTextbook()은 잘 찍힘, 하지만 buy()는 price를 받는 메서드이고 Textbook2C에는 price가 없음. 해당 키에 값을 undefined로 처리하여 메서드가 실행된다.


/**생성자 함수 확장과 다른점
 * 클래스 문법 확장에서는 에러가 나지 않는다! 
 * super에서 자리를 잘못잡으면 엉뚱한 참조를 한다.
 */
