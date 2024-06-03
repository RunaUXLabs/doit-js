function newBook(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
}
// 메서드를 외부로 분리할 수 있다, 메모리를 아낄수 있는 장점이 있다.
// 초기 틀 만들때 함수에 대해서 생각할 필요가 없음, 나중에 수정하면 되니까.

// newBook.prototype.finish = function () {
//   this.done === false ? str = "읽는 중" : str = "완독";
//   return str;
// };

const nBook1 = new newBook("웹 표준의 정석", 648, false);
const nBook2 = new newBook("점프 투 파이썬", 360, true);

// console.log(nBook1.finish());

/** 
 * 정리하기!
 * 1. ver.1의 생성자 함수에는 메서드를 선언하지 않고 쿠키를 100번 대 까지 찍었다.
 * 2. ver.2로 업그레이드를 하면서 프로토타입으로 X라는 메서드를 추가하였고, 101번부터 150번 대 까지 쿠키를 찍었다.
 * 3. 여기서 ver.1의 87번 쿠키한테 X라는 메서드를 실행시키면 그게맞는 리턴값을 뱉어낸다.
 * 4. 이것이 가능한 이유는 p.305에서 객체가 참조주소를 전달한다는 개념에 얹어서 생각하면된다.
 * 5. 생성자 함수를 참조해서 ver.1의 1~100번대 쿠키와 ver.2의 101~150번 대 쿠키를 찍었고 ver.2와 상관없는 87번 쿠키에게 업데이트 된 X메서드를 물어보면 참조로 전달받았기 때문에 대답을 할 수 있는 개념.
 */