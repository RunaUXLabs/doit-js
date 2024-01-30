const quotesURL = "http://dummyjson.com/quotes";
// 외국명언 JSON

fetch(quotesURL) // 파일 가져와라
  .then(response => response.json()) // 파일 객체로 가져와서 파싱
  .then(data => {
    console.log(data);
    // 데이터 구조 파악. 30개 객체로 나옴. 한 번에 가져오는 데이터 갯수 확인
  })
  .catch(error => console.error(error)); // 못가져오면 에러띄워라
