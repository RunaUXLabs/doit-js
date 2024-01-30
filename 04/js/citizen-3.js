// 초기화함수?
// 리셋의 개념이 속을 털어버린다는 개념(깨끗이 비운다는 개념)으로 생각하는 순간 이해안됨.
// 최초 설정한 상태로 돌린다는 개념으로 받아들이기

let init = () => {
  return function (a, b) {
    // return a - b > 0 ? a - b : b - a;
    // return a - b > 0 ? `a가 b보다 큼` : `b가 a보다 큼`;
    return a - b > 0 ? `${a}이 ${b}보다 큼` : `${b}이 ${a}보다 큼`;
    // 삼항연산자      질문 ? 참일때 : 거짓일때
  };
};

// console.log(`${init()}`);
// 오해할 수 있는 부분, init함수는 파라미터가 없다.
// console.log(`${init(30, 20)}`);
// return에 적혀있는 함수가 고대로 나옴


console.log(`${init()(16, 24)}`);
// return 안의 return을 출력을 하는데 익명함수임, ()부르고 그에맞는 파라미터를 넣어주면 된다.
// 클로저, 스코프체인이 가능하다.


// // 클로저 연습
// // 화살표함수
// let init2 = (a) =>{
//     return function(b){
//         return a-b > 0 ? a-b : b-a; 
//     }
// }
// let init10 = init2(10); // a를 10으로 고정하여 변수선언
// let init10fixed = init10(20);
// // 클로저스코프체인으로 엮은거, 20은 b값임

// console.log(init10fixed)