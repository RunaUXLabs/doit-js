// 기존 생성자 함수 Book
function Book(title, price) {
    this.title = title;
    this.price = price;
}

const book1 = new Book('html기초', 2500);
console.log(book1);

// 메서드를 프로토타입으로 분리해서 관리, 이것은 기존 생성자 함수의 프로토타입과는 별개의 객체로 관리된다(원본훼손안됨). 하지만 연결되는 순간 기존 생성자로 생성된 모든 객체에 영향력을 끼친다
Book.prototype.buy = function () {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};
// 인스턴스 만들고 메서드 프로토타입으로 추가한후 메서드를 콜링했으나 잘 출력된다.
console.log(book1);
console.log(book1.buy());

// 프로토타입이 추가 된 후 새로운 인스턴스를 만들었을때 모든 요소가 다 출력된다.
// const book2 = new Book('css기초', 3500);
// console.log(book2);
// console.log(book2.buy());


/**p.330 4번내용
 * 기존 생성자 함수를 재활용하고 싶을때 .call()을 사용한다
 * function 신규생성자함수명(기존파라미터들, 새파라미터들){
 *   기존생성자함수.call(this, 기존파라미터들)
 *   this.키 = 새파라미터;
 * }
 * 로 선언한다. 기존 파라미터의 순서를 변경하면 변경된 값으로 재할당되어서 데이터가 꼬인다.
 * 객체 생성 할 때에는 new 신규생성자함수명(파라미터들)로 선언
 */

function Textbook(title, price, major) {
    Book.call(this, title, price);
    // this는 Textbook으로 찍으려는 신규 인스턴스, Book에서 title, price가 선언된거 그대로 가져온다
    this.major = major;
}

const book3 = new Textbook('자바스크립트', 3000, '컴퓨터공학');
console.log(book3);
// console.log(book3.buy());
// buy()는 가져오지 않았으므로 사용할 수 없는 함수라고 에러가 난다.


// Book()을 참조하는 Textbook()에 프로토타입으로 buyTextbook 메서드를 추가한다.
Textbook.prototype.buyTextbook = function () {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`);
};

console.log(book3.buyTextbook());
// buyTextbook 메서드가 추가되기 전에 만들어진 book3에게 해당 메서드를 물어보면 실행해준다.
// console.log(book3.buy());
// book3.buy is not a function, 가져오지 않은 buy()는 실행할 수 없다.


// 프로토타입으로 따로 관리되는것을 연결하기(귀속은 아님, 따로관리됨)
// Object.setPrototypeOf(구현해야하는 대상, 붙이려는 대상)
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book4 = new Textbook('AI와 알고리즘', 4000, '컴퓨터공학');
console.log(book4.buyTextbook());
console.log(book4.buy()); // 정상출력됨