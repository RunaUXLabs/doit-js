function displayFavorites(first, ...favs) {
  let str = `가장 좋아하는 과일은 "${first}"군요`;
  // let str2 = `평범한 과일은 "${...favs}"군요`; // 에러남
  // 짬처리한 나머지를 쓰고 싶다면 전개구문의 ...을 떼고 변수명을 쓴다.
  console.log(`평범한 과일은 "${favs}"군요`);
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));

const fruits = ["a", "b", "g", "s"];
console.log(displayFavorites(...fruits));

// 전개구문형식의 파라미터는 무조건 마지막에 온다
// function displayFavorites2(...favs, last) {
//   let str = `가장 좋아하는 과일은 "${last}"군요`;
//   return str;
// }

const user = ['His', 'name', 'is', 'Hong'];
console.log(user);
console.log(...user);