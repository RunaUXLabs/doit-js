let today = new Date();
// let passTime = today.getTime(today.toDateString())
// getTime() 1970년1월1일 기준으로 정해진날짜까지 ms를 뽑아줌
// today변수의 날짜부분문 뽑아사용
// console.log(passTime)

// let passedDay = passTime / (1000*60*60*24)
// console.log(passedDay)
// passedDay = Math.round(passTime / (1000*60*60*24))
// console.log(passedDay)

// 의문점. 그냥 현재날짜에서 시작날짜를 빼면 안됩니까?
// 답. ㅇㅇ. 우리의 달력이 고정값(역사적인 이슈가 있음)이 아니기 때문에 기준값에서 뺀 양값의 차를 구해서 일로 환산해야 하는것이다.

let result = document.querySelector('#result');
const firstDay = new Date('2023-09-18'); // 시작한날
let passedTime = today.getTime() - firstDay.getTime();
console.log(passedTime);
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
console.log(passedDay);
result.textContent = passedDay;