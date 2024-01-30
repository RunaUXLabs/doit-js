const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

// function showArray(삽입위치, 계산할배열) {}
function showArray(area, arr) {
  let str;
  str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str += "<td>" + arr[i] + "</td>";
  } // 배열의 값 갯수만큼 td를 반복출력하여 str에 추가대입
  str += "</tr></table>";
  // str에 테이블 디자인 완성하여 추가대입함, css에 의해 카드로 보여줌
  area.innerHTML = str;
  // str을 태그째로 삽입
}

let numbers = [2, 4, 6, 8, 10];
showArray(origin, numbers)
// 함수콜링, 원래배열 위치에다가 numbers배열을 테이블 디자인으로 삽입해라

// 기존 함수콜링+ 기존 배열값을 더한 숫자를 마지막 배열값으로 추가한다.
let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
for(value of numbers) sum += value
// numbers안에 있는 모든 값을 더해서 sum에 최종 할당해라
numbers.push(sum) // sum을 numbers의 마지막 배열값으로 추가한다.
showArray(result, numbers) // 함수콜링, 계산값 위치에다가 추가된 numbers배열을 테이블 디자인으로 삽입
