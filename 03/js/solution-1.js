const arr = [1, 3, 5, 7, 53, 43, 18, 9, 9, 11, 13, 15, 17, 19, 1, 2, 50, 100, 6, 4];

// 나중에 데이터를 만나면 .filter() 함수를 돌리면 원하는 값 찾을 수 있다.
// for문의 로직을 이해하기위해 만들어 놓은 예제다.

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 80) {
// 		document.write(`${arr[i]}, `);
// 	}
// }

// for ..of로 쓰기
// let comment = ``; // 빈값으로 해놓을 거지만 굳이`` 빈스트링으로 구성해 놓은 이유는 아래에 문구를 찍을때 데이터 초기형태가 찍히기 때문에 방지하는 용도
// for (let data of arr) {
// 	if (data > 27) {
// 		comment += `${data} `; // 값 누적
// 	}
// }
// document.write(`27보다 큰 값을 가지고 있는 데이터는 ${comment} 입니다.`);


// 도전! n보다 큰 수를 구해라의 n을 사용자가 원하는대로 뽑게 만들어보기
// 힌트, 프롬프트를 이용하여 숫자를 받아 변수를 대입한다.
const number = parseInt(prompt("배열에서 지정하신 수 이상을 찾아드릴께요, 원하시는 숫자를 입력해주세요."));
document.querySelector('h1 > span').textContent = number;
// 사용자가 입력한 숫자를 DOM에 적용한다

// 배열값도 넣기(전개구문)
// p.148 전개구문은 배열의 값을 스트링으로 바꿔준다
document.querySelector('p > span').textContent = [...arr];

let comment2 = ``;
for (data of arr) {
	if (data > number) {
		comment2 += `${data} `;
	}
}
document.write(`입력하신 ${number}보다 큰 값을 가지고 있는 데이터는 ${comment2} 입니다.`);
// 사용자가 '내가 ui를 컨트롤 하고있군'이라는 착각을 하게 만들자!