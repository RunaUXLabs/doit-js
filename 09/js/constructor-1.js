// let a1 = new Array()
// let a2 = new Object()
// let a3 = Number()


// 생성자 함수 형식
function Book(a, b, c = false) {
  this.title = a;
  this.pages = b;
  this.done = c;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}
// function 함수명(파라미터){구성물}
// const 함수명(파라미터) = function(){구성물}
const book1 = new Book("웹 표준의 정석", 648, false);
const book2 = new Book("점프 투 파이썬", 360, true);

// console.log(book1, book2);

// console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
// console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);


const book3 = new Book('Vue.js 입문', 230, false);
console.log(book3);
console.log(`${book3.title} - ${book3.pages}쪽 - ${book3.finish()}`);

const book4 = new Book('Vue.js 입문', 230);
console.log(book4);


const book5 = new Book('Vue.js 입문2', 330, true, 김아무개);
console.log(book5); // Uncaught ReferenceError: 김아무개 is not defined
// 나중에 파라미터 전달에 있어서 개수가 맞지 않을 때에 대한 대비 나머지 매개변수에 대한 후처리를 미리 해두면 오류에 인해서 멈추는것을 막을 수 있다.
