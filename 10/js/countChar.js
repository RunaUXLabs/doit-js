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

const result = counting(string, letter);
document.write(`"${string}"에는 "${letter}"가 ${result}개 있습니다.`);
