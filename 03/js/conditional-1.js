// let x = 10;
// if(조건문){실행문}
// 조건문이 참이면 실행문을 읽으러 간다, 아니면 다음줄
// if (x < 5) {
//   console.log(`x는 5보다 작습니다`);
// }
// console.log(`x는 5보다 큽니다`);


// if (x < 5) {
//   console.log(`x는 5보다 작습니다`);
// } else {
//   console.log(`x는 5보다 큽니다`);
// }

// if (true) {
//   console.log(`x는 5보다 작습니다`);
// }
// console.log(`if문 탈출`);

// if(조건){실행문1}else{실행문2}
// 조건문이 참이면 실행문1, 아니면 실행문2, 그다음에 다음줄


let userInput = prompt("이름을 입력하세요.");
// 프롬프트에서 취소버튼을 누르면 null을 반환한다
if (userInput === null) {
  alert("취소했습니다.");
} else {
  alert(userInput);
}