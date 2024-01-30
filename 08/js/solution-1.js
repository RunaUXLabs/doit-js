const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");

const today = new Date();  // 오늘
// 현재 기준시간 출력하기
let krDate = new Intl.DateTimeFormat('kr', {
	dateStyle: 'full',
	timeStyle: 'short',
}).format(today);
current.textContent = `${krDate} 기준`;


btn.addEventListener("click", () => {
	// 입력 받은 날짜 Date 객체에 저장 
	const birthDay = new Date(`
		${birthYear.value}-${birthMonth.value}-${birthDate.value}
	`);
	// new Date('2023-04-17') 형식으로 작성하면 편함

	let passed = Date.now() - birthDay.getTime(); // 총괄 지난시간
	let passedDays = Math.floor(passed / (1000 * 60 * 60 * 24)); // 일 환산
	let passedHours = Math.floor(passed / (1000 * 60 * 60)); // 시간 환산

	resultDays.textContent = `${passedDays}일이 흐르고, `;
	resultHours.textContent = `${passedHours}시간이 흘렀습니다.`;

	// 값 비우기
	birthYear.value = "";
	birthMonth.value = "";
	birthDate.value = "";
});


// 사용자가 할 수 있는 또라이짓 or 의도
// 1. 문자열 또는 계산이 안되는 특문 입력
// 2. 기념일 기준인데 현재 기준일 이후를 입력(미래 기념일 체크)
// 	- 미래날짜에 대한 계산을 할 수 없습니다.
// 	- 디데이 카운터의 기능을 추가할 경우에는 가능함(+추가보완개념)