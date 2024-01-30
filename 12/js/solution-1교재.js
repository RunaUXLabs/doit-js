const url = "https://reqres.in/api/products/09"; // url이 긴 경우 변수처리한다
const result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let obj = JSON.parse(xhr.responseText);
    console.log(obj);
    let product = obj.data;
    //파싱해온 객체가 중첩구조라서 찐데이터까지 접근이 길어진다면 해당접근까지 변수처리한다. 

    result.innerHTML = `
      <p>상품명 : ${product.name}</p>
      <p>생산년도 : ${product.year}</p>
    `;
  } else if (xhr.status === 404) {
    // 파일이 없을 때 메시지 띄우기
    result.innerHTML = ` 데이터가 존재하지 않습니다 `;
  }
};

// fetch연습하기
// fetch('student.json')
//   .then(response => response.json())
//   .then(json => {
//   });