const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

// let numbers = [2, 4, 6, 8, 10];
let numbers = [10];

// UI보완 미션
// UI에 카드를 뿌린다(갯수는 랜덤), 사용자가 카드를 선택하면 해당 카드에서 값을 추출하여 배열에 추가한다. 그배열로 나머지를진행한다.
// 사용자가 그 많은 카드를 선택(click이벤트 연결)한다로 진행하고, 카드의 갯수가 랜덤이니 forEach를 이용하여 패턴화 시킨다.
// 사용자가 카드를 다 고르고(배열완성), 결과보기 버튼을 누르면 showArray(), tail() 콜링

const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
// 파라미터로 들어온 배열 arr의 길이를 재서 1이상이면 1번값 이후 전체를 추출하여 반환, 1이면 배열전체 반환

// 아래와 같이 선언할 수도 있습니다.
// function tail(arr) {
//     let resultArr;
//     if (arr.length > 1) {
//         resultArr = arr.slice(1);
//     } else {
//         resultArr = arr;
//     }
//     return resultArr;
// }

// origin.innerText = numbers;
// result.innerText = tail(numbers);

const showArray = (area, arr) => {
    let str = "<table><tr>";
    for (let value of arr) str += `<td>${value}</td>`;
    str += "</tr></table>";
    area.innerHTML = str;
};
showArray(origin, numbers);
showArray(result, tail(numbers));