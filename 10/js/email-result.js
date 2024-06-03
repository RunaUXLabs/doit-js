const email = document.querySelector("#userEmail");
const button = document.querySelector("button");
const result = document.querySelector("#result");

// button.addEventListener("click", function() {
//   let username, domain;  

//   if (email.value !== "") {
//     username = email.value.split("@")[0];          // @ 기준으로 쪼개어 앞부분 저장
//     username = username.substring(0, 3);           // username 중 3자리만 필요
//     domain = email.value.split("@")[1];            // @ 기준으로 쪼개어 뒷부분 저장
//     result.innerText = `${username}***************@${domain}`;
//   }
// });


/*************************************************
  @앞에 표시할 username의 갯수를 고정하지 않고
  username 길이의 반만 표시하려고 할 때
**************************************************/

button.addEventListener("click", function () {
  let username, domain, half;

  if (email.value !== "") {
    username = email.value.split("@")[0];         // @ 기준으로 쪼개어 앞부분 저장
    half = Math.floor(username.length / 2);
    // username의 길이를 반으로 나누는데 홀수인 경우 소수점으로 들어오니, 이부분을 버리고 정수화
    username = username.substring(0, (username.length - half));
    // username에서 반으로 나눈 위치까지만 추출해서 username에 재할당
    domain = email.value.split("@")[1];// @ 기준으로 쪼개어 뒷부분 저장

    // 보완) half의 길이만큼 문자열을 생성해! 그 문자열을 username뒤로 붙이면,
    // 내 이메일 주소가 활자의 일부가 *표시된 형식으로 볼 수 있다.
    // *의 갯수를 세서 정확한 username을 유추해 볼 수 있다.

    // 방법1) *을 배열에 넣고 문자화 하기
    // let halfStar = [];
    // for (let i = 0; i < half; i++) {
    //   let ch = '*';
    //   halfStar.push(ch);
    // }
    // let maskingUsername = [...username, ...halfStar].join("");
    // result.innerText = `${maskingUsername}@${domain}`;

    // 방법2) *을 원하는 횟수만큼 반복하는 repeat()함수 사용하여 재할당 시키기
    result.textContent = username.length;
    let halfStar = '*'.repeat(half);
    let maskingUsername = `${username}${halfStar}`;
    result.innerText = `${maskingUsername}@${domain}`;

    email.value = "";
    // 텍스트 필드 지우기
  }
});