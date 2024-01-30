const body = document.body;
const result = document.querySelector("#result");

body.addEventListener("keydown", (e) => {
  // console.log(e);
  result.innerText = `
  code : ${e.code}, 
  key : ${e.key}
  `;
  // e.code 키의 풀네임, e.key 키의 활자명
});