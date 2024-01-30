const result = document.querySelector("#result"); // 결괏값을 표시할 부분
const radius = parseInt(prompt("반지름의 크기는? "));
/**
 * parseInt()를 거친 값이 숫자가 아니라면 NaN이나오지만,
 * 이를 typeof()로 물어보면 무조건 number로 나온다.

 * NaN값은 falsy이므로 false로 취급됨. 조건문에는 true값만 넣을 수 있다.
 * if (radius !== NaN) {}은 쓸수 있지만, 반대 경우를 판별해 낼 수 없다.
 * isNaN()은 어떤 값이 NaN인지 판별가능. 주어진 값이 NaN이면 true, 아니면 false.
 */

//넓이 구하는 공식
let area = (r) => Math.PI * r * r;
// 둘레 구하는 공식
let circum = (r) => Math.PI * r * 2;

if (!isNaN(radius)) {
  // 반올림해서 표시
  result.innerText = `
    반지름 : ${radius},
    원의 넓이 : ${Math.round(area(radius))},
    원의 둘레 : ${Math.round(circum(radius).toFixed(3))}
  `;
} else result.innerText = `정확한 입력을 해주시기 바랍니다`