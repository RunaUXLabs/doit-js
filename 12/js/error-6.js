let json = '{"grade": 3, "age": 25}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    // throw "사용자 이름이 없습니다."; // 일반적인 문자형 메시지
    throw new Error("사용자 이름이 없습니다.");
    // 신규 에러객체 생성, 이객체의 name은 Error, message가 파라미터로 들어온 문구가 됨
    // 기존 브라우저에 설정된 에러객체가 아니라 내가만든것을 띄우는거임

    // throw new 에러("사용자 이름이 없습니다."); // 불가, 생성자함수명을 내가 바꿀순 없다.
  }
} catch (err) {
  console.error(err);
  console.error(err.name); // Error로 잘 찍힘
  console.error(err.message);
  // throw 신규에러객체 만들 당시에 키:값형식으로 넣은것이 아니므로
  // Error.message라 물어보면 undefined
  // err.message라 물어보면 나옴
}