// 청주에 있는 스타벅스매장 클러스터러로 표시하기

// 이지디자인컴퓨터학원 기준
const 학원위도 = 36.634997,
    학원경도 = 127.4577953;

let 지도상자 = document.querySelector('#map'), // 지도를 표시할 div 
    지도옵션 = {
        center: new kakao.maps.LatLng(학원위도, 학원경도), // 지도의 중심좌표 - 이지스퍼블리싱
        level: 12 // 지도의 확대 레벨
    };
// 지도 생성 new kakao.maps.Map(지도표시할곳, 지도옵션)
let 기준지도 = new kakao.maps.Map(지도상자, 지도옵션);

// 클러스터러 객체만들기 new kakao.maps.MarkerClusterer(옵션)
let 클러스터러옵션 = {
    map: 기준지도, // 클러스터러를 표시할 지도
    averageCenter: true, // 클러스터러에 포함된 마커들의 평균 위도/경도 중심으로 클러스터러의 중심위치설정
    minLevel: 6 // 클러스터링 할 최소지도레벨
};
let 스벅클러스터러 = new kakao.maps.MarkerClusterer(클러스터러옵션);

// 각 매장 정보를 객체로 정리
let 스타벅스매장리스트 = [
    {
        이름: `스타벅스 충북대점`,
        위치: new kakao.maps.LatLng(36.6340038, 127.4597014)
    },
    {
        이름: `스타벅스 청주봉명DT점`,
        위치: new kakao.maps.LatLng(36.6467291, 127.4646927)
    },
    {
        이름: `스타벅스 청주사직DT점`,
        위치: new kakao.maps.LatLng(36.6359282, 127.4811478)
    },
    {
        이름: `스타벅스 청주성화점`,
        위치: new kakao.maps.LatLng(36.6176114, 127.4460855)
    },
    {
        이름: `스타벅스 청주터미널점`,
        위치: new kakao.maps.LatLng(36.6263053, 127.4323169)
    },
    {
        이름: `스타벅스 청주지웰시티점`,
        위치: new kakao.maps.LatLng(36.6416187, 127.4281864)
    },
];
let 클러스터에사용할마커들 = []; // 빈배열 선언
// 스벅객체 돌면서 각 값을 이용하여 마커 생성 후 마커들에 삽입
for (const 매장 of 스타벅스매장리스트) {
    // 마커생성
    let 새마커 = new kakao.maps.Marker({
        map: 기준지도,
        position: 매장.위치
    });
    // 정보창에 표시할 내용
    let 새정보창 = new kakao.maps.InfoWindow({
        content: `<div class="iw">${매장.이름}</div>`
    });
    클러스터에사용할마커들.push(새마커); // 매장정보를 이용해서 만든 마커를 마커들배열에 추가

    // 마커에 이벤트를 등록합니다
    // 마커에 마우스오버하면 makeOverListener() 실행
    kakao.maps.event.addListener(새마커, 'mouseover', 마우스오버시실행(기준지도, 새마커, 새정보창));
    // 마커에서 마우스아웃하면 makeOutListener() 실행
    kakao.maps.event.addListener(새마커, 'mouseout', 마우스아웃시실행(새정보창));
}
console.log(클러스터에사용할마커들);


// 클로저: 함수의 리턴값이 익명함수인경우, 함수참조값을 익명함수가 땡겨쓰려할 때 사용한다.

// 이벤트 리스너로는 클로저를 만들어 등록합니다 
// 이벤트 리스너로는 클로저를 만들어 등록, 클로저를 만들어 주지 않으면 마지막 마커에만 등록됨.
function 마우스오버시실행(기준지도, 마커, 정보창) {
    return function () {
        정보창.open(기준지도, 마커);
    };
}
// 정보창을 닫는 클로저를 만드는 함수입니다 
function 마우스아웃시실행(정보창) {
    return function () {
        정보창.close();
    };
}

// 클러스터러 생성하기
스벅클러스터러.addMarkers(클러스터에사용할마커들)



/** 기존소스
 *  const lat = 37.55684;
    const lng = 126.91404;

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표 - 이지스퍼블리싱
            level: 14 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    // 마커 클러스터러를 생성합니다 
    var clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
      minLevel: 10 // 클러스터 할 최소 지도 레벨 
    });

    var positions = [
      {
        title: '<div style="padding:5px;font-size:0.9rem;">이지스퍼블리싱</div>',
        latlng: new kakao.maps.LatLng(37.55684, 126.91404)    
      },
      {
        title: '<div style="padding:5px;font-size:0.9rem;">테스트1</div>',
        latlng: new kakao.maps.LatLng(37.55834, 126.91302)        
      },
      {
        title: '<div style="padding:5px;font-size:0.9rem;">테스트2</div>',
        latlng: new kakao.maps.LatLng(37.55483, 126.91276)
      },
      {
        title: '<div style="padding:5px;font-size:0.9rem;">테스트3</div>',
        latlng: new kakao.maps.LatLng(37.55744, 126.91860)
      }    
    ];

    // 마커들을 모아놓을 변수
    var markers = [];

    for(let i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
          map: map,
          position: positions[i].latlng
      });

      markers.push(marker);   // 마커를 배열에 추가합니다

      var infowindow = new kakao.maps.InfoWindow( {
        content : positions[i].title   // 인포윈도우에 표시할 내용
      });

      // 마커에 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다 
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다

      // 마커에 마우스오버하면 makeOverListener() 실행
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));  
      // 마커에서 마우스아웃하면 makeOutListener() 실행
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));   
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);          
        };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }

    clusterer.addMarkers(markers);
 */