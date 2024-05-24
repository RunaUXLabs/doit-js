function showData(name, age) {
  alert(`안녕하세요? ${name}님. 나이가 ${age}살이군요.`);
}
// 파라미터에 함수를 넣는 형식을 콜백함수라고 한다.
function getData(c) {
  let userName = prompt("이름을 입력하세요.");
  let userAge = prompt("나이를 입력하세요.");
  c(userName, userAge);
  // 뭔지모르는 c함수가 콜링됐다(인자1, 인자2)
}
// 파라미터에 함수를 넣는 형식으로 getData()를 만들었다.
// 해당 함수는 userName과 userAge를 입력받아 실행된다.


getData(showData);
/**
 * getData()함수에 showData라는 파라미터를 넣었다(함수명 삽입)
 * c(userName, userAge)라는 함수가 콜링이 되었으니
 * 실행이 되어야 하는데 showData(userName, userAge)로 매칭이 되어
 * 실행이 된다.
 */

// 비효율적인 구조이지만, 콜백함수의 흐름을 외부함수 콜링형식으로 짜보자.
// function foodMsg(callback) {
//   let food = prompt("점심 뭐드실건가요?🥪");
//   callback(food);
// }
// function callMsg(meal) {
//   alert(`점심시간에는 꼭 ${meal}을 드셨으면 좋겠어요😋`);
// }
// foodMsg(callMsg);