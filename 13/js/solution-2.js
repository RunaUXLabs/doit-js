// const quotesURL = "http://dummyjson.com/quotes";
const quotesURL = "js/quotes.json";

fetch(quotesURL) // 파일 가져와라
  .then(response => response.json()) // 가져온 파일 객체로 파싱해라
  .then(data => {
    console.log(data);
    // data는 배열안에 30개의 객체형태로 출력되었음
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    // data가 30개였으므로 인덱스번호 기준으로 0~29까지의 번호중 1개의 랜덤번호를 뽑는 변수 설정

    /** 체이닝을 이용하여 선택자 접근도 가능하다.
     *  #result의 자식 .quote와 .author
     *  document.querySelector("#result > .quote")
     *  document.querySelector("#result").querySelector(".quote")
     *  result.childNodes  텍스트노드포함 배열로 나옴
     *  result.childNodes[1], result.childNodes[3]
     * */
    // console.log(result);
    // console.log(result.childNodes);
    // console.log(result.childNodes[1]);

    // result.childNodes[1].textContent = `${data.quotes[random].quote}`;
    // result.childNodes[3].textContent = ` - ${data.quotes[random].author}`;
    result.querySelector(".quote").textContent = `${data.quotes[random].quote}`;
    result.querySelector(".author").textContent = ` - ${data.quotes[random].author}`;
  })
  .catch(error => console.log(error)); // 에러처리가능, fetch가 프로미스를 뱉어주므로 try... catch의 catch만 빼서 사용가능