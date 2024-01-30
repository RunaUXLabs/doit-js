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
        super(title, price); // 기존클래스에서 가져옴
        this.major = major;
    }
    buyTextbook() {
        console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`);
    }
}
const book2 = new TextbookC('AI와 인공지능', 35000, '컴퓨터공학');
console.log(book2.buyTextbook());
console.log(book2.buy());


// 케이스) 실수 또는 의도하는 상황(빼먹거나, 일부러 안가져오거나)
class Textbook2C extends BookC {
    constructor(title, major) {
        super(title); // 기존클래스에서 가져옴
        this.major = major;
    }
    buyTextbook() {
        console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`);
    }
}

const book3 = new Textbook2C('디자인', 25000, '미술디자인');
console.log(book3);
console.log(book3.buyTextbook());
console.log(book3.buy());


const book4 = new Textbook2C('디자인', '미술디자인');
console.log(book4.buyTextbook());
console.log(book4.buy());
// extends와 super(파라미터)통해서 온전한 객체를 만드려면 필요한것을 다 기재해야한다. 참조가 정확하지 않으면 엉뚱한 위치에 값이 할당되고, 필요한 값이 들어오지 않으면 undefined가 뜬다. 