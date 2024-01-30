const email = document.querySelector('#userEmail');
const btn = document.querySelector('button');
const result = document.querySelector('#result');
// 이메일주소 확인 정규표현식
const regEmail = /^[a-z0-9_+.-]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/;
// @ 뒤로 나오는 도메인의수는 여러개여도 되는데, 마지막 도메인이 4자까지 가능

btn.addEventListener('click', (e) => {
    let emailC = regEmail.test(email.value);
    // 빈값을 넣어도 정규식은 false를 반환, 정규식이 틀려도 false
    result.textContent = emailC;
    if (!emailC) {// false로 나온다면 
        // 빈값이라면
        if (!email.value) {
            result.textContent = '이메일을 입력후 시도해 주시기 바랍니다.';
            return false;
        }
        // 빈값아니고 정규식위반이라면 
        result.textContent = '이메일 형식에 맞게 입력을 해주세요.';
        email.value = '';
        return false;
    } else {
        // true로 나온다면(정규식을 통과하면), 반타작
        username = email.value.split("@")[0];
        username = username.slice(0, (username.length / 2));
        domain = email.value.split("@")[1];
        result.textContent = `${username}***@${domain}`;
        email.value = '';
    }





    e.preventDefault(); // 버튼 새로고침 막기
    // html에서 form 마크업이 되어있을때 위주로 사용되지만, 그냥 깔고가도 문제없음

    // 앞글자 3자리 힌트
    // if(email.value !== ""){
    //     username = email.value.split("@")[0]
    //     // 메일주소에서 @기준으로 배열로 분할, 그중 0번 가져와 username에 할당
    //     console.log(email.value.split("@"))
    //     console.log(username)

    //     username = username.slice(0,3)
    //     console.log(username)
    //     // 변수 할당된 username에서 앞에서 3글자만 떼서 다시 username 재할당
    //     domain = email.value.split("@")[1] // 도메인

    //     result.textContent = `${username}******@${domain}` // 출력값 합체후 출력
    //     email.value = ""; // 공백만들기
    // }

    // 전체 아이디의 절반 힌트
    // if(email.value !== ""){
    //     username = email.value.split("@")[0]
    //     username = username.slice(0,(username.length / 2))
    //     // 반만 추출해서 username에 재할당
    //     domain = email.value.split("@")[1] // 도메인

    //     result.textContent = `${username}******@${domain}` // 출력값 합체후 출력
    //     email.value = ""; // 공백만들기
    // }
});
