// 항상 참인 메인함수를 선언한다.
// 경우의 수 준비가 되면 그때 reject준비하면 됨
const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve('피자를 주문합니다.');
  });
};

// 콜백으로 부를 함수 따로 빼놓기

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('피자 도우 준비');
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('토핑 완료');
    }, 1000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('굽기 완료');
    }, 2000);
  });
};

// 소비구문 체이닝 한다.
// pizza()
//   .then((result) => step1(result)) // pizza()가 성공하면 step1() 실행
//   .then((result) => step2(result)) // step1()이 성공하면 step2() 실행
//   .then((result) => step3(result)) // step2()이 성공하면 step3() 실행
//   .then((result) => console.log(result)) // step3()이 성공하면 "굽기 완료" 표시
//   .then(() => {
//     console.log('피자가 준비되었습니다. 🍕');
//   });

// 위의 소비 코드를 아래와 같이 축약해서 표현할 수 있습니다.
pizza()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => {
    console.log("피자가 준비되었습니다. 🍕");
  });
