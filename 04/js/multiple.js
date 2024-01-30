function multiple1(a, b, c) {
  return a * b + c;
}
console.log(multiple1(5, 10));  // a=5, b=10, c=undefined NaN
// 인자가 부족하면, 계산이 안된다. 숫자가 없어서 계산이 안될 뿐 오류가 아님.
// 현업에서 이런거 발생하면 찾으러 가기 힘듦.

// ES6부터는 파라미터에 기본값 깔고 갈 수 있음
function multiple(a, b = 5, c = 10) {
  return a * b + c;
}

// 기본값이 있는데 인자를 갯수대로 입력하면 덮어써서 올바르게 계산해줌
console.log(multiple(5, 10, 20));  // a=5, b=10, c=20

// 인자가 모자라면 기본값 뽑아서 계산해줌
console.log(multiple(10, 20));  // a=10, b=20, c=10(default)
console.log(multiple(10));  // a=10, b=5(default), c=10(default)
console.log(multiple());


// 내가 준비한것이 패턴이면 좋겠고, 이패턴이 다양한 케이스를 대응할 수 있게 고민을 하고 수식을 짜야한다.
// 사용자가 뭘 입력해서 내가 준비한 케이스로 몰고가야한다. 외운다고되는 부분보다는, 많은 케이스 경험이 중요하다. 많이 보는것을 집중하자!

