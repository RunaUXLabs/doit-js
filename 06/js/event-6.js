const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
  // console.log(e);
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
});


// 1분 복습하기
// // 박스에서 마우스를 움직였을 때 이벤트 발생위치 콘솔 찍기
box.addEventListener("mousemove", (e) => {
  console.log(`이벤트 발생 위치 X: ${e.pageX}, Y: ${e.pageY}`);
});