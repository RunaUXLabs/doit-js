// xml
// let url = `https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest`;

// 인증키 분리
let key = `gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D`;

let url2 = `https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${key}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest`;

// json
// let url3 = `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=test&serviceKey=${key}&_type=json`;
let url3 = `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=test&serviceKey=gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D&_type=json`;

let api1 = fetch(url2); // xml파일 읽어와라
console.log(api1);

let api2 = fetch(url3); // json파일 읽어와라
console.log(api2);

// xml확인
api1
  .then((response) => response.text())
  .then(
    xml => {
      let data = new DOMParser().parseFromString(xml, "text/xml"); // xml데이터 방식 DOM으로 구현
      console.log(data);
    }
  );

//json 확인
api2
  .then(response => response.json())
  .then(
    json => {
      console.log(json);

      let data = json.response.body.items.item;
      console.log(data);
      console.log(data[5].addr1);

    }
  );