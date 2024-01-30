// setTimeout(콜백함수, 시간)
// 딜레이의 개념, 해당시간후에 함수실행시켜줘

// setTimeout(function(){
//   console.log("안녕하세요?")
// }, 3000);

// setTimeout(() => {
//   console.log("안녕하세요?")
// }, 3000);

let greet = () => console.log("안녕하세요?");
setTimeout(greet, 3000);
