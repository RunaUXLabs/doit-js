const students = ['배씨 ', '최씨', '황씨', '김씨', '이씨', '임씨', '박씨', '송씨', '신씨', '연씨', '윤씨'];
console.log(students);
// for(초기값; 조건문; 증가감식){ 실행문 }

for (let i = 0; i < students.length; i++) {
  document.write(`${students[i]}<br>`);
}

// 신규배열을 만들어 for문을 돌려보자, 문서든 콘솔이든 어디들 찍히게 해보자
// 1분복습하기, 본인이 좋아하는 색상 배열 출력
const colors = ["Red", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
  document.write(`${colors[i]}<br>`);
}

// 배열전용 접근 for...of를 맛보자
// for (const 배열안의값에 대응할 변수 of 배열) {
for (const student of students) {
  document.write(`${student}<br>`);
}