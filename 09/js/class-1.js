// 자바스크립트의 class는 생성자 함수를 좀 더 관리하기 쉬우려고 만든 형식임(설탕바름)
class Book2 {
  constructor(a, b, c = false) {
    this.title = a;
    this.pages = b;
    this.done = c;
  }
  finish() {
    let str;
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}
const book1 = new Book2("웹 표준의 정석", 648, false);
const book2 = new Book2("점프 투 파이썬", 360, true);

console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);
const book3 = new Book2("VUE", 10);
console.log(book3);
// done: false
// 기본값 할당됨, 기본생성자 함수에서는 파라미터 부족하면 undefined로 할당된다.
const book4 = new Book2("VUE", 10, true, 김아무개);
console.log(book4); //constructor-1.js:29 Uncaught ReferenceError: 김아무개 is not defined
// 나중에 파라미터 전달에 있어서 개수가 맞지 않을 때에 대한 대비 나머지 매개변수에 대한 후처리를 미리 해두면 오류에 인해서 멈추는것을 막을 수 있다.


