const students = ["Park", "Kim", "Lee", "Kang"];

// for(변수 of 배열명) {실행문}
for (let student of students) {  
  // document.write(`${student},<br> `);
  // 배열 안에서 값만 출력함
  // for..of문에서 값을 쓰고 싶으면${변수명}을 써주면 된다

  // //혹시이렇게 쓰면?
  // document.write(`${students[student]},<br> `)
  // //undefined 출력됨

  // document.write(`${students[0]},<br> `)
  // 배열에서 고정값만 추출(기존 배열에서 값가져오는 법), 반복횟수는 배열 값수만큼
}


//혹시 배열에 for ...in을 쓰면?
for(let student in students){
  // document.write(`${student}<br>`);
  // 0123 배열에는 키가 없으므로 키를 담당하는 인덱스 번호가 출력
  // document.write(`${students[student]}<br>`);
  // // 각 배열값 출력

  // document.write(`${students[0]},<br> `)
  // 배열에서 고정값만 추출(기존 배열에서 값가져오는 법), 반복횟수는 배열 값수만큼
}