const students = ['배씨 ', '최씨', '황씨', '김씨', '이씨', '임씨', '박씨', '송씨', '타카코', '연씨', '윤씨'];


// 배열명.forEach(function(파라미터){
//   실행문
// })

// 파라미터는 내가짓는 이름, 무의미한 단어 피하기
// students.forEach(function (a) {
//   document.write(`${a}, `);
// });

// 배열하나 만들어서 forEach문을 써서 반복실행 시켜보자


// 화살표 함수를 사용한다면
// 어떻게해서든 덜쓰겠다는 의지!!!!
// 배열.forEach(파라미터 => 실행문(파라미터))
// 배열.forEach(() => 실행문())
students.forEach(student => document.write(`${student},<br> `));

// 리팩토링(최적화를 하려면 그에 상응하는 학습이 필요하다)


// 1분복습, 좋아하는 과일 화살표 함수로 출력하기
let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(fruit => document.write(`${fruit}, `));

// 아까만든 배열로 forEach문에 화살표 함수를 써보자