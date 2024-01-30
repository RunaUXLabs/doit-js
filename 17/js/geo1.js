const getLocation = document.querySelector('#getLocation');

getLocation.addEventListener('click', function (e) {
  e.preventDefault(); // 버튼 클릭시 전송 후 새로고침 막기

  if (navigator.geolocation) {
    // window.navigator.geolocation 객체가 있으면
    // .getCurrentPosition(성공시콜백,에러시콜백,옵션-기본값)연결, 1회성
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
  } else {
    // window.navigator.geolocation 객체가 없으면 메시지 출력
    alert('지오로케이션을 지원하지 않습니다.');
  }
});

// 위치정보 탐색 허용시 콜링되는 함수
function showPosition(position) {
  console.log(position);
  document.querySelector("#result").innerHTML = `
        <b>위도:</b> ${position.coords.latitude},
        <b>경도:</b> ${position.coords.longitude}
      `;
};

// 위치정보 탐색 거부시 콜링되는 함수
function errorPosition(err) {
  alert(err.message);
}