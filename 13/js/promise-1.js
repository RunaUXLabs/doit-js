/** 객체생성의 개념
    let 변수 = new 객체명(인자1, 인자2) <--보통은 값정도만 들어감
    let 변수 = new Promise(화살표함수)  <--함수가 들어가니 규모가 큼
    let 변수 = new Promise((비동기 성공했을때 함수, 비동기 실패했을 때 함수)=>{실행문})

    let 변수 = new Promise((성공함수명, 실패함수명) => {
      성공함수()
      실패함수()
      // 함수의 미완성 상태일수도 있다. 아직 함수가 뭘 할지는 모름
      // 성공함수()의 파라미터를 then()으로 넘기고, 실패함수() 파라미터를 catch()로 넘긴다
    })
    // 요기까지가 제작코드임
    
    // 변수.then().catch()
    변수
      .then(
        // 비동기 성공했을때
        // 제작코드부분에서 알수 없었던 함수상태가 여기서 완결되고 실행된다.
      )
      .catch(
        // 비동기 실패했을때
        // 제작코드부분에서 알수 없었던 함수상태가 여기서 완결되고 실행된다.
      )
    // 이게 소비코드임, 메서드체이닝

*/


let likePizza = false;      // 이 값을 false로 바꿔서도 테스트해 보세요. 
const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve('피자를 주문합니다.');
  else reject('피자를 주문하지 않습니다.');
});
pizza
  .then(result => console.log(result))
  .catch(err => console.log(err));

// 아래와 같이 작성할 수도 있음  
// pizza.then(
//   result => console.log(result),
//   err => console.log(err)
// );      
