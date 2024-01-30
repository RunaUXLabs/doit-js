// 변수 예약어를 통한 전역/지역변수 구분과 스코프(함수 function함수명(){}, 블록 {}), 일괄정리

//------------------------------ var로 전역, 지역, 함수 스코프 설명
// var factor = 7; // 전역변수

// function calc() {
//   var num = 5; // 지역변수, 함수밖으로 못나감, return으로 반환하는 경우 가능
//   factor = 10; // 재할당, 전역변수로 인식
//   // console.log(factor); // 실행문으로 전역변수로 선언된 factor 찍어보기

//   // return num * factor;   // num 변수에 접근할 수 없음
//   return num;   // 함수콜링시 나갈 수 있음
// }

// console.log(factor);
// // console.log(num); // 지역변수를 밖에서 물어보면 에러뜲 num is not defined
// calc(); // 함수콜링
// console.log(calc());


//---------------------------- let으로 전역, 지역, 함수/블록스코프 설명, const는 생략
// let factor = 7; // 전역변수

////-------------------- let이지만 함수스코프 적용
// function calc() {
//   let num = 5; // 지역변수, 함수밖으로 못나감, return으로 반환하는 경우 가능
//   factor = 10; // 재할당, 전역변수로 인식
//   // console.log(factor); // 실행문으로 전역변수로 선언된 factor 찍어보기

//   // return num * factor;   // num 변수에 접근할 수 없음
//   return num;   // 함수콜링시 나갈 수 있음
// }

// console.log(factor);
// console.log(num); // 지역변수를 밖에서 물어보면 에러뜲 num is not defined
// calc(); // 함수콜링
// console.log(calc());
// let과 var는 전역으로 선언되면 똑같구만, 지역이어도 return으로 반환받으면 똑같구만!

////-------------------- 블록스코프 적용
{
  // let num = 5; // 지역
  // factor = 10; // 전역
  // return num; // 에러남, Illegal return statement
}
// 지역변수는 스코프 밖을 나갈 수 없다

// console.log(factor);
// console.log(num); // 에러






// ------------------------------------------------------------------------------------------------------
// 책예제
// const factor = 5; // 전역변수

// // // 함수스코프
// function calc() {  
//   return num * factor;   // num 변수에 접근할 수 없음
// } // Uncaught ReferenceError: num is not defined

// // 블록스코프
// {
//   const num = 10; // 여기에 선언된 num은 블록스코프 밖에 나갈 수 없다  
//   // let result = calc();
//   // console.log(`result : ${result} `);
// }


// p.130
// scop-6.js
// scop-5.js를 수정한것임

const factor = 5;

function calc(num) {
  return num * factor;
} // 함수를 선언할 때, 반환에 필요한 파라미터를 선언해준 함수로 바꿔야 한다.(핵심!!!)

// 블록스코프
{
  // 책내용
  // let result = calc(30); // 인자 넣어서 함수콜링후 리턴값을 변수에 할당
  // console.log(`result : ${result} `);

  let calc = function (num) {
    return num * factor;
  };
  console.log(calc(30));
  // 교수응용, 익명함수로 바꿔놓는다.
  // 지역변수로 선언된 익명함수

  // 책내용
  let result = calc(50);
  console.log(`result : ${result} `);
  console.log(`${calc(100)}`); // 교수변경, 밖에서 콘솔



  // 익명함수를 화살표함수로 변환하여 지역변수에 할당
  // let calc3 = (num) => { return num * factor; };
  let calc3 = num => num * factor; // 화살표함수 축약





}





// 블록스코프 안에서 선언된 let, const 변수들은 못나오는게 맞다.
//(참고) 파라미터는 기본적으로 var로 선언된 변수이며, 생략되어서 안보이는 것 뿐
// 함수를 선언할 당시에 파라미터를 쓰면 전역이므로 함수스코프 안에서의 계산에는 문제가 없게된다.
// 밖에서 파라미터 할당하여 함수를 콜링하는것에는 오류가 생기지 않는다.
// 다만, 해당함수를 let,const으로 선언(익명함수로 만들기)하고 블록스코프안에 있다면 밖에서 콜링시 오류생김. 
// {
//   let result = calc(200)
//   console.log(`${result}`)
// }




