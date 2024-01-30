const result = document.querySelector("#result");  // 결괏값을 표시할 부분
const firstDay = new Date("2023-09-18");  // 시작한 날
const today = new Date();  // 오늘

// getTime()은 1970년 1월1일을 기준으로 현재까지 소요된 시간을 밀리초로 반환한다.
// Date.now()도 동일한 결과를 반환한다.
let passedTime = Date.now() - firstDay.getTime();  // 시작한 날부터 오늘까지 흐른 시간(밀리초)
// let passedTime = today.getTime() - firstDay.getTime();  // 시작한 날부터 오늘까지 흐른 시간(밀리초)
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));  // 밀리초를 일(date) 수로 계산

result.innerText = passedDay;