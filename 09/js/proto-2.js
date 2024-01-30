function newBook(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
}
// 메서드를 외부로 분리할 수 있다, 메모리를 아낄수 있는 장점이 있다.
// 초기 틀 만들때 함수에 대해서 생각할 필요가 없음, 나중에 수정하면 되니까.
newBook.prototype.finish = function () {
  this.done === false ? str = "읽는 중" : str = "완독";
  return str;
};

const nBook1 = new newBook("웹 표준의 정석", 648, false);
const nBook2 = new newBook("점프 투 파이썬", 360, true);

console.log(nBook1.finish());