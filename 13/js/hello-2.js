async function displayHello() {
  console.log("Hello");
}
// 기존 함수 앞에서 예약어 async붙임, ES8부터 가능
displayHello();
// 함수콜링하면 Hello 찍힘, 그리고 Promise 뱉어냄
// ES6에서 Promise객체 선언의 귀찮음이 줄어들음