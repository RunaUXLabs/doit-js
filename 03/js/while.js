let stars = parseInt(prompt("별의 갯수 : "));
// 조건먼저 체크하는 while문
while (stars < 10) {
  document.write('*');
  stars--; // 탈출각
  // 내가 입력한 숫자에서 1씩 감소하고 0에 도달하면 스톱
}


// 반복문을 쓸때는 무조건 탈출각을 세워야한다, 그렇지 않으면 브라우저가 과부하가 걸려 멈춘다.