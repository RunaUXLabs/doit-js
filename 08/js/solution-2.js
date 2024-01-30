const raffle = document.querySelector("#raffle"); // 버튼

// raffle.addEventListener("click", (e) => {
//   e.preventDefault(); // 버튼 새로고침 막기

//   const seed = document.querySelector("#seed");
//   const total = document.querySelector("#total");
//   const result = document.querySelector("#result");
//   let  winner = "";

//   for(let i = 0; i < total.value; i++) {
//     let picked = Math.floor((Math.random() * seed.value) + 1);
//     // 중복을 배제하라는 수식은 없으므로 뽑으라는 횟수만 반복해서 랜덤추출하고 winner에 추가대입한다.
//     winner += `${picked}번, `;      
//   }  

//   result.innerText = `당첨자 : ${winner}`;
//   result.classList.add("show");
// });


//업글) 중복 배제하여 당첨자 뽑기
// let 내로또 = new Set();
// while (내로또.size < 뽑는갯수) 내로또.add(Math.floor(Math.random() * 공갯수) + 1);
// 배포한 로또번호 뽑기에서 변수처리된것을 가져다가 응용한다.
// 사용자가 입력하는 폼에서 전체인원을 공갯수에 할당,
// 당첨자수를 뽑는갯수에 할당하면 중복없는 추첨기를 만들 수 있다.

raffle.addEventListener("click", (e) => {
  e.preventDefault(); // 버튼 새로고침 막기

  const seed = document.querySelector("#seed"); // 준비된 갯수
  const total = document.querySelector("#total"); // 뽑는 갯수
  const result = document.querySelector("#result");
  let winner = new Set();
  while (winner.size < total.value) { // 중복없이 뽑으라는 갯수가 만족 될 때 까지 반복
    winner.add( // Set()객체의 인스탄스에 추가하는것은 중복없는 값만 추가 가능
      Math.floor(Math.random() * seed.value) + 1
    );
  }

  result.innerText = `당첨자 번호 : ${[...winner]}`;
  result.classList.add("show");
});
