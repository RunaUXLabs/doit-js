const today = new Date();  // 현재 날짜와 시간 정보를 담은 today 객체
console.log(today);
const hrs = today.getHours();  // 현재 시간 중 시(hour) 정보 가져오기
console.log(hrs);
const container = document.querySelector("#container");

let newImg = document.createElement("img");
newImg.src = (hrs < 12) ? "images/morning.jpg" : "images/afternoon.jpg";
// src속성을 따로 생성해서 추가하지 않았어도 기본값이면 인식한다.
container.appendChild(newImg);