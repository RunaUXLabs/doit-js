// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 섭씨 : celsius, 화씨 : fahrenheit

// let fah = parseFloat(prompt("변환할 화씨 온도"));
// 사용자에게 숫자로 받은 수치(실수)를 변수에 넣는다.

// let cel;
// // 값할당 안한상태

// cel = ((fah - 32) / 1.8)
// // .toFixed(n); 반올림하여 소수점 n자리까지 출력 
// cel = cel.toFixed(1);
// // alert(`화씨 ${fah}℉는 섭씨 ${cel}℃입니다.`);
// // document.write(`화씨 ${fah}℉는 섭씨 ${cel}℃입니다.`)



// --------------------------------
// 퀴즈. 궁금한 섭씨를 입력하면 화씨로 변환해주기
// body에 출력하기

// let cel2 = parseFloat(prompt("화씨로 변경할 궁금한 섭씨 온도를 적어주세요(숫자만)"));
let cel2 = Number(prompt("화씨로 변경할 궁금한 섭씨 온도를 적어주세요(숫자만)"));
// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 화씨 온도 = (섭씨온도 * 1.8) + 32
let fah2 = (cel2 * 1.8) + 32;
fah2 = fah2.toFixed(2);
document.write(`당신이 입력한 섭씨 온도 ${cel2}℃는 화씨로 변환하면 ${fah2}℉ 입니다.`);