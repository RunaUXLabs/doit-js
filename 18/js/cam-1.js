let url = `https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=서비스키입력&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest`;

// json 형태일때
// fetch(url)
//     .then(결과 => 결과.json()) // json을 파싱해서 객체로 가져와라
//     .then(내용물 =>{
//         console.log(내용물)
//     })

// xml형태로 들어오면 json파싱 안됨 
// xml파싱을 따로 해야함
fetch(url)
    .then(결과 => 결과.text()) // xml을 텍스트로 파싱해서 객체로 가져와라
    .then(내용물 => {
        let 변형데이터 = new DOMParser().parseFromString(내용물, "text/xml");
        // 객체로 가져온 내용물을 DOM으로 구현
        console.log(변형데이터); // 태그로 들어온 상태 파악
        console.log(변형데이터.querySelectorAll('item'));
        // 각 정보가 담겨있는 <item>태그로 된 정보를 모두 찾아다가 노드리스트로 유사배열 만들기
        console.log(변형데이터.querySelectorAll('item')[5].querySelector('facltNm').textContent);
        // 캠핑장명 출력, 출력하고자하는 태그명을 쓰면 된다.
    });