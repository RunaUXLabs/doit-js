const box = document.querySelector("#box");

// box.addEventListener("mousemove", (e) => {  
//     console.log(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
//   });
  
  
  // 응용, 마우스를 따라다니는 아이콘
const body = document.querySelector("body");
const icon = document.querySelector("span");
box.addEventListener("mouseenter", () => icon.classList.add('on'));
box.addEventListener("mouseleave", () => icon.classList.remove('on'));

body.addEventListener("mousemove", (e) => {  
  icon.style.left = `${e.pageX - 30}px`
  icon.style.top = `${e.pageY - 30}px`
});