// 학원을 기준으로 전국 캠핑장 위치 클러스터러로 표시하기
// 이지디자인컴퓨터학원 기준
const 학원위도 = 36.634997,
    학원경도 = 127.4577953;

let 지도상자 = document.querySelector('#map'), // 지도를 표시할 div 
    지도옵션 = {
        center: new kakao.maps.LatLng(학원위도, 학원경도), // 지도의 중심좌표
        level: 12 // 지도의 확대 레벨
    };
// 공공데이터포털에서 캠핑장정보 가져옴 // 240614일 기준 캠핑장 3924개, 요청속도 감안해서 제한된 숫자만 가져오기
const SERVICEKEY = `Iv76qim5Ny6HUJz794fWsPnAJ%2BwHb%2BsdheosUWgR8rbILCn7M9L6zNFDr%2FHWJtuGhpLXdiP%2FfvROWpDUW7Zupg%3D%3D`;
const url = `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=200&pageNo=1&MobileOS=ETC&MobileApp=mobile&serviceKey=${SERVICEKEY}&_type=json`;

fetch(url)
    .then(결과 => 결과.json())
    .then(내용물 => {
        console.log(내용물);
        // document.querySelector('.lottie').classList.add('off'); // 로티파일 감추기
        document.querySelector('.lottie').remove(); // 로티파일 감추기

        let 캠핑장들 = 내용물.response.body.items.item;
        console.log(캠핑장들);

        // 지도 생성 new kakao.maps.Map(지도표시할곳, 지도옵션)
        let 기준지도 = new kakao.maps.Map(지도상자, 지도옵션);
        // 클러스터러 객체만들기 new kakao.maps.MarkerClusterer(옵션)
        let 클러스터러옵션 = {
            map: 기준지도, // 클러스터 표시할 지도
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위도/경도 중심으로 클러스터의 중심위치설정
            minLevel: 9 // 클러스터링 할 최소지도레벨
        };
        let 캠핑장클러스터러 = new kakao.maps.MarkerClusterer(클러스터러옵션);

        let 캠핑장마커들 = []; // 빈배열 생성
        for (const 캠핑장 of 캠핑장들) {
            // 정보추출
            let 이름 = 캠핑장.facltNm;
            let 위도 = 캠핑장.mapY;
            let 경도 = 캠핑장.mapX;

            // 마커생성
            let 마커 = new kakao.maps.Marker({
                map: 기준지도,
                position: new kakao.maps.LatLng(위도, 경도)
            });
            // 정보창에 표시할 내용
            let 정보창 = new kakao.maps.InfoWindow({
                content: `<div class="iw">${이름}</div>`
            });
            캠핑장마커들.push(마커); // 캠핑장정보를 이용해서 만든 마커를 마커들배열에 추가

            // 마커에 이벤트를 등록합니다
            // 마커에 마우스오버하면 makeOverListener() 실행
            kakao.maps.event.addListener(마커, 'mouseover', 마우스오버시실행(기준지도, 마커, 정보창));
            // 마커에서 마우스아웃하면 makeOutListener() 실행
            kakao.maps.event.addListener(마커, 'mouseout', 마우스아웃시실행(정보창));
        }
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
        캠핑장클러스터러.addMarkers(캠핑장마커들);
    })
    .catch(err => console.log(err))
    .finally(
    // () => { 지도상자.classList.add('on'); }
);