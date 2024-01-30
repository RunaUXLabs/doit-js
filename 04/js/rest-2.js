function displayFavorites(first, ...favs) {
  let str = `가장 좋아하는 과일은 "${first}"군요`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));

const fruits = ["a", "b", "g", "s"];
console.log(displayFavorites(...fruits));

// 전개구문형식의 파라미터는 무조건 마지막에 온다
// function displayFavorites2(...favs, first) {
//   let str = `가장 좋아하는 과일은 "${first}"군요`;
//   return str;
// }

const user = ['His', 'name', 'is', 'Hong'];
console.log(user);
console.log(...user);