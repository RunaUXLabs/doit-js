function changeBg() {
  const bgCount = 5; // 이미지 최종장수, 나중에 데이터화 해서 length 처리하는것을 추천

  let randomNumber = Math.floor(Math.random() * bgCount) + 1; // 이미지 장수 범위내에서 랜덤숫자 뽑아 정수처리
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
}

document.addEventListener("load", changeBg()); // 새로고침 할때마다 함수콜링
// document.onload = changeBg();

// window.onload = function () {
//   const bgCount = 5;

//   let randomNumber = Math.floor(Math.random() * bgCount) + 1;
//   document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
// };

// 응용(인터벌로 랜덤 설정)
// setInterval(changeBg,500)
