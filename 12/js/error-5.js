let json = '{"grade": 3, "age": 25}';

try {
  let user = JSON.parse(json);

  console.log(user.name); // undefined
  if (!user.name) {
    // 없는 키(조건) 찾는 방법
    throw "사용자 이름이 없습니다."; // throw 에러를 자수시킴, catch문으로 보냄
  }
  //if (!user.grade) {
  // throw "사용자 학년정보가 없습니다.";
  //// 에러가 생길법한 이슈를 throw 다음구문에 적어두면 오류를 미리 방지할 수 있다. 준비한 데이터를 기반으로 소스를 짰는데, 데이터가 변동되는 경우
  //}

  /** 가장 빡치는 경우가 내가 데이터를 해결할 수 없는 상황임.
    *  파일도 있어, 서버도 안정적이야, 일부 객체에는 데이터가 있어,
    *  극히 일부에서 알맹이가 빠져있는경우
    *  undefined로 표시되면서 데이터의 신뢰도가 떨어짐
    *  이런경우를 따로 짚어내서 오류메시지 뽑아내게 할 수 있음(에러캐치의 초기대응용)
    *  throw 예약어는 try{} 안에 써준다
    */
} catch (err) {
  console.error(err); // throw문을 통해 받은 커스텀 에러 표시
}