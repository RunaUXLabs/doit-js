let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza)
    resolve('피자를 주문합니다.');
  else
    reject('피자를 주문하지 않습니다.');
});

pizza
  .then(
    result => console.log(result)
  )
  .catch(
    err => console.log(err)
  )
  .finally(
    () => console.log('완료')
    // console.log('완료')
    // 이렇게 쓰면 비동기 안되고 얘먼저 뜲
    // 항상 프로미스 소비코드에서는 함수형으로 써야한다. 콜백함수를 이어붙여 비동기처리를 했다는 개념에서 시작한것을 잊지 말자
  );   