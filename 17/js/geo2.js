const getLocation = document.querySelector('#getLocation');

getLocation.addEventListener('click', function (e) {
  e.preventDefault(); // 기본기능 막기

  if (navigator.geolocation) {
    // window.navigator.geolocation 객체가 있으면
    // .getCurrentPosition(성공시콜백, 에러시콜백, 옵션-기본값)연결, 1회성
    // navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    // watchPosition 옵션을 객체로 따로 설정
    const options = {
      enableHighAccuracy: true, // 위치의 정확도 높임, 기본값은 false
      maximumAge: 0, // 0 이면 항상 새로운 위치 확인, 기본값은 infinity
      timeout: 5000, // 시간제한 ms, 5초, 실시간으로 들어오는 정보가 5초를 넘겨서도 갱신이 안되면 끊음 
    };

    // .watchPosition()은 실시간확인하는 옵션을 넣었음
    let watchId = navigator.geolocation.watchPosition(showPosition, errorPosition, options);

    setTimeout(function () {
      navigator.geolocation.clearWatch(watchId);
      // .watchPosition()은 .clearWatch()로 종료시킬수있다
      console.log('종료됨');
    }, 1000 * 60 * 5);
    // 5분 후에 자동 종료되도록 setTimeout()설정함

  } else {
    alert('지오로케이션을 지원하지 않습니다.');
  }
});

// 성공시
function showPosition(position) {
  document.querySelector("#result").innerHTML = `
          <b>위도:</b> ${position.coords.latitude},
          <b>경도:</b> ${position.coords.longitude}
      `;// 기록이 남겨지는것이 아니라 실시간 위치의 수치가 변동되는것을 확인할 수 있다.
  // 응용)기록으로 남기도록 변경을 하면 path를 만들수 있음.

  // 구글맵 기준 현재위치 기준 음식점찾기
  // https://www.google.co.kr/maps/search/%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91/data=!3m1!4b1!4m7!2m6!3m5!1z66CI7Iqk7Yag656R!2s36.635,+127.4577!4m2!1d127.4577498!2d36.6350041?hl=ko&entry=ttu
  let 현재위도 = position.coords.latitude;
  let 현재경도 = position.coords.longitude;
  let 주변음식점 = `https://www.google.co.kr/maps/search/레스토랑/data=!3m1!4b1!4m7!2m6!3m5!1z66CI7Iqk7Yag656R!2s${현재위도},+${현재경도}!4m2!1d${현재경도}!2d${현재위도}?hl=ko&entry=ttu`;
  document.querySelector("#restaurant").innerHTML = `
          <a href='${주변음식점}'>현재위치에서 주변음식점 찾기</a>
      `;
};
// 데스크탑의 경우는 IP기준으로 navigator.geolocation이 찍히므로 정확도가 떨어질 수 있으나, 모바일 데이터네트워크로 찍은 위치값은 정밀도가 올라간다.

// 실패시
function errorPosition(err) {
  alert(err.message);
}


//----- navigator.geolocation으로 카카오맵에위치 표시
let mapContainer = document.querySelector('#kakaoMap'), // 지도를 표시할 div 
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 6 // 지도의 확대 레벨 
  };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

// HTML5의 geolocation으로 사용할 수 있는지 확인
if (navigator.geolocation) {

  // GeoLocation을 이용해서 접속 위치추출
  navigator.geolocation.getCurrentPosition(function (position) {

    let lat = position.coords.latitude, // 위도
      lon = position.coords.longitude; // 경도

    let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성
      message = '<div class="iw">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용

    displayMarker(locPosition, message); // 마커와 인포윈도우를 표시
  });

} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

  var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
    message = 'geolocation을 사용할수 없어요..';

  displayMarker(locPosition, message); // 마커와 인포윈도우를 표시
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map,
    position: locPosition
  });

  var iwContent = message, // 인포윈도우에 표시할 내용
    iwRemoveable = true;

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable
  });

  // 인포윈도우를 마커위에 표시합니다 
  infowindow.open(map, marker);

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
}    