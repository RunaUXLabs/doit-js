// let stars = parseInt(prompt("별의 갯수 : "));
// // 조건먼저 체크하는 while문
// while (stars < 10) {
//   document.write('*');
//   stars--; // 탈출각
//   // 내가 입력한 숫자에서 1씩 감소하고 0에 도달하면 스톱
// }

// 중간범위에서만 반복 돌리기
// 15개 까지 찍히는 구문에서 사용자가 원하는 숫자를 뺀 나머지만 별 찍게 만들기
let stars2 = parseInt(prompt("찍고 싶은 별의 갯수(해당 UI는 최대 15개까지 찍힙니다) : "));
while (stars2 <= 15) {
  document.write('*');
  stars2++; // 내가 입력한 숫자에서 15가 될때 까지의 범위를 지정하여 반복하고 15가 되면 탈출
}


// 반복문을 쓸때는 무조건 탈출각을 세워야한다, 그렇지 않으면 브라우저가 과부하가 걸려 멈춘다.