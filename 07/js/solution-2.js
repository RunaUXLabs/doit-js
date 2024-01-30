const btn = document.querySelector('#bttn');
const notiBox = document.querySelector('#noti-box');

btn.addEventListener('click', () => {
  const noti = document.createElement('div');
  noti.classList.add('noti');
  noti.innerText = "알림 내용이 표시됩니다.";
  // 프라이빗하게 운영한다면 고정값, 자체내용을 확인하려면 변수
  notiBox.appendChild(noti);

  setTimeout(() => noti.remove(), 3000);
  // 각 noti 생성된 시간을 기반으로 3초후에 사라짐
  // 같은 noti라는 이름을 가졌다고 해서 같은 객체 아님
  // 비동기, 리듬감있게 누르면 사라지는것도 리듬감있게 사라짐
});
