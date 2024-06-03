function counting(str, ch) {
  let count = 0;

  // 문자열 안의 문자를 하나씩 체크
  for (let i of str) {
    // str들어온 문장은 배열로 반환될 때, 문자 1개씩 떼어져 보관
    // i를 통해서 매칭을 하라는것은 문자 1개씩 하고만 비교 가능하다
    if (i === ch) count += 1; // i가 ch인지 체크
  }
  return count;
}

const string = prompt("검사 진행할 문자열을 입력하세요.");
const letter = prompt("어떤 문자(활자개념)를 체크하겠습니까?");
// 단어아니고 활자입력, 단어찾으려면 더 보완을 해야함.

// 한글 단어로 된 내역을 찾아서 후처리(욕설제거 또는 표준어 처리 등)를 하고 싶다면 생각해야하는 flow!
// 1. 문장을 띄어쓰기 기준으로 쪼갠다.
// 2. 쪼개진 덩어리를 배열에 담기전에, 말미 처리(단어가 온전히 쓰인다면)를 한다.
// 3. 말미처리 된 단어를 배열에 담아서 원하는 단어와 매칭을 찾는다.
// 4. 찾을 단어를 올바른 단어로 바꿀건지, 해당 단어가 몇 개 있는지를 셀 건지에 따라 함수가 달라진다.

const result = counting(string, letter);
document.write(`"${string}"에는 "${letter}"(이)가 ${result}개 있습니다.`);
