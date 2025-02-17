// 학생들 리스트에 숨어있는 강사를 찾아서 빼기
// 클래스를 이용해 객체만들기
class Lecture {
  // 기본 골조, 프로퍼티
  constructor(강사여부, 강의아이디, 수강생들) {
    this.hasTutor = 강사여부;
    this.lectID = 강의아이디;
    this.members = 수강생들;
    // 키이름과 파라미터로 들어오는 값 할당 헷갈리지 말 것
  }
}
// 객체생성
// let 객체갈 될 변수명 = new Lecture(강사여부, 강의아이디, 수강생들)
let A반 = new Lecture(false, 'L001', ["안씨", "한씨", "박씨"]);  // 강사 없음
let B반 = new Lecture(true, 'L002', ["이씨", "최씨", "김씨"]);  // 강사 있음, 이씨가 강사임
console.log(B반);

function getStudents(classRoom) {
  let { hasTutor, lectID, members } = classRoom;
  // 파라미터로 들어온 정보 객체구조분해할당, hasTutor, lectID, members변수로 불러올수있음
  // console.log(members);
  let tutor, students; // 빈변수 선언
  hasTutor ? [tutor, ...students] = members : [...students] = members;
  // 1. 만들어진 객체에서 들어온 members를 추출하여 
  // 2. hasTutor의 여부를 가지고 삼항연산자로 분리해놓는다. 
  //    - true: 전개구문으로 선생+학생으로 배열분할
  //    - false: 전개구문으로 학생들로 배열 생성
  return students;
  // 3. students 변수를 뱉어라
}

// 응용) getStudents함수 보완해보기(시도가능한 수준임, 복제본에 연습해보고 업그레이드 한다)
// 구조분해할당되어 변수로 나온 tutor를 가지고(t/f), if문을 돌린다.
// 선생의 유무를 가지고 문구를 만든다.
// 파라미터 classRoom자리에 인자가 들어오면 선생유무 메시지까지 반환이 된다는 이야기 이니까, return을 배열로 뱉어서 밖에서 구조분해 할당하고 콘솔에 변수를 불러서 메시지를 완성시킨다.


// 강의 아이디를 찍고, 수강생만 뱉어라
console.log(`강의 : ${A반.lectID}, 수강생 : ${getStudents(A반)}`); //안씨, 한씨, 박씨
console.log(`강의 : ${B반.lectID}, 수강생 : ${getStudents(B반)}`); //최씨, 김씨


// -------------------------------
// 기존 소스에 대해서 업그레이드부분을 시스템의 흐름에 맞추어 글쓰기 연습을 하면 [응용]이라는 것이 된다.

// 추후 업그레이드여부 글써보기
// 고정값으로 함수를 돌렸기 때문에 전체 멤버에 대한 안내와 선생에 대한 안내가 없음.해당 메시지 추가해주기
// 수강신청 정원을 지정을 하고, 사용자는 수강신청 버튼을 눌러서 정원을 메꾸는 형식을 구성한다.
// 사용자가 수강과목에 대해서는 선택권을 주고, 완료를 눌렀을 때 최종 수강생으로 등록되도록 플로우를 짠다.
// 완료이후에는 수강신청 실시간 현황을 보여주는 UI를 생각해 본다.
// 수강정원이 다 차면 수강신청 버튼을 비활성화 해서, 다음사용자가 접근할수 없게 만든다.

// return값으로 배열을 뱉은 후 밖에서 구조분해할당하면 반환값을 여러개 쓸 수 있다.