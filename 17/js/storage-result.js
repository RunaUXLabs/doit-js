let students = ["Kim", "Lee", "Park"];
console.log(`현재 students : ${students}`);

// 로컬 스토리지에 저장하기
localStorage.setItem("students", JSON.stringify(students));
// 스토리지에 students 키로 배열 저장

// 로컬 스토리지에서 가져온 후 추가하고 다시 저장하기
let localData;
if (localStorage.getItem("students") === null) {
  // 스토리지에 students라는 키가 있는지 체크하여 null이면 localData를 빈배열로 만들어라
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
  // 스토리지의 students 키 값을 localData로 저장
}
console.log(localData);
localData.push("Choi");  // localData에 Choi 추가
console.log(`추가 후 students : ${localData}`);
// 저장소에 최씨 정보 저장한거 아님, 변수에만 할당한부분이니 헷갈리지 말 것.

localStorage.setItem("students", JSON.stringify(localData));
// 스토리지에 localData를 JSON 형식으로 저장     

// 로컬 스토리지에서 특정 값 삭제하기
const indexOfValue = localData.indexOf("Lee");   // 인덱스 알아내기
console.log(indexOfValue);
localData.splice(indexOfValue, 1);  // 인덱스에 해당하는 값부터 1개 삭제
console.log(`삭제 후 students : ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

// 로컬 스토리지에서 특정 키 삭제하기
localStorage.removeItem("students");