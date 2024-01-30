let stars = parseInt(prompt("별의 갯수 : "));

do {
  document.write('*');
  stars--;
} while (stars > 0)

// 찍먹, 한번은 무조건 실행.
// stars 0이면 실행이 안되야하는데, do ...while에서는 1번 찍힌다