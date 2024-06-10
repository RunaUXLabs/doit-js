let json = '{"grade": 3, "age": 25}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new Error("이름 카테고리가 없습니다.");
  }
} catch (err) {
  // 신규에러객체를 만들어서 name따로 message 분리해서 찍어볼 땐, catch(){}에서 물어보면 된다, 브라우저 콘솔에 바로 찍으면 message가 undefined로 뜸
  // console.error(err);
  console.error(`error name : ${err.name}`);
  console.error(`error message : ${err.message}`);
}