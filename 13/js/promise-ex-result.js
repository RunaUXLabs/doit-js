const order = new Promise((resolve, reject) => {
  let coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if (coffee != null && coffee != "") {
    document.querySelector(".start").innerText = `${coffee} 주문 접수`;
    setTimeout(() => { resolve(coffee); }, 5000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});

function display(result) {
  document.querySelector(".end").innerText = `${result} 준비 완료 🥤 `;
  document.querySelector(".end").classList.add("active");
  document.querySelector(".start").classList.add("done");
}

function showErr(err) {
  document.querySelector(".start").innerText = err;
}

// console.log(order);
order
  .then(display)
  .catch(showErr);

// 따로 reject를 설정하지 않을 경우 아래와 같이 간단하게 작성
// p.480 콜백함수식과 같은 결과가 나오는 프로미스 작성방법  
// let coffee = "아메리카노";
// const order = new Promise(resolve => {
//   console.log(`${coffee} 주문 접수`);
//   setTimeout(() => {
//     resolve(coffee);
//   }, 3000);
// });

// function display(result) {
//   console.log(`${result} 준비 완료 🥤 `);
// }

// order.then(display);