const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

function showArray(area, arr) {
    let str;
    str = "<table><tr>";
    for (let i = 0; i < arr.length; i++) {
        str += "<td>" + arr[i] + "</td>";
    } // 배열의 값 갯수만큼 td를 반복출력하여 str에 추가대입
    str += "</tr></table>";
    // str에 테이블 디자인 완성하여 추가대입함, css에 의해 카드로 보여줌
    area.innerHTML = str;
    // str을 태그째로 삽입
}
showArray(origin, numbers)

// numbers.shift() // 0번 삭제, .shift()원본 배열에 영향 줌
// showArray(result, numbers)

let newNumbers = numbers.slice(1)
// 1번 이후 전체 추출 .slice()원본 배열에 영향 없음
showArray(result, newNumbers)
