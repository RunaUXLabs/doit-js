// 더현대서울 위도, 경도
const 더현대위도 = '37.5258975', 더현대경도 = '126.9284261';
// 구글맵 검색을 통해 나온 url에서 3d와 4d다음에 나오는 수치를 추출하면 원하는 값 도출가능

// 더현대서울 지도 마커 클릭한 후 나오는 url
// https://www.google.co.kr/maps/place/%EB%8D%94%ED%98%84%EB%8C%80+%EC%84%9C%EC%9A%B8/data=!3m1!4b1!4m6!3m5!1s0x357b45c3d89d7801:0x7883571cabf15b8b!8m2!3d37.5258975!4d126.9284261!16s%2Fg%2F11pqrg9sjd?hl=ko&entry=ttu

// 지도를 삽입할 위치와 지도의 기본옵션설정
let 지도상자 = document.querySelector('#map'),
    지도옵션 = {
        center: new kakao.maps.LatLng(더현대위도, 더현대경도), // 위도와 경도를 지도의 중심으로 잡는다.
        level: 5 // 지도의 확대 레벨, 숫자가 작아질수록 확대된 지도
    };

// 지도 생성 new kakao.maps.Map(지도표시할곳, 지도옵션)
let 더현대지도 = new kakao.maps.Map(지도상자, 지도옵션);

// 마커 생성 및 옵션설정
// let 더현대서울마커위치 = new kakao.maps.LatLng(더현대위도, 더현대경도);
let 더현대서울마커위치 = 지도옵션.center;
let 더현대서울마커 = new kakao.maps.Marker({
    position: 더현대서울마커위치
});
// 마커 지도위에 얹기(지도에 얹는다는 선언까지 해줘야 화면에 보임)
더현대서울마커.setMap(더현대지도);


// 인포윈도우에 표출될 옵션설정
let 정보창옵션 = {
    // map: 더현대지도,
    // position : iw위치, // map과 position부분을 생성할때 표시하지 않고 마커 클릭이벤트로 처리할예정
    content: `<div class="iw">더현대서울</div>`,
    removable: true // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시
};
// 인포윈도우 객체 생성하고 지도에 표시 new kakao.maps.InfoWindow(옵션)
let 정보창 = new kakao.maps.InfoWindow(정보창옵션);

// 대상.addEventListener('이벤트', 콜백함수) // 대상에 이벤트걸기
// kakao.maps.event.addListener('대상', '이벤트', 콜백함수) // 카카오 맵 전체에 이벤트 걸기
kakao.maps.event.addListener(더현대서울마커, 'click', function () {
    // 더현대서울마커를 클릭하면 정보창이 열린다, 대상.open(원하는지도, 원하는위치)
    정보창.open(더현대지도, 더현대서울마커);
});



// // 마우스 호버로 커스텀오버레이1 사용해보기
// let customContent = '<div class ="customOverlay">커스텀오버레이 더현대서울</div>';
// let customOverlay = new kakao.maps.CustomOverlay({
//     position: 더현대서울마커위치,
//     content: customContent
// });

// // 마커에 이벤트 등록
// // 마커에 마우스오버하면 makeOverListener() 실행
// kakao.maps.event.addListener(더현대서울마커, 'mouseover', function () {
//     customOverlay.setMap(더현대지도);
// });
// // 마커에서 마우스아웃하면 makeOutListener() 실행
// kakao.maps.event.addListener(더현대서울마커, 'mouseout', function () {
//     customOverlay.setMap(null);
// });